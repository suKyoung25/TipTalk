"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import OutlineButton from "@/app/components/OutlineButton";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          className="text-xl font-bold text-[#3E2C25]"
          onClick={() => router.push("/")}
        >
          NailCommunity
        </h1>
        <div className="flex gap-4 items-center">
          <OutlineButton
            text="로그인"
            onClick={() => router.push("/sign-in")}
          />
        </div>
      </div>
    </nav>
  );
}
