import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault()
        setIsMenuOpen(false)
        setIsDropdownOpen(false)

        // Find the target section by id
        const targetSection = document.getElementById(id)
        if (targetSection) {
            // Smooth scroll to the section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    const getLinkClass = (id: string) => {
        return `text-sm font-medium hover-effect`;
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <a href="#home" className="text-2xl font-bold" onClick={(e) => handleNavClick(e, 'home')}>Fnilvuwu</a>

                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-1">
                        <a href="#home" className={getLinkClass('home')} onClick={(e) => handleNavClick(e, 'home')}>
                            HOME
                        </a>
                    </div>
                    <div className="flex items-center space-x-1">
                        <a href="#about" className={getLinkClass('about')} onClick={(e) => handleNavClick(e, 'about')}>
                            ABOUT
                        </a>
                    </div>
                    <div className="flex items-center space-x-1">
                        <a href="#services" className={getLinkClass('services')} onClick={(e) => handleNavClick(e, 'services')}>
                            SERVICES
                        </a>
                    </div>
                    <div
                        className="relative flex items-center space-x-1 cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        <span
                            className="text-sm font-medium"
                            style={{ userSelect: "none" }}
                        >
                            PORTFOLIO
                        </span>
                        <ChevronDown className="h-4 w-4" />
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 ps-2 pe-4 bg-white rounded-md shadow-lg border border-gray-100">
                                <a href="#certificates" className="block my-2 text-sm font-medium hover-effect" onClick={(e) => handleNavClick(e, 'certificates')}>
                                    CERTIFICATES
                                </a>
                                <a href="#experience" className="block my-2 text-sm font-medium hover-effect" onClick={(e) => handleNavClick(e, 'experience')}>
                                    EXPERIENCE
                                </a>
                                <a href="#projects" className="block my-2 text-sm font-medium hover-effect" onClick={(e) => handleNavClick(e, 'projects')}>
                                    PROJECTS
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center space-x-1">
                        <a href="#articles" className={getLinkClass('articles')} onClick={(e) => handleNavClick(e, 'articles')}>
                            ARTICLES
                        </a>
                    </div>
                    <div className="flex items-center space-x-1">
                        <a href="#contact" className={getLinkClass('contact')} onClick={(e) => handleNavClick(e, 'contact')}>
                            CONTACT
                        </a>
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="navbar-mobile md:hidden bg-white absolute top-full left-0 right-0 p-4 shadow-md">
                    <a href="#home" className="block py-2 text-sm font-medium text-gray-700 text-center" onClick={(e) => handleNavClick(e, 'home')}>HOME</a>
                    <a href="#about" className="block py-2 text-sm font-medium text-gray-700 text-center" onClick={(e) => handleNavClick(e, 'about')}>ABOUT</a>
                    <a href="#services" className="block py-2 text-sm font-medium text-gray-700 text-center" onClick={(e) => handleNavClick(e, 'services')}>SERVICES</a>
                    <div className="text-center">
                        <span className="block py-2 text-sm font-medium text-gray-900">PORTFOLIO</span>
                        <a href="#certificates" className="block py-2 text-sm font-medium text-gray-600" onClick={(e) => handleNavClick(e, 'certificates')}>CERTIFICATES</a>
                        <a href="#experience" className="block py-2 text-sm font-medium text-gray-600" onClick={(e) => handleNavClick(e, 'experience')}>EXPERIENCE</a>
                        <a href="#projects" className="block py-2 text-sm font-medium text-gray-600" onClick={(e) => handleNavClick(e, 'projects')}>PROJECTS</a>
                    </div>
                    <a href="#articles" className="block py-2 text-sm font-medium text-gray-700 text-center" onClick={(e) => handleNavClick(e, 'articles')}>ARTICLES</a>
                    <a href="#contact" className="block py-2 text-sm font-medium text-gray-700 text-center" onClick={(e) => handleNavClick(e, 'contact')}>CONTACT</a>
                </div>
            )}

        </nav>
    )
}

