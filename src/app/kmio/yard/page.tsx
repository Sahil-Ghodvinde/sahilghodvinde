'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowTopRightOnSquareIcon, HomeIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import Sidebar from '@/components/Sidebar'

const YardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <Sidebar currentPage="yard" />
      <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-10 ml-14">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="relative w-24 h-10">
              <Image 
                src="/Kmio_logo.png" 
                alt="KMIO Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-xs">
              <div>Kochi Metro Induction Optimizer</div>
              <div className="text-gray-500">Yard Layout</div>
            </div>
          </div>
          <div className="hidden md:flex items-center bg-[#F5F7FA] px-4 py-2 rounded-full">
            <LightBulbIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
            <span className="font-semibold text-sm">SMART INDIA HACKATHON 2025</span>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[200px] w-full">
          <Image
            src="/img1.png"
            alt="Kochi Metro Yard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Muttom Yard Layout
            </h1>
            <p className="text-white/90 mt-2 text-center max-w-2xl">
              Interactive yard layout showing train positions, maintenance bays, and optimal paths
            </p>
          </div>
        </div>

        {/* Yard Layout Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <h2 className="text-2xl font-semibold text-[#00B0B4] mb-4">Yard Layout Overview</h2>
              <p className="text-gray-700 mb-6">
                The Muttom Yard layout has been digitally mapped to optimize train induction and maintenance operations. 
                The system considers track configurations, maintenance bay locations, and operational constraints to 
                ensure efficient movement and scheduling of train rakes.
              </p>
              
              {/* Yard Layout Image */}
              <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
                <Image
                  src="/Yard_layout_design.png"
                  alt="Muttom Yard Layout Design"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm bg-black/70 px-3 py-1 rounded-full">
                    Interactive - Click to explore
                  </span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#006666] mb-2">Key Areas</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Maintenance Bays</li>
                    <li>• Stabling Lines</li>
                    <li>• Deep Washing Area</li>
                    <li>• Inspection Bays</li>
                  </ul>
                </div>
                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#006666] mb-2">Capacity</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 4 Maintenance line</li>
                    <li>• 12 Stabling Lines</li>
                    <li>• 1 Washing Bays</li>
                    <li>• 3 Inspection Lines</li>
                  </ul>
                </div>
                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h3 className="font-semibold text-[#006666] mb-2">Features</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Automated Routing</li>
                    <li>• Real-time Tracking</li>
                  
                    <li>• Digital Twin Integration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F5F7FA] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#00B0B4] mb-4">About Muttom Yard</h3>
              <p className="text-gray-700 mb-4">
                Muttom Yard serves as the central maintenance and stabling facility for Kochi Metro's rolling stock. 
                The yard is equipped with state-of-the-art facilities for scheduled maintenance, cleaning, and 
                inspection of train rakes. The layout has been optimized for minimal shunting time and maximum 
                operational efficiency.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="/kmio"
                  className="inline-flex items-center px-6 py-2 bg-[#00B0B4] hover:bg-[#008a8e] text-white font-medium rounded-full transition-colors duration-300"
                >
                  <HomeIcon className="h-5 w-5 mr-2" />
                  Back to Home
                </a>
                <a
                  href="/kmio/yt"
                  className="inline-flex items-center px-6 py-2 border border-[#00B0B4] text-[#00B0B4] hover:bg-gray-50 font-medium rounded-full transition-colors duration-300"
                >
                  Watch Video Demo
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#006666] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} KMIO - Kochi Metro Induction Optimizer. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default YardPage