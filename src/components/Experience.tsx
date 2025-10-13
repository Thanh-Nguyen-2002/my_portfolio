import SectionTitle from "./SectionTitle";

export default function Experience() {
    const experiences = [
        {
            title: "Senior Frontend Developer",
            company: "Tech Company",
            time: "2022 - Present",
            desc: "Phát triển và duy trì ứng dụng web phức tạp sử dụng React và TypeScript.",
        },
        {
            title: "Frontend Developer",
            company: "Digital Agency",
            time: "2021 - 2022",
            desc: "Tạo website responsive với Vue.js, HTML/CSS, JavaScript.",
        },
        {
            title: "Junior Developer",
            company: "Startup",
            time: "2020 - 2021",
            desc: "Bắt đầu sự nghiệp frontend, tham gia phát triển sản phẩm từ ý tưởng đến triển khai.",
        },
    ];

    return (
        <section id="experience" className="bg-white shadow-md rounded-2xl p-6 md:p-8">
            <SectionTitle title="Experience" />
            <div className="space-y-5">
                {experiences.map((exp, i) => (
                    <div key={i}>
                        <h3 className="text-lg font-semibold text-orange-600">
                            {exp.title} • {exp.company}
                        </h3>
                        <p className="text-sm text-gray-500 mb-1">{exp.time}</p>
                        <p className="text-sm md:text-base">{exp.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
