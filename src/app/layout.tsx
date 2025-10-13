import type { Metadata } from "next";
import "./globals.css";

export const metadata:Metadata = {
  title: "Nguyễn Xuân Thành | Frontend Developer & Creative Coder",
  description:
    "Portfolio cá nhân của Nguyễn Xuân Thành – Frontend Developer sáng tạo với kinh nghiệm xây dựng ứng dụng web hiện đại bằng Next.js, React và TypeScript.",
  openGraph: {
    title: "Nguyễn Xuân Thành | Frontend Developer & Creative Coder",
    description:
      "Khám phá portfolio của Nguyễn Xuân Thành – lập trình viên giao diện sáng tạo, đam mê trải nghiệm người dùng và công nghệ web hiện đại.",
    url: "https://my-protfolio-nine-mu.vercel.app/",
    siteName: "Portfolio | Nguyễn Xuân Thành",
    images: [
      {
        url: "https://my-protfolio-nine-mu.vercel.app/og-image.jpg",
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
      "Xem portfolio của Nguyễn Xuân Thành – Frontend Developer và Creative Coder.",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
