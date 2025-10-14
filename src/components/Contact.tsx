import { Mail, Phone, MapPin, Linkedin, Facebook, Gitlab, MousePointerClick } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden rounded-2xl p-8 md:p-14 border border-gray-100 shadow-md"
        >
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_40%_30%,rgba(255,200,150,0.3)_0%,rgba(255,255,255,0)_70%)]" />

            <div className="relative z-10">
                <SectionTitle title="Contact" />
                <div className="flex gap-3">
                    <p className="text-gray-700 text-base md:text-lg mb-10 max-w-2xl">
                        Tôi luôn sẵn sàng thảo luận về các dự án mới, cơ hội hợp tác, hoặc chỉ đơn giản là trao đổi
                        về ý tưởng sáng tạo. Hãy kết nối cùng tôi qua thông tin dưới đây
                    </p>
                    <MousePointerClick />
                </div>
                

                <div className="grid md:grid-cols-2 gap-10">

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Mail className="text-orange-500 w-6 h-6 mt-1" />
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                                    Email
                                </p>
                                <a
                                    href="mailto:nxthanh.nb2002@gmail.com"
                                    className="text-lg font-medium text-gray-800 hover:text-orange-600 transition-colors"
                                >
                                    nxthanh.nb2002@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-orange-500 w-6 h-6 mt-1" />
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                                    Phone
                                </p>
                                <p className="text-lg font-medium text-gray-800">+84 377 648 322</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-orange-500 w-6 h-6 mt-1" />
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                                    Location
                                </p>
                                <p className="text-lg font-medium text-gray-800">
                                    Trần Cung, Cổ Nhuế, Hà Nội, Vietnam
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-3">
                            <div
                                className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm 
                                        hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600 hover:text-white 
                                        hover:shadow-lg cursor-pointer transition-all duration-300 group"
                            >
                                <Gitlab className="text-gray-700 group-hover:text-white" size={20} />
                                <span className="font-semibold text-gray-700 group-hover:text-white">
                                    GitHub
                                </span>
                            </div>

                            <div
                                className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm 
                                        hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white 
                                        hover:shadow-lg cursor-pointer transition-all duration-300 group"
                            >
                                <Linkedin className="text-blue-600 group-hover:text-white" size={20} />
                                <p className="font-semibold text-gray-700 group-hover:text-white">
                                    LinkedIn
                                </p>
                            </div>

                            <div
                                className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm 
                                        hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white 
                                        hover:shadow-lg cursor-pointer transition-all duration-300 group"
                            >
                                <Facebook className="text-blue-500 group-hover:text-white" size={20} />
                                <span className="font-semibold text-gray-700 group-hover:text-white">
                                    Facebook
                                </span>
                            </div>
                        </div>

                    </div>

                    <form className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Họ và tên</label>
                            <input
                                type="text"
                                placeholder="Nhập họ tên của bạn"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 h-12
                                           focus:ring-orange-400 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Nhập địa chỉ email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                                           focus:ring-orange-400 focus:outline-none h-12"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Tin nhắn</label>
                            <textarea
                                placeholder="Nhập nội dung bạn muốn gửi..."
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 
                                           focus:ring-orange-400 focus:outline-none"
                            />
                        </div>

                        <div
                            className="w-full py-3 bg-orange-400 text-white font-semibold flex justify-center
                                       rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-12"
                        >
                            Gửi tin nhắn
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
