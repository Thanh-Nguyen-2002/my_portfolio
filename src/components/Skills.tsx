import { Code2, Database, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { ReactNode } from "react";

interface SkillProp {
    name: string,
    icon: string
}

interface Props {
    name : string,
    icon : ReactNode,
    gradient : string,
    skills ?: SkillProp[]
}

export default function Skills() {
    const groups : Props[] = [
        {
            name: "Frontend",
            icon: <Code2 className="text-orange-500" size={22} />,
            gradient: "from-pink-100 via-orange-50 to-yellow-100",
            skills : [
                { name: "Reactjs", icon: "/icons/react.svg" },
                { name: "Nextjs", icon: "/icons/next.svg" },
                { name: "HTML", icon: "/icons/html.svg" },
                { name: "CSS", icon: "/icons/css.svg" },
                { name: "TypeScript", icon: "/icons/typescript.svg" },
                { name: "Redux", icon: "/icons/redux.svg" },
            ]
        },
        {
            name: "Backend",
            icon: <Database className="text-blue-500" size={22} />,
            gradient: "from-blue-100 via-cyan-50 to-green-100",
            skills: [
                { name : "", icon : ""},
                { name : "", icon : ""}
            ],
        },
        {
            name: "Tools",
            icon: <Wrench className="text-purple-500" size={22} />,
            gradient: "from-purple-100 via-indigo-50 to-pink-100",
            skills: [
                { name : "Git", icon : "/icons/git.svg"},
                { name : "Postman", icon : "/icons/postman.svg"}
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="bg-white shadow-md rounded-2xl p-6 md:p-10 border border-gray-100 overflow-hidden relative"
        >
            <SectionTitle title="My Skills" />

            <div className="grid gap-6 mt-6">
                {groups.map((group, i) => (
                    <div
                        key={i}
                        className={`bg-gradient-to-br ${group.gradient} rounded-2xl p-5 transition-all duration-300`}
                    >
                        <div className="flex items-center gap-2 mb-3">
                            {group.icon}
                            <h3 className="font-semibold text-gray-800 text-lg">{group.name}</h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                            {group?.skills?.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 rounded-xl 
                                            bg-white shadow-sm hover:shadow-lg hover:-translate-y-1
                                            transition-all duration-300 border border-gray-100"
                                >
                                    <div className="relative w-12 h-15 mb-3">
                                        {skill.icon &&
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                fill
                                                className="object-contain"
                                            />
                                        }

                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-800 tracking-wide">
                                        {skill.name.toUpperCase()}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
