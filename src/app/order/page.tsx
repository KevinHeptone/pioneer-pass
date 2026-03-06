"use client";

import { Container } from "@/components/ui/Container";
import { GlowText } from "@/components/ui/GlowText";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { OrderForm } from "@/components/order/OrderForm";
import { OrderSummary } from "@/components/order/OrderSummary";
import { SolanaPayButton } from "@/components/order/SolanaPayButton";
import { QRCodePayment } from "@/components/order/QRCodePayment";
import { WalletConnect } from "@/components/order/WalletConnect";
import { OrderFormData, OrderStatus } from "@/types";
import { CheckCircle, AlertCircle, QrCode, Wallet } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const initialFormData: OrderFormData = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  country: "",
  postalCode: "",
  quantity: 1,
};

export default function OrderPage() {
  const [formData, setFormData] = useState<OrderFormData>(initialFormData);
  const [status, setStatus] = useState<OrderStatus>("form");
  const [paymentMethod, setPaymentMethod] = useState<"wallet" | "qr">(
    "wallet"
  );
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.address &&
    formData.city &&
    formData.country &&
    formData.postalCode;

  if (status === "confirmed") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Order Confirmed!
          </h1>
          <p className="text-text-secondary mb-6">
            Your TINA dashcam pre-order has been placed. You&apos;ll receive a
            confirmation email shortly.
          </p>
          {signature && (
            <div className="bg-surface border border-border rounded-xl p-4 mb-6">
              <div className="text-xs text-text-secondary mb-1">
                Transaction Signature
              </div>
              <div className="font-mono text-xs text-cyan-400 break-all">
                {signature}
              </div>
            </div>
          )}
          <Link
            href="/"
            className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <GlowOrb className="w-[400px] h-[400px] top-20 right-0" />

      <Container>
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
            Pre-Order <GlowText>TINA Dashcam</GlowText>
          </h1>
          <p className="text-text-secondary">
            Pioneer Edition - Pay with SOL on Solana
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Form */}
          <div className="space-y-8">
            <OrderForm formData={formData} onChange={setFormData} />

            {/* Payment method tabs */}
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Payment
              </h2>
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setPaymentMethod("wallet")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors ${
                    paymentMethod === "wallet"
                      ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                      : "border border-border text-text-secondary hover:border-border/80"
                  }`}
                >
                  <Wallet size={16} />
                  Wallet
                </button>
                <button
                  onClick={() => setPaymentMethod("qr")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors ${
                    paymentMethod === "qr"
                      ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                      : "border border-border text-text-secondary hover:border-border/80"
                  }`}
                >
                  <QrCode size={16} />
                  QR Code
                </button>
              </div>

              {paymentMethod === "wallet" ? (
                <div className="space-y-4">
                  <WalletConnect />
                  <SolanaPayButton
                    quantity={formData.quantity}
                    disabled={!isFormValid}
                    onSuccess={(sig) => {
                      setSignature(sig);
                      setStatus("confirmed");
                    }}
                    onError={(err) => {
                      setError(err);
                      setStatus("error");
                    }}
                  />
                </div>
              ) : (
                <QRCodePayment quantity={formData.quantity} />
              )}

              {status === "error" && error && (
                <div className="mt-4 flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl p-3">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Right column - Summary */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <OrderSummary
              quantity={formData.quantity}
              onQuantityChange={(qty) =>
                setFormData({ ...formData, quantity: qty })
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
