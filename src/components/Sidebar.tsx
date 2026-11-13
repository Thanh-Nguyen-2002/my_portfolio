"use client";
import { useState } from "react";
import {
    Menu,
    X,
    Mail,
    User,
    Code2,
    Rocket,
    Briefcase,
    Github,
    Linkedin,
    FileText,
    MapPin,
    GraduationCap,
    Phone,
    ChevronRight,
    Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [avatarSrc, setAvatarSrc] = useState("/images/avatar.svg");

    const menu = [
        { name: "Giới thiệu", href: "#about", icon: User },
        { name: "Kinh nghiệm", href: "#experience", icon: Briefcase },
        { name: "Kỹ năng", href: "#skills", icon: Code2 },
        { name: "Dự án", href: "#projects", icon: Rocket },
        { name: "Liên hệ", href: "#contact", icon: Mail },
    ];

    const quickSpecs = [
        { icon: MapPin, label: "Khu vực", val: "Hà Nội, Việt Nam" },
        { icon: Briefcase, label: "Kinh nghiệm", val: "~1 Năm (Junior FE)" },
        { icon: GraduationCap, label: "Học vấn", val: "Đại học FPT (SE)" },
    ];

    const coreStack = [
        "ReactJS",
        "Next.js 15",
        "TypeScript",
        "TanStack Query",
        "Tailwind CSS",
        "Zustand",
    ];

    return (
        <>
            {/* Mobile Top Navbar */}
            <div className="md:hidden fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-xs z-50 flex justify-between items-center px-5 py-3.5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
                    <h1 className="font-bold text-base text-gray-900 tracking-tight">
                        Thành <span className="text-orange-500">.dev</span>
                    </h1>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    className="text-gray-700 p-2 rounded-sm hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Backdrop */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="md:hidden fixed inset-0 bg-black/40 z-30 backdrop-blur-xs transition-opacity"
                />
            )}

            {/* Sidebar Desktop & Mobile Drawer */}
            <aside
                className={`fixed md:left-0 top-0 h-full w-80 bg-white shadow-xl md:shadow-xs p-6 flex flex-col justify-between z-40 transform border-r border-gray-100 overflow-y-auto md:translate-x-0 transition-transform duration-300 ease-in-out ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="space-y-6">
                    {/* Profile Header */}
                    <div className="text-center pt-12 md:pt-2">
                        {/* Avatar */}
                        <div className="relative w-24 h-24 mx-auto mb-3.5">
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-orange-200/80 shadow-md ring-4 ring-orange-500/10 bg-slate-900">
                                <Image
                                    src={avatarSrc}
                                    alt="Nguyễn Xuân Thành"
                                    fill
                                    priority
                                    unoptimized
                                    className="object-cover"
                                    onError={() => setAvatarSrc("/images/avatar.svg")}
                                />
                            </div>

                            {/* Live status dot */}
                            <span
                                className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-xs flex items-center justify-center"
                                title="Sẵn sàng nhận việc"
                            >
                                <span className="w-2 h-2 rounded-full bg-white opacity-80 animate-ping" />
                            </span>
                        </div>

                        <h2 className="text-lg font-black text-gray-900 tracking-tight">
                            Nguyễn Xuân Thành
                        </h2>
                        <p className="text-orange-600 font-semibold text-xs tracking-wide uppercase mt-0.5 flex items-center justify-center gap-1">
                            <Sparkles size={12} className="text-orange-500" />
                            Frontend Developer
                        </p>

                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-sm text-[11px] font-medium mt-2.5 border border-emerald-200/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Sẵn sàng nhận việc mới
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">
                            Điều hướng
                        </p>
                        <nav className="space-y-1">
                            {menu.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center justify-between py-2 px-3 rounded-sm transition-all duration-150 group text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium text-xs sm:text-sm border-l-2 border-transparent hover:border-orange-500"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <IconComponent
                                                size={16}
                                                className="text-gray-400 group-hover:text-orange-500 transition-colors"
                                            />
                                            <span>{item.name}</span>
                                        </div>
                                        <ChevronRight
                                            size={13}
                                            className="text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                                        />
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Core Tech Stack Highlights */}
                    <div>
                        <div className="flex items-center justify-between px-3 mb-2">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                Core Stack
                            </p>
                            <span className="text-[9px] font-mono text-gray-400">2026</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 px-1">
                            {coreStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-[11px] font-medium px-2 py-0.5 bg-gray-50 text-gray-700 border border-gray-200/70 rounded-sm hover:border-orange-300 hover:text-orange-600 hover:bg-white transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Specs / Background */}
                    <div className="bg-gray-50/70 rounded-sm p-3 border border-gray-100 space-y-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                            Thông tin nhanh
                        </p>
                        {quickSpecs.map((spec, i) => {
                            const IconComponent = spec.icon;
                            return (
                                <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                                    <IconComponent size={13} className="text-orange-500 shrink-0" />
                                    <span className="truncate">{spec.val}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer / Social links & Actions */}
                <div className="pt-4 border-t border-gray-100 space-y-3 mt-6">
                    <a
                        href="/CV_Frontend_NguyenXuanThanh.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-sm text-xs font-semibold hover:from-orange-600 hover:to-amber-600 shadow-xs hover:shadow-orange-500/20 transition-all"
                    >
                        <FileText size={15} />
                        Tải CV (PDF)
                    </a>

                    <div className="flex items-center justify-center gap-2 pt-0.5">
                        <a
                            href="https://github.com/Thanh-Nguyen-2002"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            title="GitHub Profile"
                            className="p-2 text-gray-600 hover:text-gray-950 hover:bg-gray-100 rounded-sm transition-colors border border-gray-100"
                        >
                            <Github size={17} />
                        </a>
                        <a
                            href="mailto:nxthanh.nb2002@gmail.com"
                            aria-label="Email"
                            title="Gửi Email"
                            className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-sm transition-colors border border-gray-100"
                        >
                            <Mail size={17} />
                        </a>
                        <a
                            href="tel:+84377648322"
                            aria-label="Phone"
                            title="Số điện thoại"
                            className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-sm transition-colors border border-gray-100"
                        >
                            <Phone size={17} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn Profile"
                            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-sm transition-colors border border-gray-100"
                        >
                            <Linkedin size={17} />
                        </a>
                    </div>
                    <p className="text-center text-[10px] text-gray-400">
                        © 2026 Nguyễn Xuân Thành
                    </p>
                </div>
            </aside>
        </>
    );
}
