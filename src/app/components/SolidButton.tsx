import React from "react";

interface SolidButtonProps {
  text: string;
}

function SolidButton({ text }: SolidButtonProps) {
  return (
    <button className="bg-[#3E2C25] text-[#FDF6F0] font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform">
      {text}
    </button>
  );
}

export default SolidButton;
