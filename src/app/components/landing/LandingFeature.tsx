import React from "react";
import { motion } from "framer-motion";

export default function LandingFeature() {
  const features = [
    {
      title: "트렌디 디자인",
      desc: "최신 네일 트렌드를 한눈에 확인하고 공유할 수 있어요.",
    },
    {
      title: "커뮤니티 소통",
      desc: "다른 유저들과 리뷰와 팁을 쉽게 나눌 수 있어요.",
    },
    {
      title: "빠른 검색",
      desc: "원하는 네일 스타일, 컬러, 숍 정보를 빠르게 찾아요.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-bg-white text-text-dark">
      <h2 className="text-4xl font-bold text-center mb-12">주요 기능</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex flex-col items-center p-6 rounded-xl shadow cursor-pointer bg-bg-cream-white"
          >
            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-center text-text-medium">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
