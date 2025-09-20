import React from "react";
import { motion } from "framer-motion";
import SolidButton from "@/app/components/SolidButton";
import OutlineButton from "@/app/components/OutlineButton";

export default function LandingHero() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center h-screen px-6 overflow-hidden bg-bg-cream-white text-text-dark">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        당신의 네일 라이프를 특별하게
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl mb-8 max-w-xl"
      >
        네일아트 리뷰, 스타일 공유, 커뮤니티까지 한 곳에서 즐기세요.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-4"
      >
        <SolidButton text="시작하기" />
        <OutlineButton text="더 알아보기" />
      </motion.div>
    </section>
  );
}
