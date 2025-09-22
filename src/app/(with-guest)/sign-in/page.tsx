"use client";

import React, { useState } from "react";
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
import InputField from "@/app/components/InputField";
import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
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
          <h2 className="text-2xl font-bold text-deep-brown mb-2">로그인</h2>
          <p className="text-deep-brown/70">다시 만나서 반가워요!</p>
        </div>

        <div className="space-y-6">
          <div>
            <div className="relative">
              <InputField
                label="이메일"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="이메일을 입력하세요"
                icon={<Mail className="w-5 h-5 text-rose-gold" />}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <InputField
                label="비밀번호"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="비밀번호를 입력하세요"
                icon={<Lock className="w-5 h-5 text-rose-gold" />}
                showPasswordToggle
                showPassword={showPassword}
                onShowPasswordToggle={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-rose-gold bg-cream-white border-nude-beige rounded focus:ring-rose-gold"
              />
              <span className="ml-2 text-sm text-deep-brown/70">
                로그인 상태 유지
              </span>
            </label>
            <button
              type="button"
              className="text-sm text-rose-gold hover:text-deep-brown"
            >
              비밀번호 찾기
            </button>
          </div>

          <button
            type="button"
            onClick={() => router.push("/sign-in")}
            className="w-full py-3 bg-rose-gold text-black-500 rounded-xl hover:bg-deep-brown font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            로그인
          </button>
        </div>

        <div className="mt-6 text-center">
          <span className="text-deep-brown/70">아직 회원이 아니신가요? </span>
          <button
            onClick={() => router.push("/sign-up")}
            className="text-rose-gold hover:text-deep-brown font-semibold"
          >
            회원가입
          </button>
        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-4 w-full py-2 text-deep-brown/70 hover:text-deep-brown font-medium"
        >
          ← 메인으로 돌아가기
        </button>
      </div>
    </div>
  );
}
