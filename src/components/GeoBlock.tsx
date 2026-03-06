"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

const BLOCKED_COUNTRIES = ["CN", "KP", "CU", "SY"];

export function GeoBlock({ children }: { children: React.ReactNode }) {
  const [blocked, setBlocked] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code && BLOCKED_COUNTRIES.includes(data.country_code)) {
          setBlocked(true);
        }
      })
      .catch(() => {
        // API 실패 시 차단하지 않음
      })
      .finally(() => setChecked(true));
  }, []);

  if (!checked) return null;

  if (blocked) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            Access Restricted
          </h1>
          <p className="text-text-secondary">
            This service is not available in your region due to regulatory
            restrictions.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
