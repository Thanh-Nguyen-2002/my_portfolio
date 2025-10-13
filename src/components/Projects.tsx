import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function Projects() {
    const projects = [
        {
            name: "E-commerce Platform",
            desc: "Nền tảng thương mại điện tử với thanh toán và dashboard admin.",
            tech: ["React", "Node.js", "MongoDB"],
            color: "from-indigo-400 to-green-300",
        },
        {
            name: "Analytics Dashboard",
            desc: "Dashboard phân tích dữ liệu với biểu đồ real-time.",
            tech: ["Vue.js", "D3.js", "Firebase"],
            color: "from-green-300 to-cyan-300",
        },
        {
            name: "Mobile App UI",
            desc: "Giao diện mobile app tập trung vào UX/UI.",
            tech: ["React Native", "Figma"],
            color: "from-pink-400 to-red-300",
        },
        {
            name: "Creative Portfolio",
            desc: "Portfolio animation với GSAP.",
            tech: ["JavaScript", "GSAP"],
            color: "from-blue-400 to-indigo-400",
        },
    ];

    return (
        <section id="projects" className="bg-white shadow-md rounded-2xl p-6 md:p-8">
            <SectionTitle title="Recent Projects" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((proj, i) => (
                    <div
                        key={i}
                        className="rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition bg-white"
                    >
                        <div className={`h-32 bg-gradient-to-r ${proj.color}`}></div>
                        <div className="p-4">
                            <h3 className="font-semibold mb-1 text-sm md:text-base">{proj.name}</h3>
                            <p className="text-xs md:text-sm mb-3">{proj.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {proj.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <Link
                                href="#"
                                className="text-orange-600 font-semibold text-sm hover:underline"
                            >
                                View Project →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
