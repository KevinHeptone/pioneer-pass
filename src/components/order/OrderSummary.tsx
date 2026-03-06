"use client";

import { DASHCAM_PRICE_SOL, DASHCAM_PRICE_USD } from "@/lib/constants";
import { Minus, Plus } from "lucide-react";

interface OrderSummaryProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
}

export function OrderSummary({ quantity, onQuantityChange }: OrderSummaryProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-xl font-semibold text-text-primary mb-6">
        Order Summary
      </h2>

      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-text-primary font-medium">TINA Dashcam</div>
          <div className="text-sm text-text-secondary">Pioneer Edition</div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="w-8 h-8 rounded-lg border border-border bg-background flex items-center justify-center text-text-secondary hover:border-cyan-500/50 transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="font-mono text-text-primary w-8 text-center">
            {quantity}
          </span>
          <button
            onClick={() => onQuantityChange(Math.min(5, quantity + 1))}
            className="w-8 h-8 rounded-lg border border-border bg-background flex items-center justify-center text-text-secondary hover:border-cyan-500/50 transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      <div className="space-y-3 border-t border-border pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Unit Price</span>
          <span className="text-text-primary font-mono">
            {DASHCAM_PRICE_SOL} SOL
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Quantity</span>
          <span className="text-text-primary font-mono">{quantity}</span>
        </div>
        <div className="flex justify-between text-sm border-t border-border pt-3">
          <span className="text-text-primary font-medium">Total</span>
          <div className="text-right">
            <div className="text-cyan-400 font-bold font-mono text-lg">
              {(DASHCAM_PRICE_SOL * quantity).toFixed(1)} SOL
            </div>
            <div className="text-xs text-text-secondary">
              ~${(DASHCAM_PRICE_USD * quantity).toLocaleString()} USD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
