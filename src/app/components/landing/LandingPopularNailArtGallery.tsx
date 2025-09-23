import React from "react";
import { motion } from "framer-motion";

// 임시 네일아트 이미지 데이터
const nailArtStyles = [
  {
    id: 1,
    image: "/public/file.svg", // TODO: 실제 이미지 경로로 교체 필요
    title: "글리터 프렌치",
    hashtag: "#트렌디 #글리터 #프렌치",
  },
  {
    id: 2,
    image: "/public/globe.svg",
    title: "마블 네일",
    hashtag: "#마블 #감성 #MZ",
  },
  {
    id: 3,
    image: "/public/next.svg",
    title: "컬러 믹스",
    hashtag: "#컬러풀 #믹스매치",
  },
];

const LandingPopularNailArtGallery: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-bg-white text-text-dark">
      <h2 className="text-4xl font-bold text-center mb-12">
        인기 네일아트 스타일
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {nailArtStyles.map((style, idx) => (
          <motion.div
            key={style.id}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0, delay: 0 }}
            className="flex flex-col items-center rounded-xl shadow p-6 bg-bg-white cursor-pointer"
          >
            <img
              src={style.image}
              alt={style.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{style.title}</h3>
            <span className="text-text-medium text-base">{style.hashtag}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LandingPopularNailArtGallery;
