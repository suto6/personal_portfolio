"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Navigation() {
    const pathname = usePathname()

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed w-full z-40 top-0 py-8"
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-medium hover:opacity-60 transition-opacity">
                    SUTO
                </Link>
                <ul className="flex gap-8">
                    {[
                        { href: "/", label: "Home" },
                        { href: "/work", label: "Work" },
                        { href: "/contact", label: "Contact" },
                    ].map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`relative text-sm tracking-wider hover:opacity-60 transition-opacity ${pathname === href ? "text-white" : "text-gray-400"
                                    }`}
                            >
                                <motion.span
                                    className="inline-block"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 500 }}
                                >
                                    {label}
                                </motion.span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    )
}

