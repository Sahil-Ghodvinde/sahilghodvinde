'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Updates() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const updates = [
    {
      title: "Project Traffix",
      image: "/updates1.jpg",
      description: "Project Traffix Shown at CiiA-4 exhibition, Worli"
    },
    {
      title: "Recent follow up ",
      image: "/updates2.png",
      description: "Recent follow up of the street lights issue in Mumbai"
    },
    {
      title: "Project M-Traffic",
      image: "/updates3.png",
      description: "Read: Implementation of Smart traffic Signals in Cities."
    }
  ]

  return (
    <section className="mb-16 relative">
      {/* Background gradient blur effect */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-12"
      >
        <h2 className="text-5xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Latest Updates
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
          Stay informed about our latest projects and initiatives in traffic management and smart city solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {updates.map((update, index) => (
          <Link href={`/updates/${update.title.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl cursor-pointer"
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Card content */}
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10
                transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                {/* Image with overlay */}
                <div className="relative h-52 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Hover overlay with icon */}
                  <div className={`absolute inset-0 bg-blue-500/20 backdrop-blur-sm flex items-center justify-center
                    transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Text content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {update.description}
                  </p>
                </div>

                {/* Interactive button */}
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* View all button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <Link href="/updates">
          <button className="group relative px-8 py-3 rounded-full bg-black/40 backdrop-blur-xl
            border border-white/10 hover:border-white/20 transition-all duration-300">
            <span className="relative z-10 text-white/80 group-hover:text-white font-medium">
              View all updates
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </button>
        </Link>
      </motion.div>
    </section>
  )
}