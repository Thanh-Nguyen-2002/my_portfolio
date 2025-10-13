"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const menu = ["About", "Experience", "Skills", "Projects", "Contact"];

    return (
        <>
            <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-sm z-50 flex justify-between items-center px-6 py-5">
                <h1 className="font-semibold text-orange-600">Nguyễn Xuân Thành</h1>
                <button onClick={() => setOpen(!open)} className="text-orange-600">
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <aside
                className={`fixed md:left-0 top-0 h-full w-80 bg-white shadow-lg p-6 flex flex-col justify-between z-40 transform 
                    md:translate-x-0 transition-transform duration-300 ${
                open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                }`}
            >
                <div>
                    <div className="text-center">
                        <Image
                            src="/images/default.png"
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                            height={96}
                            width={96}
                        />
                        <h2 className="text-xl font-semibold">Nguyễn Xuân Thành</h2>
                        <p className="text-orange-500 font-medium">Frontend Developer</p>
                    </div>

                    <nav className="mt-10 space-y-3 text-center md:text-left">
                        {menu.map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setOpen(false)}
                                className="block py-2 px-4 rounded-lg hover:bg-orange-100 hover:text-orange-600 transition"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex justify-center md:justify-start space-x-3 mt-6">
                    <span className="p-3 bg-pink-100 rounded-full">
                        <i className="lucide-briefcase"></i>
                    </span>
                    <span className="p-3 bg-purple-100 rounded-full">
                        <i className="lucide-flower"></i>
                    </span>
                </div>
            </aside>
        </>
    );
}
