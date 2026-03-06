"use client";

import {
  ConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { WalletConnectWalletAdapter } from "@walletconnect/solana-adapter";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { SOLANA_NETWORK, SOLANA_RPC_URL } from "@/lib/solana";
import { useMemo } from "react";

import "@solana/wallet-adapter-react-ui/styles.css";

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const network =
    SOLANA_NETWORK === "mainnet-beta"
      ? WalletAdapterNetwork.Mainnet
      : WalletAdapterNetwork.Devnet;

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new WalletConnectWalletAdapter({
        network,
        options: {
          projectId: "85caec5de0ac812440ae1c91753b192a",
          metadata: {
            name: "TINA Dashcam",
            description: "TINA Dashcam Pre-Order",
            url: "https://pioneer-pass.web.app",
            icons: ["https://pioneer-pass.web.app/tina-icon-256.png"],
          },
        },
      }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={SOLANA_RPC_URL}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </SolanaWalletProvider>
    </ConnectionProvider>
  );
}
