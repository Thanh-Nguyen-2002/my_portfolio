import SectionTitle from "./SectionTitle";

export default function Skills() {
    const groups = {
        Frontend: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"],
        Backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST API"],
        Tools: ["Git", "Figma", "Docker", "AWS", "Webpack"],
    };

    return (
        <section id="skills" className="bg-white shadow-md rounded-2xl p-6 md:p-8">
            <SectionTitle title="Skills" />
            <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(groups).map(([group, skills]) => (
                    <div key={group}>
                        <h3 className="font-semibold text-orange-600 mb-3">{group}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((s) => (
                                <span
                                    key={s}
                                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs md:text-sm font-medium"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
