import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://thanh-nguyen-dev.vercel.app"),
  title: "Nguyễn Xuân Thành | Frontend Developer (ReactJS / TypeScript / Next.js)",
  description:
    "Portfolio cá nhân của Nguyễn Xuân Thành – Frontend Developer với hơn 1 năm kinh nghiệm phát triển dashboard POS, CRM, E-commerce bằng ReactJS, Next.js, TanStack Query, Zustand và TypeScript.",
  openGraph: {
    title: "Nguyễn Xuân Thành | Frontend Developer",
    description:
      "Khám phá portfolio và các dự án thực chiến của Nguyễn Xuân Thành – Frontend Developer chuyên sâu về ReactJS, Next.js và kiến trúc State Management.",
    url: "https://thanh-nguyen-dev.vercel.app/",
    siteName: "Nguyễn Xuân Thành Portfolio",
    images: [
      {
        url: "/images/protfolio.png",
        width: 1200,
        height: 630,
        alt: "Nguyễn Xuân Thành - Frontend Developer Portfolio",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Xuân Thành | Frontend Developer",
    description:
      "Portfolio và các dự án Web Frontend của Nguyễn Xuân Thành (ReactJS / TypeScript / Next.js).",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="antialiased bg-gray-50 text-gray-800">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
