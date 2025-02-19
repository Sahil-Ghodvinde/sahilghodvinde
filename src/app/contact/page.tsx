'use client'


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact'; // Import the Contact component

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6">

        
        {/* Include the Contact component */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}