// app/page.tsx (Next.js 13 이상 App Router 기준)
import Image from "next/image";
import OutlineButton from "../components/common/OutlineButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-pink-100 to-white">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          네일 아트를 사랑하는 모두의 커뮤니티
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          취미로 즐기는 사람부터 전문가까지, 함께 공유하고 배우는 공간
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition">
            커뮤니티 둘러보기
          </button>
          <OutlineButton />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          인기 네일 디자인
        </h2>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow hover:scale-105 transition"
            >
              {/* <Image
                src={`https://source.unsplash.com/400x500/?nails,art&sig=${i}`}
                alt="nail art"
                width={400}
                height={500}
                className="w-full object-cover"
              /> */}
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          {/* <Image
            src="https://source.unsplash.com/500x500/?nail,salon"
            alt="community"
            width={500}
            height={500}
            className="rounded-2xl shadow"
          /> */}
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">왜 이 커뮤니티인가?</h3>
          <ul className="space-y-4 text-gray-700">
            <li>✨ 자유롭게 소통할 수 있는 공간</li>
            <li>🎨 작품을 공유하고 영감을 얻기</li>
            <li>💅 전문가와 피드백 교환</li>
            <li>🌸 최신 네일 트렌드 탐색</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-50 text-gray-500">
        <p>© 2025 Nail Community. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">
            홈
          </a>
          <a href="#" className="hover:underline">
            커뮤니티
          </a>
          <a href="#" className="hover:underline">
            문의
          </a>
        </div>
      </footer>
    </main>
  );
}
