import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Updates from '@/components/Updates'
import Navigation from '@/components/Navigation'
import Learn from '@/components/Learn'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <Header />
        <Hero />
        <Updates />
        <Learn />
        <Navigation />
        <Contact />
        <Footer />
        
      </div>
    </main>
  )
}