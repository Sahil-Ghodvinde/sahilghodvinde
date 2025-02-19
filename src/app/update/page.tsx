'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">We&apos;ll be updating this page shortly!</h1>
          <p className="text-lg text-gray-300">
            Thank you for your patience. Please check back later for updates.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}