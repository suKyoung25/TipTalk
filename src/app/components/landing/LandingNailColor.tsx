"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LandingNailColor() {
  //   TODO: 상수로 빼기
  const nailColors = [
    { name: "핑크 누드", hex: "#F4D7D0" },
    { name: "크림 화이트", hex: "#FDF6F0" },
    { name: "모카 브라운", hex: "#C8A87C" },
    { name: "라벤더", hex: "#D8B4E2" },
    { name: "민트", hex: "#A8E6CF" },
  ];

  const [liked, setLiked] = useState<boolean[]>(
    Array(nailColors.length).fill(false)
  );

  const toggleLike = (index: number) => {
    const newLikes = [...liked];
    newLikes[index] = !newLikes[index];
    setLiked(newLikes);
  };

  return (
    <section
      id="colors"
      className="py-20 px-6 bg-bg-cream-white text-text-dark"
    >
      <h2 className="text-4xl font-bold text-center mb-12">오늘의 네일 컬러</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {nailColors.map((color, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative flex flex-col items-center rounded-xl shadow p-4 cursor-pointer bg-bg-white"
          >
            <div
              className="w-24 h-24 rounded-full mb-4 border"
              style={{ backgroundColor: color.hex, borderColor: "#C4C4C4" }}
            />
            <h3 className="text-center font-semibold">{color.name}</h3>
            <button
              onClick={() => toggleLike(idx)}
              className={`absolute top-3 right-3 text-xl transition-transform ${
                liked[idx] ? "text-pink-500 scale-110" : "text-text-light"
              }`}
            >
              ♥
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
