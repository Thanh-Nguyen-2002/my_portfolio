import React from "react";
import Image from "next/image";
import { data_project_detail } from "@/data/project_detail";
import Link from "next/link";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Code2,
    CheckCircle2,
    Layers,
    Cpu,
    Lightbulb,
    Clock,
    Users,
    Briefcase,
    ChevronRight,
    ArrowUpRight,
    AlertCircle,
    TrendingUp,
} from "lucide-react";
import NotFoundProject from "@/components/NotFoundProject";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectDetail({ params }: Props) {
    const { slug } = await params;
    const project = data_project_detail.find((i) => i.slug === slug);

    if (!project) {
        return <NotFoundProject />;
    }

    const otherProjects = data_project_detail.filter((p) => p.slug !== slug);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-orange-600 px-3 py-1.5 rounded-sm hover:bg-orange-50 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Trang chủ Portfolio</span>
                    </Link>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>Dự án</span>
                        <ChevronRight size={13} className="text-gray-400" />
                        <span className="font-semibold text-gray-900 truncate max-w-[180px] sm:max-w-xs">
                            {project.name}
                        </span>
                    </div>
                </div>
            </header>

            <main className="p-4 sm:p-6 md:p-10 max-w-6xl mx-auto space-y-8 md:space-y-10">
                {/* Hero Section */}
                <section className="bg-white rounded-sm p-6 md:p-10 border border-gray-200/80 shadow-xs">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-sm text-xs font-bold border border-orange-200/60">
                                <span>{project.tag}</span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight leading-tight">
                                {project.name}
                            </h1>

                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {project.desc}
                            </p>

                            {/* Quick Specs Bar */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                                <div className="p-3 bg-gray-50/80 rounded-sm border border-gray-100">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-1">
                                        <Briefcase size={14} className="text-orange-500 shrink-0" />
                                        <span>Vai trò</span>
                                    </div>
                                    <p className="text-xs font-bold text-gray-900 leading-snug">
                                        {project.role}
                                    </p>
                                </div>

                                <div className="p-3 bg-gray-50/80 rounded-sm border border-gray-100">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-1">
                                        <Clock size={14} className="text-orange-500 shrink-0" />
                                        <span>Thời gian</span>
                                    </div>
                                    <p className="text-xs font-bold text-gray-900 leading-snug">
                                        {project.timeline}
                                    </p>
                                </div>

                                <div className="p-3 bg-gray-50/80 rounded-sm border border-gray-100">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-1">
                                        <Users size={14} className="text-orange-500 shrink-0" />
                                        <span>Quy mô</span>
                                    </div>
                                    <p className="text-xs font-bold text-gray-900 leading-snug">
                                        {project.teamSize}
                                    </p>
                                </div>
                            </div>

                            {/* Action Links */}
                            <div className="flex flex-wrap gap-2.5 pt-2">
                                {project.linkWebSite && (
                                    <a
                                        href={project.linkWebSite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-sm font-semibold text-xs sm:text-sm hover:from-orange-600 hover:to-amber-600 shadow-xs hover:shadow-orange-500/20 transition-all"
                                    >
                                        <ExternalLink size={15} />
                                        Xem Live Website
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-sm font-semibold text-xs sm:text-sm hover:bg-gray-800 transition-colors shadow-xs"
                                    >
                                        <Github size={15} />
                                        Mã nguồn GitHub
                                    </a>
                                )}

                                {project.github2 && (
                                    <a
                                        href={project.github2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2.5 rounded-sm font-semibold text-xs sm:text-sm hover:bg-gray-200 border border-gray-200 transition-colors"
                                    >
                                        <Github size={15} />
                                        Landing Page Repo
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="lg:col-span-5">
                            <div className="relative w-full h-64 sm:h-80 rounded-sm overflow-hidden shadow-sm border border-gray-200 bg-gray-100 group">
                                <Image
                                    src={project.image || "/images/default.png"}
                                    alt={project.name}
                                    fill
                                    priority
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 1: My Responsibilities & What I Built */}
                <section className="bg-white rounded-sm p-6 md:p-8 border border-gray-200/80 shadow-xs space-y-4">
                    <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                        <div className="w-8 h-8 rounded-sm bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                            <CheckCircle2 size={18} />
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                Tôi đã làm những gì trong dự án?
                            </h2>
                            <p className="text-xs text-gray-500">
                                Các phân hệ chức năng, giao diện và logic cốt lõi đã trực tiếp lập trình
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                        {project.responsibilities.map((resp, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 p-3.5 bg-gray-50/60 rounded-sm border border-gray-100 hover:border-orange-200 transition-colors"
                            >
                                <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {idx + 1}
                                </span>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                    {resp}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Technical Challenges & Deep Dive (The core value!) */}
                <section className="bg-white rounded-sm p-6 md:p-8 border border-gray-200/80 shadow-xs space-y-6">
                    <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                        <div className="w-8 h-8 rounded-sm bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                            <Cpu size={18} />
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                Thử thách kỹ thuật & Giải pháp chuyên sâu
                            </h2>
                            <p className="text-xs text-gray-500">
                                Các bài toán hóc búa, kỹ thuật áp dụng và kết quả đo lường thực tế
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {project.deepDives.map((dive, idx) => (
                            <div
                                key={idx}
                                className="p-5 sm:p-6 bg-white rounded-sm border border-gray-200/80 shadow-xs hover:border-orange-300 transition-colors space-y-4"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-950 flex items-center gap-2">
                                        <span className="text-orange-500 font-mono text-sm">#{idx + 1}</span>
                                        <span>{dive.title}</span>
                                    </h3>

                                    {dive.tags && (
                                        <div className="flex flex-wrap gap-1.5">
                                            {dive.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2 py-0.5 bg-orange-50 text-orange-700 text-[10px] font-semibold rounded-sm border border-orange-200/60"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-3 gap-3.5 pt-1 text-xs sm:text-sm">
                                    {/* Problem */}
                                    <div className="p-3.5 bg-rose-50/50 rounded-sm border border-rose-100 space-y-1.5">
                                        <div className="flex items-center gap-1.5 text-rose-700 font-bold text-xs uppercase tracking-wider">
                                            <AlertCircle size={14} />
                                            <span>Thử thách / Vấn đề</span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-xs">
                                            {dive.problem}
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div className="p-3.5 bg-amber-50/50 rounded-sm border border-amber-100 space-y-1.5">
                                        <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs uppercase tracking-wider">
                                            <Code2 size={14} />
                                            <span>Giải pháp kỹ thuật</span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-xs">
                                            {dive.solution}
                                        </p>
                                    </div>

                                    {/* Result */}
                                    <div className="p-3.5 bg-emerald-50/50 rounded-sm border border-emerald-100 space-y-1.5">
                                        <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                                            <TrendingUp size={14} />
                                            <span>Kết quả đạt được</span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-xs">
                                            {dive.result}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3: Architecture & System Flow */}
                {project.architecture && (
                    <section className="bg-white rounded-sm p-6 md:p-8 border border-gray-200/80 shadow-xs space-y-4">
                        <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                            <div className="w-8 h-8 rounded-sm bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                <Layers size={18} />
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                    Kiến trúc hệ thống & Luồng dữ liệu
                                </h2>
                                <p className="text-xs text-gray-500">
                                    Mô hình phân tầng và cách dữ liệu luân chuyển giữa các tầng
                                </p>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {project.architecture.summary}
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                            {project.architecture.layers.map((layer, idx) => (
                                <div
                                    key={idx}
                                    className="p-3.5 bg-gray-50/70 rounded-sm border border-gray-100 space-y-1.5"
                                >
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-4 h-4 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                                            {idx + 1}
                                        </span>
                                        <h4 className="text-xs font-bold text-gray-900 truncate">
                                            {layer.title}
                                        </h4>
                                    </div>
                                    <p className="text-[11px] text-gray-600 leading-relaxed">
                                        {layer.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Section 4: Tech Stack Groups */}
                <section className="bg-white rounded-sm p-6 md:p-8 border border-gray-200/80 shadow-xs space-y-4">
                    <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                        <div className="w-8 h-8 rounded-sm bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                            <Code2 size={18} />
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                Phân tầng công nghệ sử dụng
                            </h2>
                            <p className="text-xs text-gray-500">
                                Các công cụ, thư viện và framework cấu thành dự án
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                        {project.techStackGroups.map((group, idx) => (
                            <div
                                key={idx}
                                className="p-4 bg-gray-50/60 rounded-sm border border-gray-100 space-y-2.5"
                            >
                                <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider pb-1.5 border-b border-gray-200/60">
                                    {group.category}
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-2 py-0.5 bg-white text-gray-700 text-[11px] font-medium rounded-sm border border-gray-200 shadow-2xs"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 5: Key Learnings */}
                {project.learnings && project.learnings.length > 0 && (
                    <section className="bg-white rounded-sm p-6 md:p-8 border border-gray-200/80 shadow-xs space-y-4">
                        <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                            <div className="w-8 h-8 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                                <Lightbulb size={18} />
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                    Bài học & Kinh nghiệm đúc kết
                                </h2>
                                <p className="text-xs text-gray-500">
                                    Kỹ năng kỹ thuật và tư duy phát triển phần mềm rút ra sau dự án
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2.5 pt-1">
                            {project.learnings.map((learn, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                    <p className="leading-relaxed">{learn}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Other Projects Navigation */}
                <section className="pt-6 border-t border-gray-200 space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                        Khám phá các dự án khác
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-3">
                        {otherProjects.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/project/${p.slug}`}
                                className="p-4 bg-white rounded-sm border border-gray-200/80 hover:border-orange-400 hover:shadow-xs transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-[10px] font-semibold text-orange-600 uppercase">
                                        {p.tag}
                                    </span>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors mt-0.5 line-clamp-1">
                                        {p.name}
                                    </h4>
                                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                                        {p.desc}
                                    </p>
                                </div>
                                <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-orange-600">
                                    <span>Xem chi tiết</span>
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
