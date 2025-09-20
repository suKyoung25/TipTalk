"use client";

import React from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onShowPasswordToggle?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type = "text",
  name,
  value,
  placeholder,
  icon,
  showPasswordToggle = false,
  showPassword,
  onShowPasswordToggle,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-deep-brown mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
        <input
          type={showPasswordToggle && showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-3 border border-nude-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent bg-cream-white`}
        />
        {showPasswordToggle && onShowPasswordToggle && (
          <button
            type="button"
            onClick={onShowPasswordToggle}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-gold hover:text-deep-brown"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
