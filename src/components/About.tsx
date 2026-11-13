import { LayoutGrid, Download, Sparkles, Code2, Layers, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function About() {
    const highlights = [
        {
            icon: Code2,
            title: "Frontend Core",
            label: "ReactJS, Next.js, TypeScript",
            sub: "Giao diện tối ưu & chuẩn Responsive",
        },
        {
            icon: Layers,
            title: "State & Data Sync",
            label: "TanStack Query & Zustand",
            sub: "Quản lý cache & đồng bộ dữ liệu",
        },
        {
            icon: GraduationCap,
            title: "Đại học FPT",
            label: "Kỹ sư Kỹ thuật Phần mềm",
            sub: "Khóa 09/2020 - 12/2024",
        },
    ];

    return (
        <section
            id="about"
            className="relative shadow-sm rounded-sm overflow-hidden border border-gray-100 bg-white"
        >
            {/* Hero Banner Background */}
            <div className="relative min-h-[440px] md:min-h-[480px] flex flex-col justify-end p-6 md:p-12 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/banner.jpeg"
                        alt="Workspace banner"
                        fill
                        priority
                        className="object-cover scale-105 brightness-[0.45]"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/40 to-transparent" />

                <div className="relative z-10 text-white max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 backdrop-blur-md border border-orange-400/30 text-orange-300 rounded-sm text-xs font-semibold mb-4">
                        <Sparkles size={14} className="text-orange-400" />
                        Frontend Developer
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
                        Xin chào, tôi là <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200">
                            Nguyễn Xuân Thành
                        </span>
                    </h1>

                    <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 font-normal">
                        Lập trình viên Frontend với kinh nghiệm thực tế phát triển dashboard quản trị cho hệ thống
                        POS, CRM và Thương mại điện tử. Thế mạnh chuyên sâu về <span className="text-orange-300 font-semibold">ReactJS, Next.js, TypeScript</span>,
                        tập trung vào trải nghiệm mượt mà của người dùng và đồng bộ dữ liệu với <span className="text-orange-300 font-semibold">TanStack Query & Zustand</span>.
                    </p>

                    <div className="flex flex-wrap gap-3 items-center">
                        <a
                            href="#projects"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 
                            text-white text-sm font-semibold rounded-sm shadow-md hover:shadow-orange-500/25 hover:scale-[1.02] 
                            transition-all duration-200"
                        >
                            <LayoutGrid size={18} className="mr-2" />
                            Xem các dự án
                        </a>

                        <a
                            href="/CV_Frontend_NguyenXuanThanh.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-3 text-white text-sm font-semibold 
                                        rounded-sm border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-xs
                                        transition-colors duration-200"
                        >
                            <Download size={18} className="mr-2" />
                            Tải CV (PDF)
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center px-5 py-3 text-gray-300 hover:text-white text-sm font-medium transition-colors"
                        >
                            Liên hệ phỏng vấn →
                        </a>
                    </div>
                </div>
            </div>

            {/* Core Pillars Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 bg-white p-4 md:p-6 border-t border-gray-100">
                {highlights.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={index} className="flex items-center gap-4 py-3 sm:py-0 px-4">
                            <div className="w-12 h-12 rounded-sm bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                <IconComponent size={24} />
                            </div>
                            <div>
                                <p className="text-base md:text-lg font-bold text-gray-900 tracking-tight">
                                    {item.title}
                                </p>
                                <p className="text-xs font-semibold text-gray-700">{item.label}</p>
                                <p className="text-[11px] text-gray-400">{item.sub}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
