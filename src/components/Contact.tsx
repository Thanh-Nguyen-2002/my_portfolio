"use client";
import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Send,
    Check,
    Copy,
    MessageSquare,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [copied, setCopied] = useState(false);
    const [sent, setSent] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("nxthanh.nb2002@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`[Liên hệ tuyển dụng] - Từ ${name || "Nhà tuyển dụng"}`);
        const body = encodeURIComponent(`Chào Thành,\n\nTôi là ${name} (${email}).\n\nNội dung:\n${message}`);
        window.location.href = `mailto:nxthanh.nb2002@gmail.com?subject=${subject}&body=${body}`;
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden rounded-sm p-6 md:p-10 border border-gray-100 shadow-sm bg-white"
        >
            <div className="relative z-10">
                <SectionTitle title="Liên hệ hợp tác" />
                <p className="text-gray-600 text-xs sm:text-sm mt-1 mb-8 max-w-2xl">
                    Tôi luôn sẵn sàng trao đổi về các cơ hội nghề nghiệp Frontend Developer, dự án mới hoặc các ý tưởng công nghệ. Hãy kết nối với tôi!
                </p>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Contact Info Column */}
                    <div className="space-y-6">
                        {/* Email Card */}
                        <div className="flex items-start gap-4 p-4 rounded-sm bg-orange-50/50 border border-orange-100">
                            <div className="p-2.5 rounded-sm bg-orange-500 text-white shrink-0 mt-0.5">
                                <Mail size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                                    Email liên hệ
                                </p>
                                <a
                                    href="mailto:nxthanh.nb2002@gmail.com"
                                    className="text-sm sm:text-base font-semibold text-gray-900 hover:text-orange-600 truncate block transition-colors"
                                >
                                    nxthanh.nb2002@gmail.com
                                </a>
                            </div>
                            <button
                                onClick={handleCopyEmail}
                                title="Sao chép email"
                                className="p-2 text-gray-400 hover:text-orange-600 hover:bg-white rounded-sm transition-all shrink-0"
                            >
                                {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                            </button>
                        </div>

                        {/* Phone Card */}
                        <div className="flex items-start gap-4 p-4 rounded-sm bg-blue-50/50 border border-blue-100">
                            <div className="p-2.5 rounded-sm bg-blue-500 text-white shrink-0 mt-0.5">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                                    Số điện thoại
                                </p>
                                <a
                                    href="tel:+84377648322"
                                    className="text-sm sm:text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                                >
                                    (+84) 377 648 322
                                </a>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="flex items-start gap-4 p-4 rounded-sm bg-gray-50 border border-gray-100">
                            <div className="p-2.5 rounded-sm bg-gray-700 text-white shrink-0 mt-0.5">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                                    Địa điểm làm việc
                                </p>
                                <p className="text-sm sm:text-base font-semibold text-gray-900">
                                    Hà Nội, Việt Nam (Onsite / Hybrid / Remote)
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-2">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                Mạng xã hội & Nền tảng lập trình
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://github.com/Thanh-Nguyen-2002"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-sm text-xs sm:text-sm font-semibold hover:bg-gray-800 shadow-xs transition"
                                >
                                    <Github size={16} />
                                    GitHub Profile
                                </a>

                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0a66c2] text-white rounded-sm text-xs sm:text-sm font-semibold hover:bg-[#084e96] shadow-xs transition"
                                >
                                    <Linkedin size={16} />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Message Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-50/70 rounded-sm border border-gray-200/80 p-6 space-y-4 shadow-xs"
                    >
                        <div className="flex items-center gap-2 text-gray-800 font-bold text-base mb-1">
                            <MessageSquare size={18} className="text-orange-500" />
                            <span>Gửi lời nhắn nhanh</span>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Họ tên của bạn *
                            </label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="VD: Nguyễn Văn A (HR / Tech Lead)"
                                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Email liên hệ *
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Nội dung tin nhắn *
                            </label>
                            <textarea
                                required
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Thông tin về vị trí tuyển dụng hoặc nội dung trao đổi..."
                                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-sm resize-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-orange-500 text-white font-semibold text-sm flex items-center justify-center gap-2 rounded-sm shadow-md hover:bg-orange-600 transition-all cursor-pointer"
                        >
                            <Send size={16} />
                            {sent ? "Đang mở email gửi..." : "Gửi tin nhắn (Email)"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
