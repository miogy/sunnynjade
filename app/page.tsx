// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-zinc-900 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* 상단 로고 타이포 */}
        <div className="mb-6">
          <span className="tracking-[0.35em] text-xs uppercase text-zinc-600">
            Sunny & Jade
          </span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
          Our new Sunny & Jade{" "}
          <span className="block md:inline">home is in preparation.</span>
        </h1>

        {/* 한글 + 영문 설명 */}
        <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-2">
          그녀들의 취향을 담은 Sunny &amp; Jade의 새로운 사이트를
          준비하고 있어요.
        </p>
        <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-8">
          곧 우리들의 일상을 담은 컬렉션을 만날 수 있습니다. 조금만
          기다려 주세요 ✨
        </p>

        {/* 버튼 영역 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          {/* 카페24 샵으로 가는 버튼 (URL은 나중에 교체) */}
          <Link
            href="https://sunnynjade.com" // 실제 샵 주소로 바꿔줘
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full border border-zinc-900 bg-zinc-900 text-[#f7f3ee] hover:bg-zinc-800 transition-colors"
          >
            Visit Shop
          </Link>

          {/* 인스타그램 등 다른 채널로 연결하는 서브 버튼 */}
          <Link
            href="https://instagram.com" // 실제 인스타 주소로 바꿔줘
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full border border-zinc-400 text-zinc-700 hover:bg-white/60 transition-colors"
          >
            Follow us on Instagram
          </Link>
        </div>

        {/* 작은 카피 */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
          Modern Romantic Tableware &amp; Lifestyle
        </p>
      </div>
    </main>
  );
}
