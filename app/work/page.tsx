"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
    {
        title: "PIPAR",
        description:
            "A Digital Web3 Platform For Tokenizing Company Shares/Stocks. These Assets Can Be Fungible Or Non-Fungible",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h4spsl4M9AlxJZGKPVXlnrsEyCIlf7.png",
    },
    {
        title: "React Movie",
        description: "Stay Upto Date With Trending Movies. See The Author Of These Movies And Their Casts Also View The",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h4spsl4M9AlxJZGKPVXlnrsEyCIlf7.png",
    },
]

export default function Work() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-32 min-h-screen"
        >
            <div className="container mx-auto px-4 space-y-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[60vh] transform perspective-1000">
                            <motion.div
                                whileHover={{ rotateX: -10, rotateY: 10 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="h-full w-full relative rounded-lg overflow-hidden border-2 border-[#00FF00] shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                            >
                                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                            </motion.div>
                        </div>

                        <div className="absolute top-0 left-0 p-8">
                            <h3 className="inline-block px-4 py-2 bg-black/80 text-[#00FF00] text-2xl font-bold rounded mb-4 border border-[#00FF00]">
                                {project.title}
                            </h3>
                            <p className="max-w-xl bg-black/80 text-white p-4 rounded">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

