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
      className="py-20 px-6  border-t border-gray-200"
    >
      <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto items-center space-y-4 md:space-y-0">
        <div className="text-sm text-gray-500">
          © 2024 네일라이프. All rights reserved.
        </div>
        <div className="flex space-x-6 text-sm">
          <a
            href="#"
            className="text-gray-500 hover:text-pink-600 transition-colors"
          >
            개인정보처리방침
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-pink-600 transition-colors"
          >
            이용약관
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-pink-600 transition-colors"
          >
            쿠키 정책
          </a>
        </div>
      </div>
    </motion.div>
  );
}
