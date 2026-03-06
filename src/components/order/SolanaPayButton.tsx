"use client";

import { Button } from "@/components/ui/Button";
import { DASHCAM_PRICE_SOL } from "@/lib/constants";
import { MERCHANT_WALLET } from "@/lib/solana";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  PublicKey,
  Transaction,
  TransactionInstruction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import BigNumber from "bignumber.js";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface SolanaPayButtonProps {
  quantity: number;
  disabled: boolean;
  onSuccess: (signature: string) => void;
  onError: (error: string) => void;
}

export function SolanaPayButton({
  quantity,
  disabled,
  onSuccess,
  onError,
}: SolanaPayButtonProps) {
  const { connection } = useConnection();
  const { publicKey, signTransaction, sendTransaction } = useWallet();
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    if (!publicKey) {
      onError("Please connect your wallet first");
      return;
    }

    setLoading(true);
    try {
      const amount = new BigNumber(DASHCAM_PRICE_SOL).multipliedBy(quantity);
      const lamports = amount.multipliedBy(LAMPORTS_PER_SOL).toNumber();
      const recipient = new PublicKey(MERCHANT_WALLET);

      const orderId = `TINA-${Date.now()}`;
      const memo = `${orderId}|TINA Dashcam Pioneer x${quantity}`;

      const MEMO_PROGRAM_ID = new PublicKey(
        "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
      );

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipient,
          lamports,
        }),
        new TransactionInstruction({
          keys: [{ pubkey: publicKey, isSigner: true, isWritable: true }],
          programId: MEMO_PROGRAM_ID,
          data: Buffer.from(memo, "utf-8"),
        })
      );

      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash("confirmed");
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      let signature: string;

      if (signTransaction) {
        const signed = await signTransaction(transaction);
        signature = await connection.sendRawTransaction(signed.serialize());
      } else {
        signature = await sendTransaction(transaction, connection);
      }

      await connection.confirmTransaction(
        { signature, blockhash, lastValidBlockHeight },
        "confirmed"
      );

      onSuccess(signature);
    } catch (err) {
      onError(err instanceof Error ? err.message : "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePay}
      disabled={disabled || loading || !publicKey}
      size="lg"
      className="w-full"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        `Pay ${(DASHCAM_PRICE_SOL * quantity).toFixed(1)} SOL`
      )}
    </Button>
  );
}
