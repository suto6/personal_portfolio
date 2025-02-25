"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Calendar } from "lucide-react"
import CalendlyWidget from "@/components/CalendlyWidget"
import { useState } from "react"

export default function Contact() {
    const [showCalendly, setShowCalendly] = useState(false)

    const handleCalendarClick = () => {
        setShowCalendly(true)
    }

    const handleCloseCalendly = () => {
        setShowCalendly(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-32 pb-20 min-h-screen"
        >
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-5xl font-bold mb-12 text-[#fa3c75] text-center">Let&apos;s Connect</h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <motion.a
                        href="https://github.com/suto6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center gap-4 p-8 rounded-lg bg-[#333] hover:bg-[#444] transition-colors"
                    >
                        <Github className="w-12 h-12" />
                        <span>Github</span>
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/sutapa-b-8b60bb2aa/"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-4 p-8 rounded-lg bg-[#0077B5] hover:bg-[#0077B5]/80 transition-colors"
                    >
                        <Linkedin className="w-12 h-12" />
                        <span>LinkedIn</span>
                    </motion.a>

                    <motion.a
                        href="https://x.com/SutoBiswas"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center gap-4 p-8 rounded-lg bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 transition-colors"
                    >
                        <Twitter className="w-12 h-12" />
                        <span>Twitter</span>
                    </motion.a>

                    <button
                        onClick={handleCalendarClick}
                        className="flex flex-col items-center gap-4 p-8 rounded-lg bg-[#fa3c75] hover:bg-[#fa3c75]/80 transition-colors"
                    >
                        <Calendar className="w-12 h-12" />
                        <span>Calendly</span>
                    </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <h2 className="text-2xl font-bold mb-4">SHOOT ME A MAIL</h2>
                    <a href="mailto:sutapab478@gmail.com" className="text-[#fa3c75] hover:underline">
                    sutapab478@gmail.com
                    </a>
                </motion.div>
            </div>
            {showCalendly && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8">
                        <CalendlyWidget />
                        <button onClick={handleCloseCalendly} className="mt-4 px-4 py-2 bg-[#fa3c75] text-white rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    )
}

