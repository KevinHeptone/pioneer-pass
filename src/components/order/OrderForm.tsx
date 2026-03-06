"use client";

import { OrderFormData } from "@/types";

interface OrderFormProps {
  formData: OrderFormData;
  onChange: (data: OrderFormData) => void;
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm text-text-secondary mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        required={required}
        className="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-text-primary text-sm focus:outline-none focus:border-cyan-500 transition-colors"
      />
    </div>
  );
}

export function OrderForm({ formData, onChange }: OrderFormProps) {
  const handleChange = (name: string, value: string) => {
    onChange({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-text-primary mb-4">
        Shipping Information
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <Field
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Field
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <Field
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
      />
      <Field
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      <div className="grid grid-cols-2 gap-4">
        <Field
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <Field
          label="Postal Code"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />
      </div>

      <Field
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />
    </div>
  );
}
