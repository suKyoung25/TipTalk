"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Heart,
  Users,
  Camera,
  Sparkles,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
} from "lucide-react";

type SignupForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 실제로는 여기서 회원가입/로그인 로직을 처리
    if (currentPage === "signup" || currentPage === "login") {
      setCurrentPage("home");
    }
  };

  return (
    <div className="min-h-screen bg-cream-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-nude-beige p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-rose-gold rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold text-deep-brown">NailHub</span>
          </div>
          <h2 className="text-2xl font-bold text-deep-brown mb-2">회원가입</h2>
          <p className="text-deep-brown/70">네일 아트 여정을 시작해보세요!</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-deep-brown mb-2">
              이름
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-rose-gold" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-nude-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent bg-cream-white"
                placeholder="이름을 입력하세요"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-deep-brown mb-2">
              이메일
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-rose-gold" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-nude-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent bg-cream-white"
                placeholder="이메일을 입력하세요"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-deep-brown mb-2">
              비밀번호
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-rose-gold" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 border border-nude-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent bg-cream-white"
                placeholder="비밀번호를 입력하세요"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-gold hover:text-deep-brown"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-deep-brown mb-2">
              비밀번호 확인
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-rose-gold" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-nude-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent bg-cream-white"
                placeholder="비밀번호를 다시 입력하세요"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 bg-rose-gold text-white rounded-xl hover:bg-deep-brown font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            회원가입
          </button>
        </div>

        <div className="mt-6 text-center">
          <span className="text-deep-brown/70">이미 회원이신가요? </span>
          <button
            onClick={() => setCurrentPage("login")}
            className="text-rose-gold hover:text-deep-brown font-semibold"
          >
            로그인
          </button>
        </div>

        <button
          onClick={() => setCurrentPage("landing")}
          className="mt-4 w-full py-2 text-deep-brown/70 hover:text-deep-brown font-medium"
        >
          ← 메인으로 돌아가기
        </button>
      </div>
    </div>
  );
}
