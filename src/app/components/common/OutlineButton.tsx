"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function OutlineButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/sign-in")}
      className="px-6 py-3 rounded-full border border-pink-500 text-pink-500 font-semibold hover:bg-pink-50 transition"
    >
      회원가입하기
    </button>
  );
}
