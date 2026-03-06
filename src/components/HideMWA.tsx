"use client";

import { useEffect } from "react";

export function HideMWA() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const buttons = document.querySelectorAll(
        ".wallet-adapter-modal-list .wallet-adapter-button"
      );
      buttons.forEach((btn) => {
        if (btn.textContent?.includes("Mobile Wallet Adapter")) {
          const li = btn.closest("li");
          if (li) li.style.display = "none";
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
