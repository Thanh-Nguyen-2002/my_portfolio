import { Building2, Calendar, Users, GraduationCap, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Experience() {
    const experiences = [
        {
            company: "VIETAPP",
            time: "10/2025 - 10/2026",
            position: "Frontend Developer",
            product: "Hệ thống Dashboard quản trị POS & CRM dành cho doanh nghiệp bán lẻ",
            team: "Team size: 1 FE, 1 BE",
            badge: "Toàn thời gian",
            details: [
                "Phát triển các module chức năng Quản lý Đơn hàng (Orders) và Khách hàng (Customers) với bảng dữ liệu lớn, phân trang và bộ lọc chuyên sâu trên Ant Design.",
                "Tích hợp TanStack Query kết hợp Optimistic Updates giúp giao diện phản hồi mượt mà trong các thao tác giao dịch thanh toán POS, mang lại trải nghiệm liền mạch cho thu ngân.",
                "Áp dụng kỹ thuật Code Splitting với React.lazy & Suspense để tối ưu dung lượng bundle ban đầu và cải thiện đáng kể tốc độ tải trang.",
                "Xây dựng thư viện component dùng chung (bảng dữ liệu, bộ lọc động, modals popup) giúp đồng bộ thiết kế và giảm thiểu code trùng lặp giữa các module.",
                "Thiết lập phân quyền theo vai trò (Protected Routes) và bọc React Error Boundaries để cô lập sự cố, ngăn ngừa việc sập toàn bộ giao diện khi có lỗi phát sinh.",
            ],
            tech: ["ReactJS", "TypeScript", "TanStack Query", "Ant Design", "Tailwind CSS"],
        },
        {
            company: "CODEC",
            time: "06/2025 - 09/2025",
            position: "Frontend Developer (Internship)",
            product: "Nền tảng thương mại điện tử quản lý tồn kho và đơn hàng đa cửa hàng",
            team: "Team size: 3 FE, 2 BE",
            badge: "Thực tập",
            details: [
                "Xây dựng giao diện trang quản trị và điều phối bán hàng với Tailwind CSS, hỗ trợ xem và chuyển đổi tồn kho giữa các chi nhánh cửa hàng mượt mà.",
                "Tối ưu quy trình form nhập liệu sản phẩm đa bước (multi-step form) bằng React Hook Form, hạn chế tối đa việc re-render thừa của component.",
                "Tích hợp Zod schema validation để kiểm soát chặt chẽ tính hợp lệ của dữ liệu đầu vào ngay tại client trước khi gửi payload lên backend.",
                "Quản lý state toàn cục bằng Zustand kết hợp TanStack Query để đồng bộ dữ liệu đơn hàng và bộ lọc giữa các tab hoạt động song song.",
            ],
            tech: ["ReactJS", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Tailwind CSS"],
        },
    ];

    const education = {
        school: "Đại học FPT (FPT University)",
        time: "09/2020 - 12/2024",
        degree: "Kỹ sư Kỹ thuật phần mềm (Bachelor of Software Engineering)",
        details: [
            "Đào tạo chính quy chuyên sâu về Cấu trúc dữ liệu & Giải thuật, Kiến trúc phần mềm và Lập trình Web hiện đại.",
            "Tham gia thực hiện đồ án tốt nghiệp và các dự án nhóm mô phỏng quy trình Agile/Scrum doanh nghiệp.",
        ],
    };

    return (
        <section
            id="experience"
            className="bg-white shadow-sm rounded-sm p-6 md:p-10 border border-gray-100"
        >
            <SectionTitle title="Kinh nghiệm & Học vấn" />

            <div className="space-y-8 mt-6">
                {/* Work Experience */}
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className="relative pl-6 md:pl-8 border-l-2 border-orange-400 pb-2 last:pb-0"
                    >
                        {/* Dot indicator */}
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-orange-500 shadow-xs" />

                        {/* Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-3">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <Building2 size={18} className="text-orange-500" />
                                    {exp.company}
                                </h3>
                                <span className="px-2.5 py-0.5 rounded-sm text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">
                                    {exp.badge}
                                </span>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-sm">
                                <Calendar size={14} />
                                {exp.time}
                            </span>
                        </div>

                        {/* Position & Product */}
                        <p className="text-sm md:text-base font-semibold text-orange-600 mb-1">
                            {exp.position}
                        </p>
                        <p className="text-xs md:text-sm text-gray-700 font-medium mb-1">
                            {exp.product}
                        </p>
                        <p className="text-xs text-gray-400 flex items-center gap-1.5 mb-3">
                            <Users size={13} />
                            {exp.team}
                        </p>

                        {/* Bullet points */}
                        <ul className="space-y-2 mb-4 text-xs md:text-sm text-gray-600 leading-relaxed">
                            {exp.details.map((line, j) => (
                                <li key={j} className="flex items-start gap-2">
                                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {exp.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-2.5 py-1 text-xs font-medium rounded-sm bg-gray-100 text-gray-700"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Education */}
                <div className="relative pl-6 md:pl-8 border-l-2 border-emerald-400 pt-4">
                    <div className="absolute -left-[9px] top-5 w-4 h-4 rounded-full bg-white border-4 border-emerald-500 shadow-xs" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
                            <GraduationCap size={18} className="text-emerald-600" />
                            {education.school}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-sm">
                            <Calendar size={14} />
                            {education.time}
                        </span>
                    </div>

                    <p className="text-sm md:text-base font-semibold text-emerald-700 mb-2">
                        {education.degree}
                    </p>

                    <ul className="space-y-1.5 text-xs md:text-sm text-gray-600">
                        {education.details.map((d, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span>{d}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
