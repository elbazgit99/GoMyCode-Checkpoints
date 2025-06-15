'use client'; // This component uses client-side hooks like useRouter

import React from 'react';
import Link from 'next/link'; // For client-side navigation
import { usePathname } from 'next/navigation'; // Hook to get current path

const Navbar = () => {
  const pathname = usePathname(); // Get the current path to highlight active link

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Your Name */}
        <Link href="/" className="text-white text-3xl font-bold hover:text-gray-200 transition duration-300">
          MyPortfolio
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-lg font-medium py-2 px-3 rounded-md transition duration-300
                  ${pathname === link.href
                    ? 'bg-blue-800 text-white shadow-md' // Active link style
                    : 'text-gray-200 hover:bg-blue-500 hover:text-white' // Inactive link style
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
