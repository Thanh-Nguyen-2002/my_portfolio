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
    Bookmark,
    Sparkles,
    Compass,
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
            {/* Top Full-Width Navigation Bar */}
            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-2xs">
                <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-orange-600 px-3 py-1.5 rounded-sm hover:bg-orange-50 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Trang chủ Portfolio</span>
                    </Link>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="hidden sm:inline">Dự án</span>
                        <ChevronRight size={13} className="text-gray-400 hidden sm:inline" />
                        <span className="font-bold text-gray-900 truncate max-w-[200px] sm:max-w-md">
                            {project.name}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        {project.linkWebSite && (
                            <a
                                href={project.linkWebSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 text-white rounded-sm text-xs font-semibold hover:bg-orange-600 transition shadow-2xs"
                            >
                                <ExternalLink size={13} />
                                <span className="hidden sm:inline">Live Demo</span>
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-gray-700 hover:text-gray-950 hover:bg-gray-100 rounded-sm transition-colors border border-gray-200"
                                title="Mã nguồn GitHub"
                            >
                                <Github size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </header>

            {/* Full-Bleed Hero Section (Trải rộng toàn màn hình) */}
            <section className="relative w-full bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white border-b border-gray-800 overflow-hidden">
                {/* Background Glow Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.18),rgba(255,255,255,0))]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

                <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-14">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Hero Text */}
                        <div className="lg:col-span-7 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 backdrop-blur-md border border-orange-400/30 text-orange-300 rounded-sm text-xs font-semibold">
                                <Sparkles size={13} className="text-orange-400" />
                                <span>{project.tag}</span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                                {project.name}
                            </h1>

                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal max-w-2xl">
                                {project.desc}
                            </p>

                            {/* Quick Specs Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                                <div className="p-3 bg-white/5 backdrop-blur-xs rounded-sm border border-white/10">
                                    <div className="flex items-center gap-1.5 text-xs text-orange-400 font-semibold mb-1">
                                        <Briefcase size={14} className="shrink-0" />
                                        <span>Vai trò</span>
                                    </div>
                                    <p className="text-xs font-medium text-gray-200 leading-snug">
                                        {project.role}
                                    </p>
                                </div>

                                <div className="p-3 bg-white/5 backdrop-blur-xs rounded-sm border border-white/10">
                                    <div className="flex items-center gap-1.5 text-orange-400 font-semibold mb-1">
                                        <Clock size={14} className="shrink-0" />
                                        <span>Thời gian</span>
                                    </div>
                                    <p className="text-xs font-medium text-gray-200 leading-snug">
                                        {project.timeline}
                                    </p>
                                </div>

                                <div className="p-3 bg-white/5 backdrop-blur-xs rounded-sm border border-white/10">
                                    <div className="flex items-center gap-1.5 text-orange-400 font-semibold mb-1">
                                        <Users size={14} className="shrink-0" />
                                        <span>Quy mô</span>
                                    </div>
                                    <p className="text-xs font-medium text-gray-200 leading-snug">
                                        {project.teamSize}
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 pt-3">
                                {project.linkWebSite && (
                                    <a
                                        href={project.linkWebSite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-sm font-semibold text-xs sm:text-sm hover:from-orange-600 hover:to-amber-600 shadow-md hover:shadow-orange-500/25 transition-all"
                                    >
                                        <ExternalLink size={15} />
                                        Trải nghiệm Live Demo
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-white/10 text-white hover:bg-white/20 border border-white/20 px-5 py-2.5 rounded-sm font-semibold text-xs sm:text-sm transition-colors"
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
                                        className="inline-flex items-center gap-2 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/15 px-4 py-2.5 rounded-sm font-semibold text-xs sm:text-sm transition-colors"
                                    >
                                        <Github size={15} />
                                        Landing Repo
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Hero Image Mockup (Lớn & Sắc nét) */}
                        <div className="lg:col-span-5">
                            <div className="relative w-full h-72 sm:h-96 rounded-sm overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-900 group">
                                <Image
                                    src={project.image || "/images/default.png"}
                                    alt={project.name}
                                    fill
                                    priority
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Layout (Full Container với 2 cột hiện đại) */}
            <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* Left Sticky Sidebar: Navigation & Project Summary */}
                    <aside className="lg:col-span-4 lg:sticky lg:top-20 space-y-6">
                        {/* Table of Contents Card */}
                        <div className="bg-white rounded-sm p-5 border border-gray-200/80 shadow-xs">
                            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-gray-100">
                                <Bookmark size={16} className="text-orange-500" />
                                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    Mục lục Case Study
                                </h3>
                            </div>
                            <nav className="space-y-1 text-xs">
                                <a
                                    href="#responsibilities"
                                    className="flex items-center justify-between py-2 px-2.5 rounded-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors group"
                                >
                                    <span>1. Tôi đã làm gì trong dự án?</span>
                                    <ChevronRight size={13} className="text-gray-300 group-hover:text-orange-500" />
                                </a>
                                <a
                                    href="#deep-dives"
                                    className="flex items-center justify-between py-2 px-2.5 rounded-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors group font-semibold text-orange-600"
                                >
                                    <span>2. Thử thách kỹ thuật & Giải pháp</span>
                                    <ChevronRight size={13} className="text-orange-500" />
                                </a>
                                {project.architecture && (
                                    <a
                                        href="#architecture"
                                        className="flex items-center justify-between py-2 px-2.5 rounded-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors group"
                                    >
                                        <span>3. Kiến trúc & Luồng dữ liệu</span>
                                        <ChevronRight size={13} className="text-gray-300 group-hover:text-orange-500" />
                                    </a>
                                )}
                                <a
                                    href="#tech-stack"
                                    className="flex items-center justify-between py-2 px-2.5 rounded-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors group"
                                >
                                    <span>4. Phân tầng công nghệ</span>
                                    <ChevronRight size={13} className="text-gray-300 group-hover:text-orange-500" />
                                </a>
                                {project.learnings && project.learnings.length > 0 && (
                                    <a
                                        href="#learnings"
                                        className="flex items-center justify-between py-2 px-2.5 rounded-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors group"
                                    >
                                        <span>5. Bài học kinh nghiệm</span>
                                        <ChevronRight size={13} className="text-gray-300 group-hover:text-orange-500" />
                                    </a>
                                )}
                            </nav>
                        </div>

                        {/* Project Tech Snapshot Card */}
                        <div className="bg-white rounded-sm p-5 border border-gray-200/80 shadow-xs space-y-4">
                            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-2 border-b border-gray-100">
                                Công nghệ trọng tâm
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2.5 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-sm border border-gray-200/60"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Other Projects Quick Nav */}
                        <div className="bg-white rounded-sm p-5 border border-gray-200/80 shadow-xs space-y-3">
                            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                                    Dự án khác
                                </h3>
                                <Compass size={14} className="text-orange-500" />
                            </div>
                            <div className="space-y-2">
                                {otherProjects.map((p) => (
                                    <Link
                                        key={p.slug}
                                        href={`/project/${p.slug}`}
                                        className="block p-2.5 rounded-sm bg-gray-50/70 hover:bg-orange-50/70 border border-gray-100 hover:border-orange-200 transition-all group"
                                    >
                                        <p className="text-[10px] font-bold text-orange-600 uppercase">
                                            {p.tag}
                                        </p>
                                        <p className="text-xs font-bold text-gray-900 group-hover:text-orange-600 transition-colors truncate">
                                            {p.name}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Right Main Content: Rich Technical Case Study */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Section 1: My Responsibilities */}
                        <section
                            id="responsibilities"
                            className="bg-white rounded-sm p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-5"
                        >
                            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                                <div className="w-9 h-9 rounded-sm bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-black text-gray-950">
                                        1. Tôi đã làm những gì trong dự án?
                                    </h2>
                                    <p className="text-xs text-gray-500">
                                        Các phân hệ chức năng, giao diện và logic cốt lõi đã trực tiếp lập trình
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                                {project.responsibilities.map((resp, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 p-4 bg-gray-50/70 rounded-sm border border-gray-100 hover:border-orange-200 hover:bg-white transition-all shadow-2xs"
                                    >
                                        <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                            {idx + 1}
                                        </span>
                                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                            {resp}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 2: Deep Dives (The Core Highlight) */}
                        <section
                            id="deep-dives"
                            className="bg-white rounded-sm p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6"
                        >
                            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                                <div className="w-9 h-9 rounded-sm bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                    <Cpu size={20} />
                                </div>
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-black text-gray-950">
                                        2. Thử thách kỹ thuật & Giải pháp chuyên sâu
                                    </h2>
                                    <p className="text-xs text-gray-500">
                                        Các bài toán hóc búa, kỹ thuật giải quyết và kết quả đo lường thực tế
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {project.deepDives.map((dive, idx) => (
                                    <div
                                        key={idx}
                                        className="p-6 bg-white rounded-sm border border-gray-200/80 shadow-xs hover:border-orange-300 transition-all space-y-4"
                                    >
                                        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-100">
                                            <h3 className="text-base sm:text-lg font-black text-gray-950 flex items-center gap-2">
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
                                            <div className="p-4 bg-rose-50/50 rounded-sm border border-rose-100 space-y-2">
                                                <div className="flex items-center gap-1.5 text-rose-700 font-bold text-xs uppercase tracking-wider">
                                                    <AlertCircle size={14} />
                                                    <span>Thử thách / Vấn đề</span>
                                                </div>
                                                <p className="text-gray-700 leading-relaxed text-xs">
                                                    {dive.problem}
                                                </p>
                                            </div>

                                            {/* Solution */}
                                            <div className="p-4 bg-amber-50/50 rounded-sm border border-amber-100 space-y-2">
                                                <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs uppercase tracking-wider">
                                                    <Code2 size={14} />
                                                    <span>Giải pháp kỹ thuật</span>
                                                </div>
                                                <p className="text-gray-700 leading-relaxed text-xs">
                                                    {dive.solution}
                                                </p>
                                            </div>

                                            {/* Result */}
                                            <div className="p-4 bg-emerald-50/50 rounded-sm border border-emerald-100 space-y-2">
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
                            <section
                                id="architecture"
                                className="bg-white rounded-sm p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-5"
                            >
                                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                                    <div className="w-9 h-9 rounded-sm bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                        <Layers size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-black text-gray-950">
                                            3. Kiến trúc hệ thống & Luồng dữ liệu
                                        </h2>
                                        <p className="text-xs text-gray-500">
                                            Mô hình phân tầng và cách dữ liệu luân chuyển giữa các tầng
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    {project.architecture.summary}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                                    {project.architecture.layers.map((layer, idx) => (
                                        <div
                                            key={idx}
                                            className="p-4 bg-gray-50/70 rounded-sm border border-gray-100 space-y-2 hover:bg-white hover:border-orange-200 transition-all shadow-2xs"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                                                    {idx + 1}
                                                </span>
                                                <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                                                    {layer.title}
                                                </h4>
                                            </div>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                {layer.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Section 4: Tech Stack Breakdown */}
                        <section
                            id="tech-stack"
                            className="bg-white rounded-sm p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-5"
                        >
                            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                                <div className="w-9 h-9 rounded-sm bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                    <Code2 size={20} />
                                </div>
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-black text-gray-950">
                                        4. Phân tầng công nghệ sử dụng
                                    </h2>
                                    <p className="text-xs text-gray-500">
                                        Các công cụ, thư viện và framework cấu thành dự án
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 pt-1">
                                {project.techStackGroups.map((group, idx) => (
                                    <div
                                        key={idx}
                                        className="p-5 bg-gray-50/60 rounded-sm border border-gray-100 space-y-3"
                                    >
                                        <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider pb-2 border-b border-gray-200/60">
                                            {group.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {group.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-2.5 py-1 bg-white text-gray-800 text-xs font-medium rounded-sm border border-gray-200 shadow-2xs"
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
                            <section
                                id="learnings"
                                className="bg-white rounded-sm p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-5"
                            >
                                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                                    <div className="w-9 h-9 rounded-sm bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                                        <Lightbulb size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-black text-gray-950">
                                            5. Bài học & Kinh nghiệm đúc kết
                                        </h2>
                                        <p className="text-xs text-gray-500">
                                            Kỹ năng kỹ thuật và tư duy phát triển phần mềm rút ra sau dự án
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-1">
                                    {project.learnings.map((learn, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3 p-3.5 bg-amber-50/30 rounded-sm border border-amber-100 text-xs sm:text-sm text-gray-800"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                                            <p className="leading-relaxed">{learn}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Bottom CTA & Return */}
                        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-orange-600 px-4 py-2.5 rounded-sm bg-white border border-gray-200 hover:border-orange-300 transition-all shadow-2xs"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Quay lại danh sách dự án
                            </Link>

                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white px-5 py-2.5 rounded-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xs transition-all"
                            >
                                <span>Liên hệ phỏng vấn trao đổi dự án</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
