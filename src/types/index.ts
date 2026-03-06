export interface ProductSpec {
  label: string;
  value: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TokenAllocation {
  label: string;
  percentage: number;
  color: string;
}

export interface OrderFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  quantity: number;
}

export type OrderStatus = "form" | "processing" | "confirmed" | "error";
