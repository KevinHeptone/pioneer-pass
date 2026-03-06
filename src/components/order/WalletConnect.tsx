"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@/components/ui/Button";
import { Wallet, LogOut, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);

function isMobile() {
  if (typeof window === "undefined") return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function MobileWalletConnect() {
  const { publicKey, disconnect, connected, wallets, select } =
    useWallet();
  const [showModal, setShowModal] = useState(false);

  const handleWalletConnect = async () => {
    const wc = wallets.find((w) => w.adapter.name === "WalletConnect");
    if (wc) {
      // @ts-expect-error wallet name type
      select("WalletConnect");
      setShowModal(false);
      // Small delay to let select propagate, then connect
      await new Promise((r) => setTimeout(r, 200));
      try {
        await wc.adapter.connect();
      } catch {
        // user may reject
      }
    }
  };

  if (connected && publicKey) {
    const address = publicKey.toBase58();
    const short = `${address.slice(0, 4)}...${address.slice(-4)}`;

    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-surface border border-border rounded-xl px-4 py-2.5">
          <Wallet className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-mono text-text-primary">{short}</span>
        </div>
        <button
          onClick={() => disconnect()}
          className="p-2.5 rounded-xl border border-border bg-surface text-text-secondary hover:text-red-400 hover:border-red-400/30 transition-colors"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    );
  }

  const wcWallet = wallets.find((w) => w.adapter.name === "WalletConnect");

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => setShowModal(true)}
        className="gap-2"
      >
        <Wallet className="w-4 h-4" />
        Connect Wallet
      </Button>

      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative bg-surface border border-border rounded-2xl p-6 w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">
                Connect Wallet
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-full bg-background hover:bg-border transition-colors text-text-secondary"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {wcWallet && (
                <button
                  onClick={handleWalletConnect}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-background border border-border hover:border-cyan-500/30 transition-colors text-left"
                >
                  <Image
                    src={wcWallet.adapter.icon}
                    alt="WalletConnect"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-text-primary">
                      WalletConnect
                    </div>
                    <div className="text-xs text-text-secondary">
                      Phantom, Burrito, Klip...
                    </div>
                  </div>
                </button>
              )}
            </div>

            <p className="text-xs text-text-secondary mt-4 text-center">
              Connect with any Solana wallet app
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export function WalletConnect() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
  }, []);

  // PC: default WalletMultiButton (Phantom extension + others)
  // Mobile: custom WalletConnect-only UI
  if (mobile) {
    return <MobileWalletConnect />;
  }

  return <WalletMultiButton />;
}
