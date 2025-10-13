"use client";
import { useState } from "react";
import { Menu, X, Briefcase, Mail, User, Code, Rocket, GithubIcon, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const menu = [
        { name: "About", href: "#about", icon: User },
        { name: "Experience", href: "#experience", icon: Briefcase },
        { name: "Skills", href: "#skills", icon: Code },
        { name: "Projects", href: "#projects", icon: Rocket },
        { name: "Contact", href: "#contact", icon: Mail },
    ];

    return (
        <>
            <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-sm z-50 flex justify-between items-center px-6 py-4 border-b border-gray-100">
                <h1 className="font-bold text-xl text-orange-600 tracking-wide">Thành&apos;s Portfolio</h1>
                <button onClick={() => setOpen(!open)} className="text-orange-600 p-2 rounded-md hover:bg-orange-50 transition-colors duration-200">
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            <aside
                className={`fixed md:left-0 top-0 h-full w-80 bg-white shadow-lg p-6 flex flex-col justify-between z-40 transform
                    md:translate-x-0 transition-transform duration-300 ease-in-out ${
                open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div>
                    <div className="text-center mb-10 mt-4 md:mt-0">
                        <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-md border-2 border-orange-200">
                            <Image
                                src="/images/default.png"
                                alt="Profile"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">Nguyễn Xuân Thành</h2>
                        <p className="text-orange-500 font-semibold text-lg">Frontend Developer</p>
                    </div>

                    <nav className="space-y-2">
                        {menu.map((item) => {
                            const IconComponent = item.icon;

                            return (
                                <Link
                                    key={item.name}
                                    href={`${item.href}`}
                                    onClick={() => setOpen(false)}
                                    className={`flex items-center py-3 px-5 rounded-xl transition-all duration-200 
                                        group text-gray-700 hover:bg-orange-50 hover:text-orange-600`}
                                >
                                    <IconComponent
                                        size={20}
                                        className={`mr-3 text-gray-500 group-hover:text-orange-600
                                        `}
                                    />
                                    <span className="font-medium text-lg">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex justify-center space-x-4 mt-8 pb-4">
                    
                    <div className="p-3 hover:scale-110 transition-transform duration-200 rounded-full border border-gray-300 cursor-pointer">
                        <GithubIcon size={22} />
                    </div>
                    <div className="p-3 hover:scale-110 transition-transform duration-200 rounded-full border border-gray-300 cursor-pointer">
                        <Linkedin size={22} />
                    </div>
                    <div className="p-3 hover:scale-110 transition-transform duration-200 rounded-full border border-gray-300 cursor-pointer">
                        <Facebook size={22} />
                    </div>

                </div>
            </aside>
        </>
    );
}