'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchPanel from '@/components/ui/SearchPanel';
import Image from "next/image";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchPanelOpen, setSearchPanelOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
    const [scrolled, setScrolled] = useState(false);

    // Track scroll position for header effects
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (id: string) => {
        setOpenDropdowns(prevState =>
            prevState.includes(id)
                ? prevState.filter(item => item !== id)
                : [...prevState, id]
        );
    };

    const isDropdownOpen = (id: string) => openDropdowns.includes(id);

    const closeAllDropdowns = () => {
        setOpenDropdowns([]);
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
                ? 'bg-white shadow-md py-2'
                : 'bg-gradient-to-r from-teal-50 to-white py-4'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo and site title with animation */}
                    <div className="flex items-center group">
                        <Link href="/" className="flex items-center">
                            <div className="relative">
                                <Image
                                    src="/cont-logo.png"
                                    alt="ContigoU Logo"
                                    width="140" height="60"
                                    className={` transition-all duration-300 `}
                                />
                                <p className="text-gray-600 text-xs hidden sm:block transition-opacity duration-300 hover:text-teal-600">
                                    Connecting Patients to Healthcare Solutions
                                </p>
                                <div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-orange-400 group-hover:w-full transition-all duration-300"></div>
                            </div>
                            <div className="ml-3">

                            </div>
                        </Link>
                    </div>

                    {/* Desktop navigation with hover effects and dropdowns */}
                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center space-x-6">
                            {/* Main nav links with hover underline effect */}
                            <div className="group relative">
                                <Link href="/about" className="text-gray-700 hover:text-teal-600 py-2 relative">
                                    About us
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </div>

                            <div className="group relative">
                                <Link href="/how-it-works" className="text-gray-700 hover:text-teal-600 py-2 relative">
                                    How it Works
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </div>

                            {/* Services with dropdown */}
                            <div className="group relative" onMouseLeave={() => closeAllDropdowns()}>
                                <button
                                    className="text-gray-700 hover:text-teal-600 py-2 flex items-center gap-1 relative"
                                    onMouseEnter={() => toggleDropdown('services')}
                                >
                                    Services
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                                </button>

                                {/* Services dropdown */}
                                <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ${
                                    isDropdownOpen('services')
                                        ? 'opacity-100 transform translate-y-0 max-h-96'
                                        : 'opacity-0 transform -translate-y-4 max-h-0 pointer-events-none'
                                }`}>
                                    <div className="p-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium">
                                        Our Services
                                    </div>
                                    <div className="py-2">
                                        <Link href="/inpatient" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                                            Inpatient Rehabilitation
                                        </Link>
                                        <Link href="/outpatient" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                                            Outpatient Services
                                        </Link>
                                        <Link href="/telehealth" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                                            Telehealth Consultations
                                        </Link>
                                        <Link href="/all-services" className="block px-4 py-2 text-teal-600 font-medium hover:bg-teal-50 transition-colors">
                                            View All Services →
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative">
                                <Link href="/contact-us" className="text-gray-700 hover:text-teal-600 py-2 relative">
                                    Contact Us
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </div>

                            {/* CTA Buttons with enhanced styling */}
                            <Link href="/partner" className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-md hover:shadow-md hover:from-teal-600 hover:to-teal-700 transition-all transform hover:-translate-y-0.5">
                                Partner with ContigoU
                            </Link>
                            <Link href="/login" className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-md hover:shadow-md hover:from-orange-500 hover:to-orange-600 transition-all transform hover:-translate-y-0.5">
                                Login
                            </Link>
                            <Link href="/signup" className="border-2 border-teal-500 text-teal-600 font-medium px-4 py-1.5 rounded-md hover:bg-teal-50 transition-colors transform hover:-translate-y-0.5 hover:shadow-sm">
                                Sign Up
                            </Link>
                        </nav>

                        {/* Search button with animation */}
                        <button
                            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-2 rounded-full hover:shadow-md hover:from-orange-500 hover:to-orange-600 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            onClick={() => setSearchPanelOpen(!searchPanelOpen)}
                            aria-label="Search"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile menu button with improved design */}
                    <div className="flex md:hidden items-center space-x-3">
                        <button
                            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-2 rounded-full hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-orange-300"
                            onClick={() => setSearchPanelOpen(!searchPanelOpen)}
                            aria-label="Search"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button
                            className="text-gray-700 p-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileMenuOpen ? (
                                <svg className="h-6 w-6 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Enhanced Search panel */}
                {searchPanelOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-4 transition-all duration-300 animate-fadeDown">
                        <SearchPanel />
                    </div>
                )}

                {/* Enhanced Mobile menu with animations and better organization */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 animate-fadeDown">
                        <nav className="flex flex-col space-y-3">
                            <Link href="/about" className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-2 py-2 rounded-md transition-colors">
                                About us
                            </Link>
                            <Link href="/how-it-works" className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-2 py-2 rounded-md transition-colors">
                                How it Works
                            </Link>

                            {/* Mobile dropdown for Services */}
                            <div className="py-1">
                                <button
                                    className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-2 py-2 rounded-md transition-colors"
                                    onClick={() => toggleDropdown('mobile-services')}
                                >
                                    <span>Services</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-4 w-4 transition-transform ${isDropdownOpen('mobile-services') ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`mt-1 overflow-hidden transition-all duration-300 ${
                                    isDropdownOpen('mobile-services')
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}>
                                    <Link href="/inpatient" className="block p-2 pl-6 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors">
                                        Inpatient Rehabilitation
                                    </Link>
                                    <Link href="/outpatient" className="block p-2 pl-6 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors">
                                        Outpatient Services
                                    </Link>
                                    <Link href="/telehealth" className="block p-2 pl-6 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors">
                                        Telehealth Consultations
                                    </Link>
                                    <Link href="/all-services" className="block p-2 pl-6 text-teal-600 font-medium hover:bg-teal-50 rounded-md transition-colors">
                                        View All Services →
                                    </Link>
                                </div>
                            </div>

                            <Link href="/contact-us" className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-2 py-2 rounded-md transition-colors">
                                Contact Us
                            </Link>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-1"></div>

                            {/* CTA buttons with better styling */}
                            <Link href="/partner" className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-md hover:shadow-md transition-all text-center">
                                Partner with ContigoU
                            </Link>
                            <Link href="/login" className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-md hover:shadow-md transition-all text-center">
                                Login
                            </Link>
                            <Link href="/signup" className="border-2 border-teal-500 text-teal-600 font-medium px-4 py-1.5 rounded-md hover:bg-teal-50 transition-colors text-center">
                                Sign Up
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}