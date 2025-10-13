import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            name: "Portfolio",
            desc: "Website giới thiệu cá nhân với thông tin, dự án, kỹ năng và liên hệ.",
            tech: ["NextJs", "Tailwind CSS"],
            image: "/images/protfolio.png",
        },
        {
            name: "E-commerce Platform",
            desc: "Nền tảng thương mại điện tử với hệ thống quản lý sản phẩm, giỏ hàng, thanh toán và trang quản trị dành cho admin.",
            tech: ["ReactJS", "Tailwind CSS", "TypeScipt"],
            image: "/images/ecommerce.png",
        }

    ];

    return (
        <section id="projects" className="bg-white shadow-md rounded-2xl p-6 md:p-8">
            <SectionTitle title="Projects" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((proj, i) => (
                    <div
                        key={i}
                        className="rounded-[6px] overflow-hidden shadow-sm border hover:shadow-md transition bg-white border-gray-100"
                    >
                        <div className="h-36 w-full relative"
                        >
                            <Image
                                src={proj.image}
                                alt={proj.name}
                                fill
                                className="absolute"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold mb-1 text-sm md:text-base">{proj.name}</h3>
                            <p className="text-xs md:text-sm mb-3 line-clamp-2">{proj.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {proj.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-5 py-3 bg-gray-200 rounded-[6px] text-black font-bold"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex-1 flex-col">   
                                <Link
                                    href="#"
                                    className="text-orange-600 font-semibold text-sm hover:underline"
                                >
                                    View Project →
                                </Link>
                            </div>
                           
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
