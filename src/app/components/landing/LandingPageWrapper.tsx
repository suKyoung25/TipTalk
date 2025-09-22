"use client";

import Navigation from "@/app/components/landing/Navigation";
import LandingHero from "@/app/components/landing/LandingHero";
import LandingFeature from "@/app/components/landing/LandingFeature";
import LandingNailColor from "./LandingNailColor";
import LandingFooter from "./LandingFooter";

export default function LandingPageWrapper() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      {/* 네비게이션 바 */}
      <Navigation />

      {/* 메인 페이지 */}
      <LandingHero />

      {/* 주요 기능 */}
      <LandingFeature />

      {/* 추천 컬러  TODO: AI로 자동 추천 되는 로직 해보고싶다 */}
      <LandingNailColor />

      {/* TODO: 푸터 만들기 */}
      <LandingFooter />
    </main>
  );
}
