'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const codeSnippet = '<div className="flex justify-center">\n  <Button onClick={() => {\n    router.push("/projects");\n  }}>Open Projects</Button></div>;'

  const navigationItems = [
    {
      title: "Projects",
      href: "/projects",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M19.25 16.25v-6.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v6.5a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="m4.75 9.75 7.5-5 7.5 5"/>
        </svg>
      ),
      content: codeSnippet
    },
    {
      title: "Urban Problems",
      href: "/urban-problems",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 21s-3-2-3-6m3 6s3-2 3-6"/>
        </svg>
      ),
      content: "Be the change :)"
    },
    {
      title: "About",
      href: "/about",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.964 0a9 9 0 1 0-11.964 0"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>
      ),
      content: "$ Do you know me? (Y/N)"
    }
  ]

  return (
    <section className="mb-16 relative">
      {/* Background effects */}
      <div className="absolute -top-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-12"
      >
        <h2 className="text-4xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Explore
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
          Navigate through different sections to discover more about my work and interests.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {navigationItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-[220px]"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative h-full rounded-2xl bg-black/40 backdrop-blur-xl p-6 
                border border-white/10 group-hover:border-white/20 
                transform transition-all duration-500 group-hover:translate-y-[-8px]">
                
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-lg bg-white/5 text-white/80 
                    group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white/90 group-hover:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Content area */}
                <div className="relative bg-black/60 rounded-lg p-4 h-[100px] overflow-hidden">
                  {index === 0 ? (
                    // Projects card content
                    <div className="font-mono text-sm">
                      <div className="hidden group-hover:block">
                        {codeSnippet.split('\n').map((line, i) => (
                          <div key={i} className="text-gray-300 animate-typewriter">
                            {line}
                          </div>
                        ))}
                      </div>
                      <div className="group-hover:hidden text-gray-400">
                        {"// Hover to see magic"}
                      </div>
                    </div>
                  ) : (
                    // Other cards content
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {item.content}
                      {index === 2 && (
                        <span className="inline-block w-2 h-4 ml-1 bg-white/70 animate-pulse" />
                      )}
                    </div>
                  )}
                </div>

                {/* Interactive elements */}
                <div className="absolute bottom-6 right-6 flex items-center space-x-2">
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