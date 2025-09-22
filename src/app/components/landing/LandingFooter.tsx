import React from "react";
import { motion } from "framer-motion";

export default function LandingFooter() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="py-20 px-6 bg-gray-50 border-t border-gray-100"
    >
      <div className="flex text-gray-700 flex-col md:flex-row justify-between max-w-5xl mx-auto items-center space-y-4 md:space-y-0">
        <div className="text-sm ">© 2025 TipTalk - All rights reserved</div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className=" hover:text-pink-600 transition-colors">
            개인정보처리방침
          </a>
          <a href="#" className=" hover:text-pink-600 transition-colors">
            이용약관
          </a>
          <a href="#" className=" hover:text-pink-600 transition-colors">
            쿠키 정책
          </a>
        </div>
      </div>
    </motion.div>
  );
}
