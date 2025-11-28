import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";


// 고급스러운 세리프 폰트 (본문용)
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sunny & Jade | Modern Romantic Tableware & Lifestyle",
  description:
    "Sunny & Jade는 모던하고 로맨틱한 취향을 담은 테이블웨어와 라이프스타일 소품을 선보이는 브랜드입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* body 전체에 세리프 폰트 적용 */}
      <body className={serif.className}>{children}</body>
    </html>
  );
}
