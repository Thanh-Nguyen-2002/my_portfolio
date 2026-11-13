import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            name: "Travel Booking Platform",
            tag: "Flagship Full-Stack",
            featured: true,
            desc: "Nền tảng đặt tour & khách sạn toàn diện gồm: giao diện đặt phòng người dùng, trang quản trị CMS và cổng thanh toán bảo mật VNPay.",
            highlights: [
                "Tích hợp cổng thanh toán VNPay với cơ chế xác thực IPN và chống đặt trùng phòng (race condition).",
                "Tối ưu dữ liệu bảng quản lý bằng Ant Design và TanStack Query tự động invalidation cache.",
            ],
            tech: ["ReactJS", "Ant Design", "TanStack Query", "Spring Boot", "PostgreSQL", "VNPay"],
            image: "/images/banner.jpeg",
            slug: "travel_booking",
            github: "https://github.com/Thanh-Nguyen-2002/travel-booking-cms",
            github2: "https://github.com/Thanh-Nguyen-2002/travel-booking-landingpage",
        },
        {
            name: "Centralized E-commerce Platform",
            tag: "POS & CRM E-commerce",
            featured: false,
            desc: "Nền tảng thương mại điện tử quản lý tồn kho và đơn hàng tập trung cho chuỗi 5+ chi nhánh cửa hàng song song.",
            highlights: [
                "Tối ưu form tạo sản phẩm 4 bước bằng React Hook Form, giảm 50% số lần re-render.",
                "Kiểm soát dữ liệu đầu vào với Zod validation trước khi gửi payload lên API.",
            ],
            tech: ["ReactJS", "Tailwind CSS", "TypeScript", "Zustand", "TanStack Query", "Zod"],
            image: "/images/ecommerce.png",
            slug: "e-commerce_platform",
        },
        {
            name: "Personal Portfolio & Tech Blog",
            tag: "Next.js App Router",
            featured: false,
            desc: "Website giới thiệu cá nhân và blog kỹ thuật tối ưu hóa hiệu năng di động và SEO với Next.js 15 và Tailwind CSS.",
            highlights: [
                "Điểm Mobile Lighthouse 95+ nhờ Server-Side Rendering (SSR) và Next/Image optimization.",
                "Cấu trúc thư mục sạch với TypeScript strict typing.",
            ],
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            image: "/images/protfolio.png",
            linkWebSite: "https://thanh-nguyen-dev.vercel.app/",
            github: "https://github.com/Thanh-Nguyen-2002/my_portfolio",
            slug: "portfolio",
        },
        {
            name: "Review Food Blog",
            tag: "Content Platform",
            featured: false,
            desc: "Nền tảng chia sẻ và khám phá ẩm thực Việt Nam với các bài viết đánh giá và bản đồ món ngon ba miền.",
            highlights: [
                "Định tuyến động (Dynamic Routing) cho danh mục món ăn và bài viết.",
                "Giao diện responsive thân thiện cho cả thiết bị di động và máy tính.",
            ],
            tech: ["Next.js", "Tailwind CSS", "TypeScript"],
            image: "/images/review_food.png",
            linkWebSite: "https://review-food.vercel.app/",
            slug: "review_food",
        },
    ];

    return (
        <section id="projects" className="bg-white shadow-sm rounded-sm p-6 md:p-10 border border-gray-100">
            <SectionTitle title="Dự án tiêu biểu" />
            <p className="text-gray-500 text-xs sm:text-sm mt-1 mb-6">
                Các sản phẩm thực chiến tôi đã trực tiếp tham gia phát triển frontend, quản lý state và tích hợp hệ thống
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((proj, i) => (
                    <div
                        key={i}
                        className={`rounded-sm overflow-hidden border transition-all duration-300 flex flex-col justify-between ${proj.featured
                                ? "border-orange-300 shadow-sm ring-1 ring-orange-400/20 bg-gradient-to-b from-orange-50/20 via-white to-white"
                                : "border-gray-200 hover:border-gray-300 shadow-xs hover:shadow-sm bg-white"
                            }`}
                    >
                        <div>
                            {/* Image Header with Badge */}
                            <div className="h-48 sm:h-56 w-full relative overflow-hidden bg-gray-100">
                                <Image
                                    src={proj.image}
                                    alt={proj.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <span className="px-3 py-1 rounded-sm text-xs font-bold bg-white/90 text-gray-900 backdrop-blur-md shadow-xs border border-gray-200">
                                        {proj.tag}
                                    </span>
                                    {proj.featured && (
                                        <span className="px-3 py-1 rounded-sm text-xs font-bold bg-orange-500 text-white flex items-center gap-1 shadow-xs">
                                            <Sparkles size={12} /> Nổi bật
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5 sm:p-6">
                                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">
                                    {proj.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mb-3.5 leading-relaxed">
                                    {proj.desc}
                                </p>

                                {/* Key Highlights */}
                                {proj.highlights && (
                                    <ul className="space-y-1 mb-4 text-xs text-gray-600">
                                        {proj.highlights.map((h, hIdx) => (
                                            <li key={hIdx} className="flex items-start gap-1.5">
                                                <span className="text-orange-500 font-bold shrink-0">•</span>
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {proj.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[11px] px-2.5 py-1 bg-gray-100 text-gray-700 font-medium rounded-sm"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card Actions */}
                        <div className="p-5 sm:p-6 pt-0 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 mt-auto">
                            <div className="flex items-center gap-2">
                                {proj.linkWebSite && (
                                    <a
                                        href={proj.linkWebSite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-orange-500 text-white rounded-sm hover:bg-orange-600 transition"
                                    >
                                        <ExternalLink size={14} /> Live Demo
                                    </a>
                                )}
                                {proj.github && (
                                    <a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition"
                                    >
                                        <Github size={14} /> GitHub
                                    </a>
                                )}
                                {proj.github2 && (
                                    <a
                                        href={proj.github2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-gray-100 text-gray-700 rounded-sm hover:bg-gray-200 transition"
                                    >
                                        <Github size={14} /> Landing Repo
                                    </a>
                                )}
                            </div>

                            <Link
                                href={`/project/${proj.slug}`}
                                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 hover:underline"
                            >
                                Chi tiết kỹ thuật <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
