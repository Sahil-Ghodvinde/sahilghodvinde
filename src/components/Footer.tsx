export default function Footer() {
    return (
      <footer className="py-8 border-t border-gray-800">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="/problems" className="hover:text-gray-300">Urban Problems</a></li>
              <li><a href="/updates" className="hover:text-gray-300">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Follow me</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">X</a></li>
              <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Contact me</h3>
            <a href="mailto:your.email@example.com" className="hover:text-gray-300">
              connect.sahilghodvinde@gmail.com
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          Copyright © {new Date().getFullYear()} sahilghodvinde.in. All rights reserved.
        </div>
      </footer>
    )
  }