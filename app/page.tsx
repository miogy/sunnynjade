// app/page.tsx
import Image from "next/image";
import { Homemade_Apple } from "next/font/google";

// 중앙 손글씨 Sunny / & Jade 용 폰트
const script = Homemade_Apple({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f2ee] text-zinc-900 flex justify-center px-4 py-10 md:py-16">
      <div className="w-full max-w-5xl mx-auto">
        {/* 상단 정보 라인 */}
        <header className="flex justify-between text-[14px] md:text-xs tracking-[0.22em] uppercase mb-16 md:mb-20">
          <div className="space-y-1">
            <p>Sunny &amp; Jade</p>
            <p className="text-[10px] md:text-[11px] tracking-[0.2em]">
              Modern Romantic Lifestyle
            </p>
          </div>
          <div className="text-right space-y-1">
            <p>Seoul · Studio</p>
            <p className="text-[10px] md:text-[11px] tracking-[0.2em]">
              Established 2025
            </p>
          </div>
        </header>

        {/* 중앙 Welcome + 이미지 + 손글씨 */}
        <section className="mb-16 md:mb-20">
          {/* WELCOME 텍스트 */}
          <p className="text-[11px] md:text-xs tracking-[0.28em] text-center uppercase text-zinc-700 mb-6 md:mb-8">
            Welcome
          </p>

          {/* 모바일 레이아웃 (Welcome 아래 → 이미지 위로 겹치는 구조) */}
          <div className="md:hidden flex justify-center">
            <div className="relative w-[92%]">
              {/* 이미지 */}
              <Image
                src="/images/soon_bg.png" // 실제 이미지 경로
                alt="Sunny & Jade mood"
                width={1200}
                height={800}
                className="w-full h-auto object-cover border border-zinc-200"
                priority
              />

              {/* Sunny & Jade 오버레이: 이미지 상단에 글자가 내려오게 */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[90%] flex flex-col items-center">
                {/* Sunny (15도 기울기) */}
                <span
                  className={`${script.className} inline-block text-[60px] leading-none tracking-[0.06em] text-[#C63324]`}
                  style={{ transform: "rotate(-15deg)" }}
                >
                  Sunny
                </span>
                {/* & Jade – Sunny보다 아래, Jade의 약 60%가 이미지 안으로 들어가도록 살짝 겹침 */}
                <span
                  className={`${script.className} inline-block mt-9 text-[60px] leading-none tracking-[0.06em] text-[#C63324]`}
                >
                  &amp; Jade
                </span>
              </div>
            </div>
          </div>

          {/* 데스크탑 레이아웃 (이미지 안 오른쪽 상단에 80% 폭으로 오버레이) */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-[60%]">
              {/* 베이스 이미지 */}
              <Image
                src="/images/soon_bg.png"
                alt="Sunny & Jade mood"
                width={1200}
                height={800}
                className="w-full h-auto object-cover border border-zinc-200"
                priority
              />

              {/* 손글씨 Sunny / & Jade 오버레이 (이미지 안, 오른쪽 상단, 가로폭 80%) */}
              <div className="absolute top-[-80] right-[-60] w-[80%] flex flex-col items-end">
                <span
                  className={`${script.className} inline-block text-[100px] leading-none tracking-[0.08em] text-[#C63324]`}
                  style={{ transform: "rotate(-15deg)" }}
                >
                  Sunny
                </span>
                <span
                  className={`${script.className} inline-block mt-20 text-[100px] leading-none tracking-[0.05em] text-[#C63324]`}
                >
                  &amp; Jade
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ROOM 텍스트 */}
        <section className="mb-10 md:mb-12 text-center">
          <p className="text-[14px] md:text-m tracking-[0.28em] uppercase mb-2">
            Coming Soon
          </p>
          <p className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-zinc-500">
            fashion.life style
          </p>
        </section>

        {/* 하단 설명 텍스트 – 이미지 폭을 기준으로 그 중 80%만 사용 */}
        <section className="mt-8 md:mt-10 flex justify-center">
  {/* Set the width of this div to be the same as the image: 92% mobile, 60% desktop */}
  <div className="w-[92%] md:w-[60%]">
    {/* Inside this, only 80% is used as text area */}
    <div className="mx-auto w-[80%] text-[13px] leading-relaxed text-center space-y-3 text-[#555555]">
      {/* title line – a bit larger */}
      <p className="text-[14px] leading-relaxed text-[#555555]">“나는 무엇을 좋아할까?”</p>
      <p>
        요즘 우리는 이런 질문을 자주 던지게 됩니다.
      </p>
      <p>지금 보고 계신 이 페이지는 새롭게 준비 중인 Sunny
        &amp; Jade 온라인 공간의 프롤로그이자, 곧 선보일 첫 번째 컬렉션과
        이야기를 담기 위한 공간입니다.</p>
      {/* <p></p> */}
      <p>
        우리의 취향을, 너무 서두르지 않고, 하지만 분명하게 함께 채워 나가요.
      </p>
    </div>
  </div>
</section>


      </div>
    </main>
  );
}
