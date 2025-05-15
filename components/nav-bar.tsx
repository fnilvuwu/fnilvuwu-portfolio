'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useScroll } from '../contexts/ScrollContext'

export function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { navigateToSection } = useScroll()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold" onClick={(e) => { e.preventDefault(); navigateToSection('/') }}>Fnilvuwu</Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1">
            <Link href="/" className="text-sm font-medium hover-effect" onClick={(e) => { e.preventDefault(); navigateToSection('/') }}>
              HOME
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/about" className="text-sm font-medium hover-effect" onClick={(e) => { e.preventDefault(); navigateToSection('/about') }}>
              ABOUT
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/services" className="text-sm font-medium hover-effect" onClick={(e) => { e.preventDefault(); navigateToSection('/services') }}>
              SERVICES
            </Link>
          </div>
          <div
            className="relative flex items-center space-x-1 cursor-pointer"
            onClick={toggleDropdown}
          >
            <span
              className="text-sm font-medium"
              style={{ userSelect: "none" }} // Disable text selection
            >
              PORTFOLIO
            </span>
            <ChevronDown className="h-4 w-4" />
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 ps-2 pe-4 bg-white rounded-md">
                <Link href="/certificates" className="block my-2 text-sm font-medium hover-effect" onClick={(e) => { e.preventDefault(); navigateToSection('/certificates') }}>
                  CERTIFICATES
                </Link>
                <Link href="/experience" className="block my-2 text-sm font-medium hover-effect" onClick={(e) => { e.preventDefault(); navigateToSection('/experience') }}>
                  EXPERIENCE
                </Link>
                <Link href="/projects" className="block my-2 text-sm font-medium hover-effect" onClick={(e) => { e.preventDefault(); navigateToSection('/projects') }}>
                  PROJECTS
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-1">
            <Link href="/articles" className="text-sm font-medium hover-effect" onClick={(e) => { e.preventDefault(); navigateToSection('/articles') }}>
              ARTICLES
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/contact" className="text-sm font-medium hover-effect" onClick={(e) => { e.preventDefault(); navigateToSection('/contact') }}>
              CONTACT
            </Link>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="navbar-mobile md:hidden">
          <Link href="/" className="block text-sm font-medium text-gray-700" onClick={(e) => { e.preventDefault(); navigateToSection('/'); toggleMenu(); }}>HOME</Link>
          <Link href="/about" className="block text-sm font-medium text-gray-700" onClick={(e) => { e.preventDefault(); navigateToSection('/about'); toggleMenu(); }}>ABOUT</Link>
          <Link href="/services" className="block text-sm font-medium text-gray-700" onClick={(e) => { e.preventDefault(); navigateToSection('/services'); toggleMenu(); }}>SERVICES</Link>
          <Link href="/certificates" className="block text-sm font-medium text-gray-700" onClick={(e) => { e.preventDefault(); navigateToSection('/certificates'); toggleMenu(); }}>CERTIFICATES</Link>
          <Link href="/experience" className="block text-sm font-medium text-gray-700" onClick={(e) => { e.preventDefault(); navigateToSection('/experience'); toggleMenu(); }}>EXPERIENCE</Link>
          <Link href="/projects" className="block text-sm font-medium text-gray-700" onClick={(e) => { e.preventDefault(); navigateToSection('/projects'); toggleMenu(); }}>PROJECTS</Link>
          <Link href="/articles" className="block text-sm font-medium text-gray-700" onClick={(e) => { e.preventDefault(); navigateToSection('/articles'); toggleMenu(); }}>ARTICLES</Link>
          <Link href="/contact" className="block text-sm font-medium text-gray-700" onClick={(e) => { e.preventDefault(); navigateToSection('/contact'); toggleMenu(); }}>CONTACT</Link>
        </div>
      )}

    </nav>
  )
}
