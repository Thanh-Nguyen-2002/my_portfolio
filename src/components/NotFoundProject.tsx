"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFoundProject() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-white text-gray-800 px-6">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <div className="flex items-center justify-center mb-6">
                    <div className="p-5 bg-orange-100 rounded-full shadow-inner">
                        <SearchX className="w-10 h-10 text-orange-500" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
                    Không tìm thấy dự án!
                </h1>

                <p className="text-lg text-gray-600 max-w-md mx-auto mb-10 leading-relaxed">
                    Có vẻ như dự án bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
                    <br />
                    Hãy quay lại trang chủ để xem các dự án khác nhé.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Quay lại trang chủ
                </Link>
            </motion.div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute -z-10 w-[400px] h-[400px] rounded-full bg-orange-100 blur-3xl opacity-40"
            ></motion.div>
        </section>
    );
}
