import { LayoutGrid, Download } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="relative shadow-md rounded-2xl overflow-hidden border border-gray-100 animate-fade-in
            flex flex-col justify-end p-6 mb-12 min-h-[calc(100vh-70px)]"
        >

            <div className="absolute inset-0">
                <Image
                    src="/images/banner.jpeg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover scale-110 blur-[2px] brightness-[0.6] animate-[floatBg_20s_ease-in-out_infinite]"
                />
            </div>

            <div className="absolute inset-0 
                bg-[radial-gradient(circle_at_40%_50%,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.1)_40%,rgba(0,0,0,0.35)_100%)] 
                mix-blend-overlay opacity-70" 
            />

            <div className="relative z-10 text-white drop-shadow-md">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    Tôi là <span className="text-orange-400">Nguyễn Xuân Thành</span> <br className="hidden sm:block" />
                    Frontend Developer và Creative Coder.
                </h1>

                <p className="mb-10 text-lg md:text-xl leading-relaxed max-w-2xl text-gray-100">
                    Tôi là một lập trình viên giao diện web, yêu thích sáng tạo và xây dựng những 
                    sản phẩm mang lại trải nghiệm tốt cho người dùng.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <a
                        href="#projects"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-600 
                        text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 
                        transition-all duration-300 ease-in-out group"
                    >
                        <LayoutGrid size={20} className="mr-3 group-hover:animate-spin-slow" />
                        My Works
                    </a>

                    <a
                        href="/CV_Frontend_NguyenXuanThanh.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-4 text-white font-semibold 
                                    rounded-full border-2 border-white/60 hover:bg-white/10 hover:border-white 
                                    transition-colors duration-300 ease-in-out"
                    >
                        Download CV
                        <Download size={20} className="ml-3" />
                    </a>

                </div>
            </div>
        </section>
    );
}
