'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Projects() {
  const projects = [
    {
        title: "Online Test Software using AI-Based Grading",
        category: "React.js, Node.js, Express.js, MongoDB",
        image: "/d4.png",
        description: "A project that replaces the traditional teachers need to correct and grade the tests along wtih AI generated feedback. A MVP level 1 software made under the Founder Suite Inc",
        tags: ["Next.js", "TypeScript", "LLM", "Supabase"],
        status: "Completed",
        github: "https://github.com/yourusername/traffix"
    },

    {
        title: "Project M-Park",
        category: "Next.js, Node.js, Express.js, MongoDB",
        image: "/d5.png",
        description: "An intelligent traffic management system using computer vision and machine learning to optimize traffic flow and reduce congestion in urban areas.",
        tags: ["Next.js", "JavaScript", "Html/CSS", "MongoDB"],
        status: "In Development",
        github: "https://github.com/yourusername/traffix"
    },

    {
        title: "Used/preowned car dealership website",
        category: "React.js, Node.js, Express.js, MongoDB",
        image: "/d1.png",
        description: "An intelligent traffic management system using computer vision and machine learning to optimize traffic flow and reduce congestion in urban areas.",
        tags: ["React.Js", "OpenCV", "TensorFlow", "YOLOv5"],
        status: "Completed",
        github: "https://github.com/yourusername/traffix"
    },

    {
      title: "Project Traffix",
      category: "Computer Vision",
      image: "/updates3.png",
      description: "An intelligent traffic management system using computer vision and machine learning to optimize traffic flow and reduce congestion in urban areas.",
      tags: ["Python", "OpenCV", "TensorFlow", "YOLOv5"],
      status: "In Development",
      github: "https://github.com/Sahil-Ghodvinde/Smart-traffic-Signal-system"
    },

    

    

    
    // Add other projects...
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects - Changed from fixed to absolute */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-20 w-72 h-72 
          bg-blue-500/10 rounded-full blur-[120px] opacity-40 animate-float" />
        <div className="absolute -bottom-40 right-20 w-72 h-72 
          bg-purple-500/10 rounded-full blur-[120px] opacity-40 animate-float-delayed" />
        <div className="absolute inset-0 bg-noise opacity-[0.15]" />
      </div>

      {/* Main content wrapper - Added relative positioning */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Header />

          <main className="py-20">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative mb-16"
            >
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5]/80 to-[#9333EA]/80">
                  Featured Projects
                </span>
              </h1>
              <p className="text-gray-400/80 max-w-2xl">
                Explore my portfolio of innovative solutions in traffic management, urban development, and technology integration.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-6 
                    border border-gray-800 hover:border-gray-700 
                    transition-all duration-500 group-hover:translate-y-[-8px]">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Project Image */}
                      <div className="relative aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full text-sm 
                            bg-black/40 backdrop-blur-sm border border-gray-800
                            text-gray-300/90">
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm text-gray-400/80 uppercase tracking-wider mb-2">
                            {project.category}
                          </p>
                          <h2 className="text-2xl font-bold text-white/90 group-hover:text-white">
                            {project.title}
                          </h2>
                        </div>

                        <p className="text-gray-400/80 group-hover:text-gray-300/90">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-sm
                                bg-black/40 backdrop-blur-sm
                                border border-gray-800
                                text-gray-300/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex items-center gap-4">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                              bg-black/40 backdrop-blur-sm
                              border border-gray-800 hover:border-gray-700
                              text-gray-300/90 hover:text-gray-200
                              transition-all duration-300"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                            </svg>
                            <span>View Code</span>
                          </motion.a>

                          <motion.a
                            href="#"
                            whileHover={{ y: -2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                              bg-gradient-to-r from-[#4F46E5]/10 to-[#9333EA]/10
                              border border-gray-800 hover:border-gray-700
                              text-gray-300/90 hover:text-gray-200
                              transition-all duration-300"
                          >
                            <span>Live Demo</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}
