'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Calculate relative position (0 to 1)
      const xPercent = x / rect.width
      const yPercent = y / rect.height
      
      // Update CSS variables for gradient position
      container.style.setProperty('--x', `${xPercent * 100}%`)
      container.style.setProperty('--y', `${yPercent * 100}%`)
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="relative p-8 rounded-2xl mb-8 overflow-hidden group min-h-[400px]
      cursor-pointer transition-all duration-1000 [--x:50%] [--y:50%]">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-gradient-slow">
          {/* Primary swirling dust layer */}
          <div className="absolute inset-0 bg-gradient-conic from-blue-500/40 via-blue-600/30 to-indigo-700/40 
            opacity-60 blur-[120px] group-hover:blur-[90px] group-hover:opacity-80
            transition-all duration-300 group-hover:scale-110 animate-spin-slow
            [background-position:var(--x)_var(--y)]" />
          
          {/* Color-shifting background layer */}
          <div className="absolute inset-0 bg-gradient-conic from-blue-400/30 via-indigo-600/30 to-purple-700/30 
            opacity-50 blur-[100px] animate-reverse-spin group-hover:blur-[70px] 
            group-hover:opacity-70 group-hover:scale-105 animate-hue-rotate" />
          
          {/* Ambient glow layer */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/40 via-indigo-600/30 to-transparent 
            opacity-40 blur-[90px] animate-pulse-slow group-hover:opacity-60
            group-hover:blur-[60px] group-hover:scale-105" />
          
          {/* Mouse-following glow effects */}
          <div className="absolute [left:var(--x)] [top:var(--y)] -translate-x-1/2 -translate-y-1/2 
            w-[500px] h-[500px] opacity-0 group-hover:opacity-40 transition-opacity duration-300
            bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
            from-blue-500/40 via-indigo-600/20 to-transparent blur-2xl" />
          <div className="absolute [left:var(--x)] [top:var(--y)] -translate-x-1/2 -translate-y-1/2 
            w-[500px] h-[500px] opacity-0 group-hover:opacity-30 transition-opacity duration-300
            bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
            from-indigo-500/40 via-purple-600/20 to-transparent blur-3xl animate-hue-rotate-slow" />
        </div>
        {/* Reduced darkness overlay on hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 
          transition-colors duration-1000" />
      </div>

      {/* Content remains the same */}
      <div className="relative z-10 flex items-center gap-8">
        <div className="relative w-64 h-64 rounded-full overflow-hidden 
          ring-4 ring-white/10 group-hover:ring-white/20 shadow-2xl
          transition-all duration-1000">
          <Image
            src="/pfpic1.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2 transition-transform duration-700
            group-hover:scale-105">
            Welcome to
            <div>Sahil Ghodvinde</div>
          </h1>
          <p className="text-gray-300 max-w-2xl mb-4 transition-colors duration-700
            group-hover:text-gray-200">
            Hello! I&apos;m Sahil Ghodvinde, an engineering student with a deep passion for technology, 
            innovation, and problem-solving. From a young age, I have been driven by curiosity and a 
            desire to create impactful solutions for real-world challenges.
          </p>
          <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full 
            hover:bg-white/20 transition-all duration-300 shadow-lg
            group-hover:shadow-white/10">
            Take a Tour
          </button>
        </div>
      </div>
    </div>
  )
}