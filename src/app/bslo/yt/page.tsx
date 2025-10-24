'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowTopRightOnSquareIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import Sidebar from '@/components/SideBar_BSLO'

const YouTubePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <Sidebar currentPage="video" />
      <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-10 ml-14">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="relative w-24 h-10">
              <Image 
                src="/bslo.png" 
                alt="BSLO Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-xs">
              <div>Bokaro Steel Logistics Optimizer</div>
              <div className="text-gray-500">Video Demo</div>
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
            src="/bslo_bg2.png"
            alt="Bokaro Steel Logistics Optimizer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Project Demo Video
            </h1>
          </div>
        </div>

        {/* Video Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full min-h-[450px]"
                src="https://www.youtube.com/embed/TgFiyaS_cOg"
                title="BSLO Demo Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                Watch the full demonstration of how BSLO transforms the rake formation process at Bokaro Steel&apos;s Muttom Yard.
              </p>
              <a
                href="/bslo"
                className="inline-flex items-center px-6 py-2 bg-[#00B0B4] hover:bg-[#008a8e] text-white font-medium rounded-full transition-colors duration-300"
              >
                Back to Home
                <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#006666] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} BSLO Bokaro Steel Logistics Optimizer. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default YouTubePage
