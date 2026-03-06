"use client";

import { DASHCAM_PRICE_SOL } from "@/lib/constants";
import { MERCHANT_WALLET } from "@/lib/solana";
import { encodeURL } from "@solana/pay";
import { PublicKey } from "@solana/web3.js";
import BigNumber from "bignumber.js";
import QRCode from "qrcode";
import { useEffect, useRef } from "react";

interface QRCodePaymentProps {
  quantity: number;
}

export function QRCodePayment({ quantity }: QRCodePaymentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const amount = new BigNumber(DASHCAM_PRICE_SOL).multipliedBy(quantity);
    const recipient = new PublicKey(MERCHANT_WALLET);

    const url = encodeURL({
      recipient,
      // @ts-expect-error bignumber.js v10 vs v9 type mismatch
      amount,
      label: "TINA Dashcam Pre-Order",
      message: `TINA Dashcam x${quantity} Pioneer Edition`,
    });

    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url.toString(), {
        width: 256,
        color: {
          dark: "#22d3ee",
          light: "#0a1020",
        },
        margin: 2,
      });
    }
  }, [quantity]);

  return (
    <div className="text-center">
      <p className="text-sm text-text-secondary mb-4">
        Scan with a Solana-compatible wallet
      </p>
      <div className="inline-block rounded-2xl border border-border bg-surface p-4">
        <canvas ref={canvasRef} />
      </div>
      <p className="text-xs text-text-secondary mt-3">
        Amount: {(DASHCAM_PRICE_SOL * quantity).toFixed(1)} SOL
      </p>
    </div>
  );
}
