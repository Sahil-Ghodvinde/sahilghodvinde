'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Learn() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const learningPaths = [
    {
      title: "Next.js",
      subtitle: "Full-Stack Development",
      href: "/learn/nextjs",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderHover: "hover:border-blue-400/20",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      content: {
        default: "// Start your Next.js journey",
        hover: "npm create next-app@latest"
      }
    },
    {
      title: "UI/UX",
      subtitle: "Design Systems",
      href: "/learn/uiux",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderHover: "hover:border-purple-400/20",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128m0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      ),
      content: {
        default: "Design System Loading...",
        hover: "Progress"
      }
    }
  ]

  return (
    <section className="mb-16 relative">
      {/* Background effects */}
      <div className="absolute -top-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-12"
      >
        <h2 className="text-4xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Learn with me
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
          Explore different technologies and design principles through practical examples and tutorials.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {learningPaths.map((path, index) => (
          <Link key={index} href={path.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-[240px]"
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${path.gradient} rounded-2xl opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl`} />
              
              <div className="relative h-full rounded-2xl bg-black/40 backdrop-blur-xl p-8 
                border border-white/10 group-hover:border-white/20 
                transform transition-all duration-500 group-hover:translate-y-[-8px]">
                
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-lg bg-white/5 text-white/80 
                    group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                    {path.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white/90 group-hover:text-white">
                      {path.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">
                      {path.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content area */}
                <div className="relative bg-black/60 rounded-lg p-4 h-[100px] overflow-hidden">
                  <div className="font-mono text-sm">
                    {hoveredIndex === index ? (
                      <div className="text-gray-300 animate-typewriter">
                        {path.content.hover}
                        {index === 1 && (
                          <div className="mt-2 h-1 w-full bg-black rounded overflow-hidden">
                            <div className="h-full bg-purple-400/50 animate-progress" />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-gray-400">
                        {path.content.default}
                      </div>
                    )}
                  </div>
                </div>

                {/* Interactive elements */}
                <div className="absolute bottom-8 right-8 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400/60 
                    group-hover:bg-blue-400 transition-colors duration-300" />
                  <div className="w-2 h-2 rounded-full bg-purple-400/60 
                    group-hover:bg-purple-400 transition-colors duration-300 delay-75" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}