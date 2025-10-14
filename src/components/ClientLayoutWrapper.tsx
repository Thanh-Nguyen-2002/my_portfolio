"use client";
import { useState } from "react";
import LoadingOverlay from "./LoadingOverlay";
import { motion } from "framer-motion";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative">
            {loading && (
                <LoadingOverlay
                    show={loading}
                    text="PORTFOLIO"
                    onFinish={() => setLoading(false)}
                />
            )}
            {!loading && (
                <motion.main
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {children}
                </motion.main>
            )}
        </div>
    );
}
