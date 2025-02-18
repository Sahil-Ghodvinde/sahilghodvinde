import Link from 'next/link'

export default function Header() {
  const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'Updates', href: '/updates' },
    { label: 'Urban Problems', href: '/urban-problems' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="py-6 px-4 sticky top-4 z-50">
      <div className="bg-black/50 backdrop-blur-sm rounded-2xl">
        <div className="flex justify-between items-center max-w-6xl mx-auto py-4 px-6">
          {/* Logo/Name */}
          <Link 
            href="/" 
            className="group relative"
          >
            <div className="relative z-10">
              <span className="text-2xl font-bold tracking-tight inline-block
                bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 
                bg-clip-text text-transparent 
                bg-[length:200%_auto] group-hover:bg-[length:100%_auto]
                transition-all duration-500"
              >
                Sahil
              </span>
              <span className="text-2xl font-light tracking-tighter ml-[0.2em] inline-block
                bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 
                bg-clip-text text-transparent
                bg-[length:200%_auto] group-hover:bg-[length:100%_auto]
                transition-all duration-500"
              >
                Ghodvinde
              </span>
            </div>

            {/* Animated underline */}
            <div className="absolute -bottom-1 left-0 w-full h-[1px] 
              bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 
              opacity-0 group-hover:opacity-100 
              transform origin-left scale-x-0 group-hover:scale-x-100
              transition-all duration-500" />

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
              blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative dot */}
            <div className="absolute -right-3 top-0 w-1.5 h-1.5 rounded-full
              bg-blue-400 opacity-0 group-hover:opacity-100
              transform translate-y-1 group-hover:translate-y-0
              transition-all duration-500" />
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="relative text-gray-300 hover:text-white transition-colors duration-300
                      after:content-[''] after:absolute after:w-full after:h-[2px] 
                      after:bg-white after:bottom-[-4px] after:left-0
                      after:scale-x-0 hover:after:scale-x-100
                      after:transition-transform after:duration-300 after:origin-left"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}