"use client"

import { motion } from "framer-motion"
import { useTypewriter } from "react-simple-typewriter"
import Image from "next/image"
import { Github, Linkedin, Twitter, Calendar } from "lucide-react"

const tools = [
  { name: "Next Js", icon: "netx" },
  { name: "React", icon: "react" },
  { name: "Flutter", icon: "flutter" },
  { name: "Node", icon: "node" },
  { name: "React-Native", icon: "react-native" },
  { name: "JavaScript", icon: "javascript" },
  { name: "GenAI", icon: "AI" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "SQL", icon: "sql" },
]

export default function Home() {
  const [_text] = useTypewriter({
    words: ["Creator/Builder", "App Developer", "Indie Hacker"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="relative">
      <div className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 star-pattern" />

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-2 rounded-full bg-[#330033] text-[#fa3c75] mb-6">
              👋 Hi There! I&apos;m SUTO
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              A <span className="text-[#fa3c75]">{_text}</span>. I Help Startups{" "}
              <span className="text-[#fa3c75]">Launch</span> And <span className="text-[#fa3c75]">Grow</span> Their
              Products
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              I&apos;ve built applications using React.js, Next.js, React Native, and Flutter. I love participating in hackathons and tech events—1x hackathon runner-up!

              Lately, I’ve been diving into Generative AI and AI automation, and I’m absolutely loving it. I’m also passionate about micro-startups and solving real-world problems. Launching my product soon!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px]"
          >
            <Image
              src="/image.png"
              alt="Developer Illustration"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Tooling Section */}
      <section className="py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-4xl font-bold mb-12 neon-text"
        >
          TOOLING
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="border border-[#fa3c75] rounded-lg p-4 text-center hover:bg-[#fa3c75]/10 transition-colors"
            >
              <span className="text-[#fa3c75]">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-black/30">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-4xl font-bold mb-12 neon-text"
        >
          CONNECT WITH ME
        </motion.h2>

        <div className="grid grid-cols-4 max-w-4xl mx-auto">
          <a
            href="https://github.com/suto6"
            className="flex items-center justify-center py-8 px-4 bg-[#333] hover:bg-[#444] transition-colors"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/sutapa-b-8b60bb2aa/"
            className="flex items-center justify-center py-8 px-4 bg-[#0077B5] hover:bg-[#0077B5]/80 transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://x.com/SutoBiswas"
            className="flex items-center justify-center py-8 px-4 bg-[#1DA1F2] hover:bg-[#1DA1F2]/80 transition-colors"
          >
            <Twitter className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center py-8 px-4 bg-[#fa3c75] hover:bg-[#fa3c75]/80 transition-colors"
          >
            <Calendar className="w-8 h-8" />
          </a>
        </div>
      </section>
    </div>
  )
}

