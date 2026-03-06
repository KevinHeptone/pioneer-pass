"use client";

import { DASHCAM_PRICE_SOL } from "@/lib/constants";
import { MERCHANT_WALLET } from "@/lib/solana";
import { encodeURL } from "@solana/pay";
import { PublicKey } from "@solana/web3.js";
import BigNumber from "bignumber.js";
import QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";

function isMobile() {
  if (typeof window === "undefined") return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function buildSolanaPayUrl(quantity: number) {
  const amount = new BigNumber(DASHCAM_PRICE_SOL).multipliedBy(quantity);
  const recipient = new PublicKey(MERCHANT_WALLET);

  const memo = `TINA-${Date.now()}|TINA Dashcam Pioneer x${quantity}`;

  const url = encodeURL({
    recipient,
    // @ts-expect-error bignumber.js v10 vs v9 type mismatch
    amount,
    label: "TINA Dashcam Pre-Order",
    message: `TINA Dashcam x${quantity} Pioneer Edition`,
    memo,
  });

  return url.toString();
}

function QRCodeView({ quantity }: { quantity: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const url = buildSolanaPayUrl(quantity);
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, {
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

function MobilePayLink({ quantity }: { quantity: number }) {
  const handleOpen = () => {
    const url = buildSolanaPayUrl(quantity);
    window.location.href = url;
  };

  return (
    <div className="text-center space-y-4">
      <p className="text-sm text-text-secondary">
        Open in your Solana wallet app to pay
      </p>
      <Button onClick={handleOpen} variant="secondary" size="lg" className="gap-2">
        <ExternalLink className="w-4 h-4" />
        Pay {(DASHCAM_PRICE_SOL * quantity).toFixed(1)} SOL with Wallet App
      </Button>
      <p className="text-xs text-text-secondary">
        Supports Phantom, Solflare, and other Solana Pay wallets
      </p>
    </div>
  );
}

interface QRCodePaymentProps {
  quantity: number;
}

export function QRCodePayment({ quantity }: QRCodePaymentProps) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
  }, []);

  if (mobile) {
    return <MobilePayLink quantity={quantity} />;
  }

  return <QRCodeView quantity={quantity} />;
}
