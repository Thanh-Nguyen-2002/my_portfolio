import React from "react";
import Image from "next/image";
import { data_project_detail } from "@/data/project_detail";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Code2 } from "lucide-react";
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

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            <main className="p-6 md:p-10 max-w-6xl mx-auto space-y-10">
                {/* Back button */}
                <div>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-orange-600 px-4 py-2 rounded-sm bg-white border border-gray-200 shadow-2xs hover:border-orange-300 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Quay lại trang chủ
                    </Link>
                </div>

                {/* Hero section */}
                <section className="bg-white rounded-sm p-6 md:p-10 border border-gray-100 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-5">
                            <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-sm text-xs font-bold border border-orange-200">
                                Chi tiết dự án
                            </span>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                                {project.name}
                            </h1>

                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {project.desc}
                            </p>

                            {/* Action Links */}
                            <div className="flex flex-wrap gap-3 pt-2">
                                {project.linkWebSite && (
                                    <a
                                        href={project.linkWebSite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-sm font-semibold text-sm hover:bg-orange-600 shadow-sm transition"
                                    >
                                        <ExternalLink size={16} />
                                        Truy cập website
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-sm font-semibold text-sm hover:bg-gray-800 shadow-sm transition"
                                    >
                                        <Github size={16} />
                                        GitHub Repo
                                    </a>
                                )}

                                {project.github2 && (
                                    <a
                                        href={project.github2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2.5 rounded-sm font-semibold text-sm hover:bg-gray-200 transition"
                                    >
                                        <Github size={16} />
                                        Landing Repo
                                    </a>
                                )}
                            </div>

                            {/* Tech Stack Badges */}
                            <div className="pt-2">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                    Công nghệ sử dụng
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t: string) => (
                                        <span
                                            key={t}
                                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-sm text-xs font-semibold border border-gray-200/60"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="relative w-full h-64 md:h-[360px] rounded-sm overflow-hidden shadow-md border border-gray-200">
                            <Image
                                src={project.image || "/images/default.png"}
                                alt={project.name}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Technical Deep Dive */}
                <section className="bg-white rounded-sm p-6 md:p-10 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2.5 mb-6">
                        <div className="p-2 bg-orange-100 text-orange-600 rounded-sm">
                            <Code2 size={22} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Giải pháp kỹ thuật & Kiến thức áp dụng
                        </h2>
                    </div>

                    <div
                        className="knowledge-html"
                        dangerouslySetInnerHTML={{ __html: project.knowledgeHtml || "" }}
                    />
                </section>
            </main>
        </div>
    );
}
