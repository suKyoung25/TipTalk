"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LandingNailColor() {
  // 추천 색상 조합 데이터
  const colorCombos = [
    {
      name: "핑크&크림 믹스",
      colors: ["#F4D7D0", "#FDF6F0"],
      hashtag: "#러블리 #봄 #여리여리",
    },
    {
      name: "모카&화이트&골드",
      colors: ["#C8A87C", "#FDF6F0", "#FFD700"],
      hashtag: "#고급스러움 #데일리 #심플",
    },
    {
      name: "라벤더&민트",
      colors: ["#D8B4E2", "#A8E6CF"],
      hashtag: "#트렌디 #MZ #컬러믹스",
    },
    {
      name: "블루&실버",
      colors: ["#7EC8E3", "#C0C0C0"],
      hashtag: "#시원함 #여름 #포인트",
    },
  ];

  return (
    <section
      id="color-combos"
      className="py-20 px-6 bg-bg-cream-white text-text-dark"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        오늘의 네일 컬러 조합
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {colorCombos.map((combo, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0, delay: idx * 0 }}
            className="flex flex-col items-center rounded-xl shadow p-6 bg-bg-white cursor-pointer"
          >
            <div className="flex gap-2 mb-4">
              {combo.colors.map((hex, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border"
                  style={{ backgroundColor: hex, borderColor: "#C4C4C4" }}
                />
              ))}
            </div>
            <h3 className="text-center font-semibold mb-2">{combo.name}</h3>
            <span className="text-text-medium text-base">{combo.hashtag}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
