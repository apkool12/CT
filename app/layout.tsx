import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { CommonLayout } from "@/components/layout/CommonLayout";

export const metadata: Metadata = {
  title: "Algo | 코딩테스트 플랫폼",
  description: "백준 기반 실시간 코딩테스트 및 채팅 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <CommonLayout>{children}</CommonLayout>
        </Providers>
      </body>
    </html>
  );
}
