"use client";

import React from "react";

interface outlineButtonProps {
  text: string;
  onClick?: () => void;
}

export default function OutlineButton({ text, onClick }: outlineButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-full border border-black-500 text-black-500 font-semibold hover:bg-pink-50 transition"
    >
      {text}
    </button>
  );
}
