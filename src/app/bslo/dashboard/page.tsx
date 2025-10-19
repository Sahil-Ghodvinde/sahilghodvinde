'use client'

import React from 'react'
import Image from 'next/image'
import { LightBulbIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Sidebar from '@/components/SideBar_BSLO'

const YardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <Sidebar currentPage="dashboard" />
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
              <div className="text-gray-500">By Team Devkstra</div>
            </div>
          </div>
          <div className="hidden md:flex items-center bg-[#F5F7FA] px-4 py-2 rounded-full">
            <LightBulbIcon className="h-5 w-5 text-[#00B0B4] mr-2" />
            <span className="font-semibold text-sm">SMART INDIA HACKATHON 2025</span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-[#2D3748] mb-4">
            Interactive Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Access the live BSLO dashboard to explore optimization insights and analytics
          </p>
          <a
            href="https://sih-app-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#00B0B4] hover:bg-[#008a8e] text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Open Dashboard
            <ArrowTopRightOnSquareIcon className="h-6 w-6 ml-2" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#006666] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} BSLO - Bokaro Steel Logistics Optimizer. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default YardPage