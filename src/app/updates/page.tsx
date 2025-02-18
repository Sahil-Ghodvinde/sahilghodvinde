'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'

export default function UpdatesPage() {
  const updates = [
    {
      title: "Project Traffix",
      image: "/updates1.jpg",
      description: "Project Traffix Shown at CiiA-4 exhibition, Worli",
      date: "March 15, 2024",
      content: "Detailed content about Project Traffix exhibition...",
    },
    {
      title: "Recent follow up",
      image: "/updates2.png",
      description: "Recent follow up of the street lights issue in Mumbai",
      date: "March 10, 2024",
      content: "Detailed content about street lights follow-up...",
    },
    {
      title: "Project M-Traffic",
      image: "/updates3.png",
      description: "Read: Implementation of Smart traffic Signals in Cities.",
      date: "March 5, 2024",
      content: "Detailed content about smart traffic signals...",
    },
    // Add more updates as needed
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1400px] mx-auto">
        <Header />
        <main className="pt-[120px] pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Updates & News
                </span>
              </h1>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Stay up to date with our latest developments, projects, and initiatives in traffic management solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12">
              {updates.map((update, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10"
                >
                  <Link href={`/updates/${update.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="group cursor-pointer">
                      <div className="relative h-96 w-full">
                        <Image
                          src={update.image}
                          alt={update.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      </div>
                      
                      <div className="relative p-8">
                        <div className="text-blue-400 mb-2">{update.date}</div>
                        <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                          {update.title}
                        </h2>
                        <p className="text-gray-400 text-lg mb-6">
                          {update.description}
                        </p>
                        <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                          <span className="font-medium">Read more</span>
                          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </main>
      </div>
      
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-medium mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                  <li><Link href="/urban-problems" className="text-gray-400 hover:text-white transition-colors">Urban Problems</Link></li>
                  <li><Link href="/updates" className="text-gray-400 hover:text-white transition-colors">Updates</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-3">Follow me</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">X</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-3">Contact me</h3>
                <p className="text-gray-400">connect.sahilghodvinde@gmail.com</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
              Copyright © 2025 sahilghodvinde.in. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}