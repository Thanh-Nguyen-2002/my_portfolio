import React from "react";
import Image from "next/image";
import { data_project_detail } from "@/data/project_detail";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NotFoundProject from "@/components/NotFoundProject";
interface Props {
    params : {
        slug : string
    }
}

export default async function ProjectDetail({ params } : Props) {
    const { slug } = await params
    
    const project = data_project_detail.find(i => i.slug === slug);
    
    if(!project) {
        return (
            <div>
                <NotFoundProject />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">

            <main className="flex-1 p-6 space-y-10 md:space-y-12 max-w-[1700px] mx-auto">
                <section className="min-h-screen">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-orange-600 font-medium px-4 py-2 rounded-[6px] border border-transparent hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 w-fit"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Quay lại
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
                                {project?.name}
                            </h1>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                {project?.desc}
                            </p>

                            <a
                                href={project?.linkWebSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition"
                            >
                                🔗 Truy cập website
                            </a>

                            <div className="flex flex-wrap gap-3 pt-3">
                                {project?.tech.map((t: string) => (
                                    <span
                                        key={t}
                                        className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-[6px] text-sm font-medium border border-gray-200"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={project?.image || "/images/default.png"}
                                alt={project?.name || "Ảnh mặc định"}
                                fill
                                className="object-fill transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-3xl font-bold text-orange-600 mb-8">
                            Kiến thức đã áp dụng
                        </h2>

                        <div
                            className="knowledge-html"
                            dangerouslySetInnerHTML={{ __html: project?.knowledgeHtml || "" }}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}
