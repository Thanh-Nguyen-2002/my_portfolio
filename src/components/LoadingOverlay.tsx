"use client";
import { useEffect, useState } from "react";
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
  const letters = text.split("");
  const [displayed, setDisplayed] = useState<string[]>(Array(letters.length).fill(""));
  const [isVisible, setIsVisible] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!show) return;

    const intervalSpeed = 40;
    const duration = 3200;
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
  }, [show, text]);

  useEffect(() => {
    if (!isCompleted) return;
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish?.();
    }, 1000);
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
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center 
                     bg-gradient-to-b from-orange-50 to-white text-orange-600"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-widest flex"
          >
            {displayed.map((char, i) => (
              <span key={i} className="inline-block w-10 text-center">
                {char || " "}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-gray-500 text-sm"
          >
            Đang khởi động portfolio ✨
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
