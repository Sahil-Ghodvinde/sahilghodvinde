'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Container wrapper for entire content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="space-y-24">
          {/* About Me Section (formerly Hero) */}
          <motion.section 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative pt-20"
          >
            {/* Container background with gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-9000/20 to-purple-500/20 blur-xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-1/3 relative">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full aspect-square max-w-[300px]"
                  >
                    <Image
                      src="/pfpic1.png"
                      alt="Sahil Ghodvinde"
                      width={300}
                      height={300}
                      className="relative rounded-xl object-cover border-2 border-white/10"
                    />
                  </motion.div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 
                    bg-clip-text text-transparent">
                    About Me
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      I am Sahil Ghodvinde, a passionate and forward-thinking individual driven by innovation, 
                      creativity, and leadership. I thrive on challenges that push me to think outside the box 
                      and bring unique perspectives to the table.
                    </p>
                    <p className="text-lg leading-relaxed">
                      With a strong problem-solving mindset and an eye for detail, I excel in organizing 
                      and managing teams, fostering collaboration, and driving impactful initiatives.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm
                        hover:bg-blue-500/20 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] 
                        transition-all duration-300 cursor-default">
                        Innovation
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm
                        hover:bg-purple-500/20 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]
                        transition-all duration-300 cursor-default">
                        Leadership
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm
                        hover:bg-blue-500/20 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
                        transition-all duration-300 cursor-default">
                        Problem Solving
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm
                        hover:bg-purple-500/20 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]
                        transition-all duration-300 cursor-default">
                        Team Management
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Innovation & Entrepreneurship Section */}
          <motion.section 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Container background with gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row-reverse items-start gap-12">
                <div className="md:w-1/2 relative flex justify-end">
                  <Image
                    src="/s1.png"
                    alt="Secretary General"
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                  <div className="absolute bottom-4 left-27 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-sm font-medium">Secretary General</p>
                    <p className="text-xs text-gray-400">of ACE MUN 2024</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 
                    bg-clip-text text-transparent">
                    Innovation & Entrepreneurship
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      As a key member of the Innovation and Entrepreneurship Cell ACE IIC at Atharva College 
                      of Engineering, I actively contribute to fostering creative ideas, technological 
                      advancements, and startup culture among students.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Managed over 2 Model United Nations</li>
                      <li>Managed Startup idea Pitching competition</li>
                      <li>Started Koffee with Innovation Podcast (ACE)</li>
                      <li>Handled official social Media page</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Urban Problem Solving Section */}
          <motion.section 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Container background with gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-1/3">
                  <Image
                    src="/s2.png"
                    alt="Urban Problem Solving"
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 
                    bg-clip-text text-transparent">
                    Urban Problem Solving & Civic Engagement
                  </h2>
                  <p className="text-gray-300 mb-4">
                    I strongly believe that change begins with action. That&apos;s why I actively work 
                    towards addressing citywide challenges through:
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      Using X (twitter) and other platforms to report civic issues such as broken 
                      streetlights, potholes, faulty signals, and unregulated traffic.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      Directly engaging with the Municipal Corporation and city officials to 
                      escalate problems and ensure timely resolutions.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      Advocating for better urban safety, traffic management, and smart 
                      infrastructure policies.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills And Projects Section */}
          <motion.section 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row-reverse items-start gap-12">
                <div className="md:w-1/3">
                  <Image
                    src="/s3.png"
                    alt="Skills and Projects"
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 
                    bg-clip-text text-transparent">
                    Skills And Projects
                  </h2>
                  <p className="text-gray-300 mb-4">
                    I have a strong foundation in web development, specializing in HTML, CSS, 
                    JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, and MongoDB. 
                    I&apos;m proficient in both frontend and backend development, allowing me to build 
                    full-stack applications seamlessly.
                  </p>
                  <p className="text-gray-300">
                    In addition to web technologies, I have experience in Python, OpenCV, AI model 
                    training, and Retrieval-Augmented Generation (RAG). I enjoy working on AI-driven 
                    applications, optimizing computer vision models, and automating processes with 
                    smart solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Passion & Work Section */}
          <motion.section 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-1/3">
                  <Image
                    src="/s4.png"
                    alt="Passion and Work"
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                  <div className="absolute top-26 left-27 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-sm font-medium">Chief HR Officer</p>
                    <p className="text-xs text-gray-400">I&E Cell </p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 
                    bg-clip-text text-transparent">
                    Passion & Work
                  </h2>
                  <p className="text-gray-300 mb-4">
                    I am also an avid photographer & videographer, a tech enthusiast, and the host 
                    of the podcast Koffee with Innovation where I explore ideas in technology, 
                    education, and entrepreneurship.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Handled the Technical team KWI Podcast.</li>
                    <li>• Handled the Technical team Phoenix 1.0, Phoenix 2.0.</li>
                    <li>• Lead the Graphics Team ACE MUN.</li>
                    <li>• Worked on Project Hype ( Research on Brands)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}