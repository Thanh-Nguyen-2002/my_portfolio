import {
    Code2,
    Layers,
    Palette,
    CheckSquare,
    Wrench,
    Server,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

interface SkillItem {
    name: string;
    icon?: string;
    badge?: string;
}

interface SkillGroup {
    category: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    skills: SkillItem[];
}

export default function Skills() {
    const skillGroups: SkillGroup[] = [
        {
            category: "Core Frontend",
            description: "Nền tảng giao diện vững chắc và chuẩn ngữ nghĩa",
            icon: <Code2 className="text-orange-500" size={20} />,
            color: "border-orange-200 bg-orange-50/40",
            skills: [
                { name: "TypeScript", icon: "/icons/typescript.svg" },
                { name: "JavaScript (ES6+)", icon: "/icons/typescript.svg" },
                { name: "HTML5", icon: "/icons/html.svg" },
                { name: "CSS3", icon: "/icons/css.svg" },
                { name: "Responsive Design" },
            ],
        },
        {
            category: "Frameworks & State",
            description: "Xây dựng SPA/SSR hiệu năng cao & đồng bộ trạng thái",
            icon: <Layers className="text-blue-500" size={20} />,
            color: "border-blue-200 bg-blue-50/40",
            skills: [
                { name: "ReactJS", icon: "/icons/react.svg" },
                { name: "Next.js (App Router)", icon: "/icons/next.svg" },
                { name: "TanStack Query", badge: "Server State" },
                { name: "Zustand", badge: "Client State" },
                { name: "Context API" },
                { name: "Redux", icon: "/icons/redux.svg" },
            ],
        },
        {
            category: "UI & Styling",
            description: "Thiết kế component hiện đại, đồng bộ và chuyển động mượt",
            icon: <Palette className="text-purple-500" size={20} />,
            color: "border-purple-200 bg-purple-50/40",
            skills: [
                { name: "Tailwind CSS" },
                { name: "Ant Design" },
                { name: "Framer Motion" },
                { name: "Figma", icon: "/icons/figma.svg" },
            ],
        },
        {
            category: "Forms & Data Validation",
            description: "Tối ưu render form phức tạp & kiểm soát dữ liệu chặt chẽ",
            icon: <CheckSquare className="text-emerald-500" size={20} />,
            color: "border-emerald-200 bg-emerald-50/40",
            skills: [
                { name: "React Hook Form" },
                { name: "Zod Schema" },
                { name: "RESTful API Integration" },
            ],
        },
        {
            category: "Build Tools & Quality",
            description: "Quy trình phát triển chuyên nghiệp, kiểm soát chất lượng code",
            icon: <Wrench className="text-amber-500" size={20} />,
            color: "border-amber-200 bg-amber-50/40",
            skills: [
                { name: "Vite" },
                { name: "Webpack" },
                { name: "Git / GitHub", icon: "/icons/git.svg" },
                { name: "Postman", icon: "/icons/postman.svg" },
                { name: "ESLint & Prettier" },
            ],
        },
        {
            category: "Backend & Database (Secondary)",
            description: "Hiểu biết backend giúp phối hợp mượt mà với team API",
            icon: <Server className="text-cyan-500" size={20} />,
            color: "border-cyan-200 bg-cyan-50/40",
            skills: [
                { name: "Java Spring Boot" },
                { name: "Spring Data JPA" },
                { name: "PostgreSQL" },
                { name: "MySQL" },
                { name: "JWT Authentication" },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="bg-white shadow-sm rounded-sm p-6 md:p-10 border border-gray-100 overflow-hidden"
        >
            <SectionTitle title="Kỹ năng chuyên môn" />
            <p className="text-gray-500 text-xs sm:text-sm mt-1 mb-6">
                Tập trung vào hệ sinh thái Frontend hiện đại với React, Next.js và kiến trúc State Management
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {skillGroups.map((group, index) => (
                    <div
                        key={index}
                        className={`rounded-sm p-5 border ${group.color} transition-all duration-200 hover:shadow-xs`}
                    >
                        <div className="flex items-center gap-2.5 mb-1.5">
                            {group.icon}
                            <h3 className="font-bold text-gray-800 text-base">
                                {group.category}
                            </h3>
                        </div>
                        <p className="text-xs text-gray-500 mb-3.5">
                            {group.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white border border-gray-200/80 shadow-2xs hover:border-orange-300 transition-all text-xs font-semibold text-gray-800"
                                >
                                    {skill.icon && (
                                        <div className="relative w-4 h-4 shrink-0">
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                    <span>{skill.name}</span>
                                    {skill.badge && (
                                        <span className="text-[10px] font-normal px-1.5 py-0.5 rounded-sm bg-gray-100 text-gray-500">
                                            {skill.badge}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
