import { NavLink, ProductSpec, StatItem, TokenAllocation } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Token", href: "#token" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Specs", href: "#specs" },
];

export const STATS: StatItem[] = [
  { label: "Pre-Orders", value: 12847, suffix: "+" },
  { label: "Countries", value: 48, suffix: "+" },
  { label: "Road Data Mapped", value: 2.4, suffix: "M km" },
  { label: "TINA Token Price", value: 0.042, suffix: "", prefix: "$" },
];

export const TOKEN_ALLOCATIONS: TokenAllocation[] = [
  { label: "Mining Rewards", percentage: 40, color: "#22d3ee" },
  { label: "Community & Ecosystem", percentage: 25, color: "#2dd4bf" },
  { label: "Team & Advisors", percentage: 15, color: "#06b6d4" },
  { label: "Liquidity", percentage: 10, color: "#0891b2" },
  { label: "Reserve", percentage: 10, color: "#164e63" },
];

export const PRODUCT_SPECS: ProductSpec[] = [
  { label: "Resolution", value: "4K UHD (3840x2160)" },
  { label: "Frame Rate", value: "30fps / 60fps (1080p)" },
  { label: "Field of View", value: "140° Wide Angle" },
  { label: "GPS", value: "Built-in High-Precision" },
  { label: "Connectivity", value: "Wi-Fi 6 + Bluetooth 5.0" },
  { label: "Storage", value: "128GB Internal + microSD" },
  { label: "Mining Chip", value: "Solana SPV Module" },
  { label: "Night Vision", value: "Sony STARVIS 2 Sensor" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Install & Drive",
    description:
      "Mount the TINA dashcam on your windshield. It automatically starts recording and mapping road data as you drive.",
    icon: "Car" as const,
  },
  {
    step: 2,
    title: "Map & Mine",
    description:
      "Road imagery is processed on-device. Validated map data is uploaded to the decentralized network, earning TINA tokens.",
    icon: "Map" as const,
  },
  {
    step: 3,
    title: "Earn & Trade",
    description:
      "TINA tokens are deposited to your Solana wallet. Trade on DEXs, stake for rewards, or hold for governance rights.",
    icon: "Coins" as const,
  },
];

export const DASHCAM_PRICE_SOL = Number(
  process.env.NEXT_PUBLIC_DASHCAM_PRICE_SOL || "2.5"
);
export const DASHCAM_PRICE_USD = Number(
  process.env.NEXT_PUBLIC_DASHCAM_PRICE_USD || "399"
);
