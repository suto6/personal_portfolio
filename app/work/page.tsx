"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
    {
        title: "Suraksha",
        description:
            "Find the safest route. Suraksha prioritizes women's safety by mapping the safest routes, avoiding crime-prone areas, and providing real-time crime awareness.",
        image: "/suraksha.png",
        link: "https://devfolio.co/projects/suraksha-a0b6",
        techStack: ["React Native", "Expo", "Firebase"],
    },
    {
        title: "React Movie",
        description: "Stay Upto Date With Trending Movies. See The Author Of These Movies And Their Casts Also View The",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h4spsl4M9AlxJZGKPVXlnrsEyCIlf7.png",
        link: "https://react-movie-example.com",
        techStack: ["React", "JavaScript", "CSS"],
    },
    {
        title: "SkeleAR",
        description: "SkeleAR is an innovative AR-powered application designed to make learning human anatomy interactive and engaging. With SkeleAR, users can explore a 3D skeleton model, click on bones to highlight them, and access detailed descriptions with audio explanations.",
        image: "/skeleAR.png",
        link: "https://devfolio.co/projects/skelear-49cb",
        techStack: ["Unity", "C#", "AR Foundation"],
    },
    {
        title: "Textify",
        description: "'Textify' is an easy-to-use app for transforming text, allowing users to convert to uppercase, lowercase, remove extra spaces, and invert text effortlessly.",
        image: "/textify.png",
        link: "https://react-movie-example.com",
        techStack: ["React", "JavaScript", "Tailwind CSS"],
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
            <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="relative h-[300px]">
                                <motion.div
                                    whileHover={{ rotateX: -10, rotateY: 10 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                    className="h-full w-full relative rounded-lg overflow-hidden"
                                >
                                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                                </motion.div>
                            </div>
                        </a>

                        <div className="p-4 bg-black/80">
                            <h3 className="text-[#fa3c75] text-3xl font-bold mb-2">{project.title}</h3>
                            <p className="text-lg text-gray-400 leading-relaxed mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#333] text-white text-xs px-2 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

