'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  VideoCameraIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

interface SidebarProps {
  currentPage?: 'home' | 'video' | 'yard';
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile on component mount and on window resize
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);
      // Always start closed, regardless of screen size
      setIsOpen(false);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // Close sidebar when resizing to mobile
      if (mobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      name: 'Home',
      href: '/kmio',
      icon: HomeIcon,
      active: currentPage === 'home',
    },
    {
      name: 'Video Demo',
      href: '/kmio/yt',
      icon: VideoCameraIcon,
      active: currentPage === 'video',
    },
    {
      name: 'Yard Layout',
      href: '/kmio/yard',
      icon: MapIcon,
      active: currentPage === 'yard',
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md text-gray-700 bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00B0B4]"
      >
        <span className="sr-only">Toggle sidebar</span>
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white shadow-xl transition-transform duration-300 ease-in-out`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 flex-shrink-0 items-center justify-center px-6 bg-[#006666]">
            <div className="relative w-24 h-10">
              <Image 
                src="/Kmio_logo.png" 
                alt="KMIO Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-col flex-1 overflow-y-auto pt-5 pb-4">
            <nav className="flex-1 space-y-1 px-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                    item.active
                      ? 'bg-[#00B0B4] text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon
                    className={`h-6 w-6 flex-shrink-0 ${
                      item.active ? 'text-white' : 'text-gray-500 group-hover:text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="ml-3">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
            

            
            {/* Help Section */}
            <div className="mt-auto px-4 py-4">
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Need Help?
                </h3>
                <div className="mt-2 space-y-1">
                  <a
                    href="#"
                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <ArrowLeftIcon className="h-5 w-5 text-gray-500 group-hover:text-gray-500" />
                    <span className="ml-3">Back to Main Site</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:bg-opacity-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
