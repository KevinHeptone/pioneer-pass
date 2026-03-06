import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WalletProvider } from "@/providers/WalletProvider";
import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";
import { GeoBlock } from "@/components/GeoBlock";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "TINA Dashcam | Drive. Map. Earn.",
  description:
    "The TINA dashcam mines Solana tokens while you drive. An INAVI x Hepton collaboration. Pre-order now with SOL.",
  icons: {
    icon: "/tina-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-text-primary`}
      >
        <GeoBlock>
          <WalletProvider>
            <FirebaseAnalytics />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </WalletProvider>
        </GeoBlock>
      </body>
    </html>
  );
}
