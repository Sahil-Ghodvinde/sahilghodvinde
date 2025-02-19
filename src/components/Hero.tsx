'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Automatic animation for mobile devices
    let animationFrame: number
    let angle = 0

    const animate = () => {
      if (!isMobile) return
      
      // Create circular motion
      const centerX = 0.5 + Math.cos(angle) * 0.3
      const centerY = 0.5 + Math.sin(angle) * 0.3
      
      container.style.setProperty('--x', `${centerX * 100}%`)
      container.style.setProperty('--y', `${centerY * 100}%`)
      
      angle += 0.005 // Adjust speed here
      animationFrame = requestAnimationFrame(animate)
    }

    if (isMobile) {
      animate()
    } else {
      // Original mouse move handler for desktop
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        const xPercent = x / rect.width
        const yPercent = y / rect.height
        
        container.style.setProperty('--x', `${xPercent * 100}%`)
        container.style.setProperty('--y', `${yPercent * 100}%`)
      }

      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isMobile])

  return (
    <div ref={containerRef} 
      className={`relative p-8 rounded-2xl mb-8 overflow-hidden min-h-[400px]
        transition-all duration-1000 [--x:50%] [--y:50%]
        ${isMobile ? 'group' : 'group cursor-pointer'}`}
    >
      {/* Dynamic gradient background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isMobile ? 'animate-gradient-slow' : ''}`}>
          {/* Primary swirling dust layer */}
          <div className={`absolute inset-0 bg-gradient-conic from-blue-500/40 via-blue-600/30 to-indigo-700/40 
            opacity-60 blur-[120px] transition-all duration-300 animate-spin-slow
            ${isMobile ? 'blur-[90px] opacity-80 scale-110' : 'group-hover:blur-[90px] group-hover:opacity-80 group-hover:scale-110'}
            [background-position:var(--x)_var(--y)]`} />
          
          {/* Color-shifting background layer */}
          <div className={`absolute inset-0 bg-gradient-conic from-blue-400/30 via-indigo-600/30 to-purple-700/30 
            opacity-50 blur-[100px] animate-reverse-spin animate-hue-rotate
            ${isMobile ? 'blur-[70px] opacity-70 scale-105' : 'group-hover:blur-[70px] group-hover:opacity-70 group-hover:scale-105'}`} />
          
          {/* Ambient glow layer */}
          <div className={`absolute inset-0 bg-gradient-radial from-blue-500/40 via-indigo-600/30 to-transparent 
            opacity-40 blur-[90px] animate-pulse-slow
            ${isMobile ? 'opacity-60 blur-[60px] scale-105' : 'group-hover:opacity-60 group-hover:blur-[60px] group-hover:scale-105'}`} />
          
          {/* Mouse-following/animated glow effects */}
          <div className={`absolute [left:var(--x)] [top:var(--y)] -translate-x-1/2 -translate-y-1/2 
            w-[500px] h-[500px] transition-opacity duration-300
            bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
            from-blue-500/40 via-indigo-600/20 to-transparent blur-2xl
            ${isMobile ? 'opacity-40' : 'opacity-0 group-hover:opacity-40'}`} />
          <div className={`absolute [left:var(--x)] [top:var(--y)] -translate-x-1/2 -translate-y-1/2 
            w-[500px] h-[500px] transition-opacity duration-300
            bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
            from-indigo-500/40 via-purple-600/20 to-transparent blur-3xl animate-hue-rotate-slow
            ${isMobile ? 'opacity-30' : 'opacity-0 group-hover:opacity-30'}`} />
        </div>
        {/* Darkness overlay */}
        <div className={`absolute inset-0 transition-colors duration-1000
          ${isMobile ? 'bg-black/50' : 'bg-black/20 group-hover:bg-black/50'}`} />
      </div>

      {/* Content section - Modified for mobile */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
        <div className={`relative w-48 lg:w-64 h-48 lg:h-64 rounded-full overflow-hidden 
          ring-4 transition-all duration-1000
          ${isMobile ? 'ring-white/20' : 'ring-white/10 group-hover:ring-white/20'} shadow-2xl`}>
          <Image
            src="/pfpic1.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="text-center lg:text-left">
          <h1 className={`text-3xl lg:text-4xl font-bold mb-2 transition-transform duration-700
            ${isMobile ? 'scale-105' : 'group-hover:scale-105'}`}>
            Welcome to
            <div>Sahil Ghodvinde</div>
          </h1>
          <p className={`text-gray-300 max-w-2xl mb-4 transition-colors duration-700
            ${isMobile ? 'text-gray-200' : 'group-hover:text-gray-200'}`}>
            Hello! I&apos;m Sahil Ghodvinde, an engineering student with a deep passion for technology, 
            innovation, and problem-solving. From a young age, I have been driven by curiosity and a 
            desire to create impactful solutions for real-world challenges.
          </p>
          <Link href="/projects">
        <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full 
                hover:bg-white/20 transition-all duration-300 shadow-lg
                group-hover:shadow-white/10">
          See Projects
        </button>
      </Link>
        </div>
      </div>
    </div>
  )
}