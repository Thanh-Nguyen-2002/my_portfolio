"use client";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingOverlayProps {
    show: boolean;
    text?: string;
    onFinish?: () => void;
}

export default function LoadingOverlay({
    show,
    text = "PORTFOLIO",
    onFinish,
}: LoadingOverlayProps) {
    const letters = useMemo(() => text.split(""), [text]);
    const [displayed, setDisplayed] = useState<string[]>(Array(letters.length).fill(""));
    const [isVisible, setIsVisible] = useState(true);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (!show) return;

        const intervalSpeed = 30;
        const duration = 1000;
        let running = true;

        const interval = setInterval(() => {
            if (!running) return;
            setDisplayed(() =>
                letters.map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
            );
        }, intervalSpeed);

        const stopTimer = setTimeout(() => {
            running = false;
            clearInterval(interval);
            setDisplayed([...letters]);
            setIsCompleted(true);
        }, duration);

        return () => {
            running = false;
            clearInterval(interval);
            clearTimeout(stopTimer);
        };
    }, [show, letters]);

    useEffect(() => {
        if (!isCompleted) return;
        const timer = setTimeout(() => {
            setIsVisible(false);
            onFinish?.();
        }, 400);
        return () => clearTimeout(timer);
    }, [isCompleted, onFinish]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="loading-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isCompleted ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center 
                     bg-gradient-to-b from-orange-50 via-white to-amber-50 text-orange-600"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest flex"
                    >
                        {displayed.map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block mx-0.5"
                                animate={{
                                    color: isCompleted ? "#ea580c" : "#f97316",
                                    textShadow: isCompleted
                                        ? "0 0 20px rgba(234, 88, 12, 0.4)"
                                        : "none",
                                }}
                            >
                                {char || "\u00A0"}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-xs sm:text-sm tracking-widest uppercase font-semibold text-gray-500"
                    >
                        Nguyễn Xuân Thành • Frontend Developer
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
