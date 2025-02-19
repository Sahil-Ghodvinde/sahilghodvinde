'use client'
import { motion } from 'framer-motion'

const Contact = () => {
  const contactCards = [
    {
      title: 'Email',
      value: 'connect@sahilghodvinde.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Location',
      value: 'Mumbai, India',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sahil-Ghodvinde',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: '"https://www.linkedin.com/in/sahil-ghodvinde',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/mumbaicommunit2',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      )
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mumbaikaarr/', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2.163c3.206 0 3.58.012 4.85.07 1.29.058 2.45.27 3.36.57.93.31 1.7.73 2.45 1.49.75.75 1.18 1.55 1.49 2.45.3.91.51 2.07.57 3.36.058 1.27.07 1.64.07 4.85s-.012 3.58-.07 4.85c-.058 1.29-.27 2.45-.57 3.36-.31.9-.73 1.7-1.49 2.45-.75.75-1.55 1.18-2.45 1.49-.91.3-2.07.51-3.36.57-1.27.058-1.64.07-4.85.07s-3.58-.012-4.85-.07c-1.29-.058-2.45-.27-3.36-.57-.9-.31-1.7-.73-2.45-1.49-.75-.75-1.18-1.55-1.49-2.45-.3-.91-.51-2.07-.57-3.36C2.175 15.58 2.163 15.27 2.163 12s.012-3.58.07-4.85c.058-1.29.27-2.45.57-3.36.31-.9.73-1.7 1.49-2.45.75-.75 1.55-1.18 2.45-1.49.91-.3 2.07-.51 3.36-.57C8.42 2.175 8.73 2.163 12 2.163zm0-2.163C8.741 0 8.33.012 7.05.07 5.77.13 4.66.36 3.66.73 2.66 1.1 1.83 1.67.73 2.57.1 3.2 0 4.1 0 12s.1 8.8.73 9.43c1 1 2.1 1.47 3.66 1.73.9.37 2.1.63 3.36.73 1.28.058 1.64.07 4.85.07s3.58-.012 4.85-.07c1.26-.1 2.46-.36 3.36-.73 1.56-.26 2.66-.73 3.66-1.73.63-.63.73-1.43.73-9.43s-.1-8.8-.73-9.43c-1-1-2.1-1.47-3.66-1.73-.9-.37-2.1-.63-3.36-.73C15.58.012 15.27 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-10.406a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
</svg>
      )
    }  
  ]

  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Ready to start a conversation? Reach out through any of these channels.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
        {contactCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-violet-500/10">
                  {card.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white/90">{card.title}</h3>
                  <p className="text-gray-400">{card.value}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center gap-6"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors duration-300"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

export default Contact