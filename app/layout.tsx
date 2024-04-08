import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./styles/globals.css";

const noto = Noto_Sans_KR({ preload: false });

export const metadata: Metadata = {
  title: "영어나무",
  description: "영어 학습 홈페이지 - 영어나무",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
