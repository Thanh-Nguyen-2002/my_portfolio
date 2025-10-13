import { Computer } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Experience() {
    const experiences = [
        {
            company: "Codec",
            time: "4/2025 - Present",
            position: "Front End",
            details: [
                "Tham gia phát triển dự án web thương mại điện tử.",
                "Thành thạo xây dựng ứng dụng web bằng ReactJS và Next.js.",
                "Triển khai và tích hợp RESTful API bằng Axios và TanStack Query để tối ưu hóa việc lấy dữ liệu và quản lý trạng thái.",
                "Sử dụng thư viện giao diện người dùng Ant Design (Antd) để xây dựng giao diện thân thiện và responsive."
            ],
        },
        {
            company: "FPT Software Academy",
            time: "9/2023 - 12/2023",
            position: "Front End",
            details: [
                "Được đào tạo về xây dựng website thân thiện với người dùng và responsive bằng HTML, CSS và ReactJS.",
                "Tích lũy kinh nghiệm thực tế trong quá trình thực tập vị trí Frontend Developer."
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="bg-white shadow-md rounded-2xl p-6 md:p-10 border border-gray-100"
        >
            <SectionTitle title="Experience" />

            <div className="space-y-10 mt-4">
                {experiences.map((exp, i) => (
                    <div key={i} className="border-b border-gray-200 pb-5 last:border-none">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 tracking-wide flex gap-2 items-center">
                                <Computer size={18} className="text-orange-500" />
                                {exp.company}
                            </h3>
                            <span className="text-sm md:text-base text-gray-600 font-bold">
                                {exp.time}
                            </span>
                        </div>

                        <p className="font-semibold text-gray-700 mb-2">{exp.position}:</p>
                        <ul className="list-disc list-outside ml-6 text-gray-600 space-y-1 text-sm md:text-base leading-relaxed">
                            {exp.details.map((line, j) => (
                                <li key={j}>{line}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
