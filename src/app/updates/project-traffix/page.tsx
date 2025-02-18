'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProjectDetail() {
  // This would typically come from an API or database
  const projectData = {
    "title": "Project Traffix",
    "subtitle": "Project Traffix is an innovative traffic management system designed to address urban congestion and road safety challenges. The project comprises two key components:",
    "category": ["Next.js", "React.js", "Node.js", "Express.js", "OpenCV", "TensorFlow"],
    "problemStatement": "Traffic congestion and inefficient road management lead to increased travel time, fuel wastage, and accidents. Project Traffix introduces two key solutions: M-Park – A smart parking system that helps users find and reserve parking spots in real-time, reducing unnecessary road congestion. M-Traffic – An AI-powered traffic control system that monitors vehicle movement, detects violations, and dynamically adjusts signals to optimize road flow.",
    "keyFeatures": [
      {
        "title": "Real-Time Traffic Analysis",
        "description": "Live monitoring and analysis of traffic density using computer vision to optimize signal timing."
      },
      {
        "title": "Adaptive Signal Control",
        "description": "Dynamic adjustment of traffic signals based on real-time traffic conditions and patterns."
      },
      {
        "title": "Computer Vision Integration",
        "description": "Advanced object detection and tracking using YOLOv5 and OpenCV for accurate vehicle counting and classification."
      },
      {
        "title": "Data Analytics Dashboard",
        "description": "Comprehensive dashboard showing real-time traffic data, patterns, and analytics for better decision making."
      },
      {
        "title": "Smart Parking Management",
        "description": "Real-time availability updates and automated payment system for seamless parking experiences."
      },
      {
        "title": "Automated Violation Detection",
        "description": "AI-powered cameras detect traffic violations like signal-jumping, speeding, and lane-cutting."
      }
    ],
    "techStack": {
      "frontend": ["Next.js", "React.js"],
      "backend": ["Node.js", "Express.js"],
      "ml": ["TensorFlow", "OpenCV", "YOLOv5"],
      "database": "MongoDB for real-time traffic and parking data management",
      "futureScope": ["Flask", "Django"]
    },
    "benefits": [
      "Real-Time Traffic Optimization",
      "Reduced Congestion",
      "Lower Emissions",
      "Improved Road Safety",
      "Enhanced Parking Efficiency",
      "Automated Traffic Violation Monitoring",
      "Data-Driven Urban Planning"
    ]
  }
  

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1400px] mx-auto">
        <Header />
        <main className="pt-[120px] pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-6">
                <span className="text-blue-400">{projectData.category}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">
                {projectData.title}
              </h1>
              
              <p className="text-gray-400 text-lg mb-12">
                {projectData.subtitle}
              </p>

              <div className="relative h-[600px] w-full mb-16 rounded-2xl overflow-hidden">
                <Image
                  src="/d6.png"
                  alt="Project Traffix"
                  fill
                  className="object-cover"
                />
              </div>

              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">Problem Statement</h2>
                <p className="text-gray-400">
                  {projectData.problemStatement}
                </p>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projectData.keyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
                <div className="space-y-6">
                  {/* Frontend */}
                  <div>
                    <h3 className="text-lg text-white mb-3">Frontend</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {projectData.techStack.frontend.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-white/5 rounded-xl px-4 py-2 text-center border border-white/10"
                        >
                          <span className="text-gray-400">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h3 className="text-lg text-white mb-3">Backend</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {projectData.techStack.backend.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-white/5 rounded-xl px-4 py-2 text-center border border-white/10"
                        >
                          <span className="text-gray-400">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Machine Learning */}
                  <div>
                    <h3 className="text-lg text-white mb-3">Machine Learning</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {projectData.techStack.ml.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-white/5 rounded-xl px-4 py-2 text-center border border-white/10"
                        >
                          <span className="text-gray-400">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div>
                    <h3 className="text-lg text-white mb-3">Database</h3>
                    <div className="bg-white/5 rounded-xl px-4 py-2 border border-white/10">
                      <span className="text-gray-400">{projectData.techStack.database}</span>
                    </div>
                  </div>

                  {/* Future Scope */}
                  <div>
                    <h3 className="text-lg text-white mb-3">Future Scope</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {projectData.techStack.futureScope.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-white/5 rounded-xl px-4 py-2 text-center border border-white/10"
                        >
                          <span className="text-gray-400">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-8">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectData.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-gray-400"
                    >
                      <svg
                        className="w-5 h-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
                >
                  <span className="text-white font-medium">View Demo</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <span className="text-white font-medium">View Code</span>
                </a>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}