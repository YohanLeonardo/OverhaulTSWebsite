import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import {
    Menu,
    X,
    ChevronDown,
    MapPin,
    Mail,
    Phone,
    Linkedin,
    Instagram,
} from 'lucide-react'
import './styles/App.css'
import logo from './assets/logo-new.png'
import HomePage from './about_files/pages/HomePage'
import CompanyProfile from './about_files/pages/about/CompanyProfile'
import StandingPartners from './about_files/pages/about/StandingPartners'
import CorporatePartners from './about_files/pages/about/CorporatePartners'
import Service from './Services'
import FreeInternship from './FreeInternship'
import WhatsAppPopup from './WhatsappPopup'
import EducationSupport from './EducationSupport'
import CaseStudies from './sections/CaseStudies'
import { OpEd } from './sections/OpEd'
import FreeWebinar from './FreeWebinar'
import LiveStreamConsultation from './LiveStreamConsultation'
import ArticlePage from './ArticlePage'

// Custom hook to scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
    const [isCaseDropdownOpen, setIsCaseDropdownOpen] = useState(false)
    const [isWebinarDropdownOpen, setIsWebinarDropdownOpen] = useState(false)

    const aboutRef = useRef(null)
    const caseRef = useRef(null)
    const webinarRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (aboutRef.current && !aboutRef.current.contains(event.target)) {
                setIsAboutDropdownOpen(false)
            }
            if (caseRef.current && !caseRef.current.contains(event.target)) {
                setIsCaseDropdownOpen(false)
            }
            if (
                webinarRef.current &&
                !webinarRef.current.contains(event.target)
            ) {
                setIsWebinarDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // --- Handle WhatsApp Click ---
    const handleScheduleConsultation = () => {
        const fixedPhoneNumber = '6281770237849'
        const message =
            'Halo, saya ingin menjadwalkan konsultasi bisnis dengan TalentSource.'

        const whatsappUrl = `https://wa.me/${fixedPhoneNumber}?text=${encodeURIComponent(
            message
        )}`

        window.open(whatsappUrl, '_blank')
    }
    // -----------------------------------------

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link to="/" className="cursor-pointer">
                                <img
                                    src={logo}
                                    alt="TalentSource"
                                    className="h-12 w-auto hover:opacity-80 transition-opacity"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden xl:block">
                            <div className="ml-10 flex items-baseline space-x-6">
                                {/* About Us Dropdown */}
                                <div className="relative" ref={aboutRef}>
                                    <button
                                        onClick={() =>
                                            setIsAboutDropdownOpen(
                                                !isAboutDropdownOpen
                                            )
                                        }
                                        className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center"
                                    >
                                        About Us
                                        <ChevronDown
                                            className={`ml-1 h-4 w-4 transition-transform ${
                                                isAboutDropdownOpen
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isAboutDropdownOpen && (
                                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                                            <Link
                                                to="/company-profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                                                onClick={() =>
                                                    setIsAboutDropdownOpen(
                                                        false
                                                    )
                                                }
                                            >
                                                Company Profile
                                            </Link>
                                            <Link
                                                to="/standing-partners"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                                                onClick={() =>
                                                    setIsAboutDropdownOpen(
                                                        false
                                                    )
                                                }
                                            >
                                                Standing Partners
                                            </Link>
                                            <Link
                                                to="/corporate-partners"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                                                onClick={() =>
                                                    setIsAboutDropdownOpen(
                                                        false
                                                    )
                                                }
                                            >
                                                Corporate Partners
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <Link
                                    to="/services"
                                    className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                                >
                                    Services
                                </Link>

                                {/* Case Studies & Op-Ed Dropdown */}
                                <div className="relative" ref={caseRef}>
                                    <button
                                        onClick={() =>
                                            setIsCaseDropdownOpen(
                                                !isCaseDropdownOpen
                                            )
                                        }
                                        className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center"
                                    >
                                        Case Studies & Op-Ed
                                        <ChevronDown
                                            className={`ml-1 h-4 w-4 transition-transform ${
                                                isCaseDropdownOpen
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>
                                    {isCaseDropdownOpen && (
                                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                                            <Link
                                                to="/case-studies"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                                                onClick={() =>
                                                    setIsCaseDropdownOpen(false)
                                                }
                                            >
                                                Case Studies
                                            </Link>
                                            <Link
                                                to="/op-ed"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                                                onClick={() =>
                                                    setIsCaseDropdownOpen(false)
                                                }
                                            >
                                                Op-Ed
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Free Webinar & Live Consultation Dropdown */}
                                <div className="relative" ref={webinarRef}>
                                    <button
                                        onClick={() =>
                                            setIsWebinarDropdownOpen(
                                                !isWebinarDropdownOpen
                                            )
                                        }
                                        className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center"
                                    >
                                        Free Webinar & Live Consultation
                                        <ChevronDown
                                            className={`ml-1 h-4 w-4 transition-transform ${
                                                isWebinarDropdownOpen
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>

                                    {isWebinarDropdownOpen && (
                                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                                            <Link
                                                to="/free-webinar"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                                                onClick={() =>
                                                    setIsWebinarDropdownOpen(
                                                        false
                                                    )
                                                }
                                            >
                                                Free Webinar
                                            </Link>
                                            <Link
                                                to="/live-stream-consultation"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                                                onClick={() =>
                                                    setIsWebinarDropdownOpen(
                                                        false
                                                    )
                                                }
                                            >
                                                Live Stream Consultation
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <Link
                                    to="/free-internship"
                                    className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                                >
                                    Free Internship
                                </Link>
                                <Link
                                    to="/education-support"
                                    className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                                >
                                    Education Support
                                </Link>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="xl:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="xl:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {/* About Us Mobile Dropdown */}
                            <div className="space-y-1">
                                <div className="text-gray-800 font-medium px-3 py-2 text-base">
                                    About Us
                                </div>
                                <Link
                                    to="/company-profile"
                                    className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Company Profile
                                </Link>
                                <Link
                                    to="/standing-partners"
                                    className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Standing Partners
                                </Link>
                                <Link
                                    to="/corporate-partners"
                                    className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Corporate Partners
                                </Link>
                            </div>

                            <Link
                                to="/services"
                                className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            {/* Case Studies & Op-Ed mobile */}
                            <div className="space-y-1">
                                <div className="text-gray-800 font-medium px-3 py-2 text-base">
                                    Case Studies & Op-Ed
                                </div>
                                <Link
                                    to="/case-studies"
                                    className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Case Studies
                                </Link>
                                <Link
                                    to="/op-ed"
                                    className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Op-Ed
                                </Link>
                            </div>
                            {/* Free Webinar & Live Consultation mobile */}
                            <div className="space-y-1">
                                <div className="text-gray-800 font-medium px-3 py-2 text-base">
                                    Free Webinar & Live Consultation
                                </div>
                                <Link
                                    to="/free-webinar"
                                    className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Free Webinar
                                </Link>
                                <Link
                                    to="/live-stream-consultation"
                                    className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Live Stream Consultation
                                </Link>
                            </div>
                            <Link
                                to="/free-internship"
                                className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Free Internship
                            </Link>
                            <Link
                                to="/education-support"
                                className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Education Support
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content with Routing */}
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/company-profile" element={<CompanyProfile />} />
                <Route
                    path="/standing-partners"
                    element={<StandingPartners />}
                />
                <Route
                    path="/corporate-partners"
                    element={<CorporatePartners />}
                />
                <Route path="/services" element={<Service />} />
                <Route path="/free-internship" element={<FreeInternship />} />
                <Route
                    path="/education-support"
                    element={<EducationSupport />}
                />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/op-ed" element={<OpEd />} />
                <Route path="/op-ed/:articleId" element={<ArticlePage />} />
                <Route path="/free-webinar" element={<FreeWebinar />} />
                <Route
                    path="/live-stream-consultation"
                    element={<LiveStreamConsultation />}
                />
            </Routes>

            {/* CTA Section - Only show on homepage */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                    Ready to Transform Your Business?
                                </h2>
                                <p className="text-xl mb-8 max-w-2xl mx-auto">
                                    Let's discuss how we can help accelerate
                                    your digital transformation journey with our
                                    proven expertise and local insights.
                                </p>
                                <div className="flex justify-center">
                                    <Button
                                        size="lg"
                                        className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3"
                                        onClick={handleScheduleConsultation}
                                    >
                                        Schedule a Consultation
                                    </Button>
                                </div>
                            </div>
                        </section>
                    }
                />
            </Routes>

            {/* UPDATED FOOTER */}
            <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Brand Info */}
                        <div className="lg:col-span-2 space-y-4">
                            <img
                                src={logo}
                                alt="TalentSource"
                                className="h-10 w-auto mb-6"
                            />
                            <p className="text-gray-400 leading-relaxed max-w-sm">
                                Empowering Indonesian companies through digital
                                transformation, RPA, and talent development.
                            </p>
                            <p className="text-gray-500 text-sm max-w-sm">
                                Providing unique professional services to telco,
                                cellular, and IT service companies in Indonesia.
                            </p>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white">
                                Company
                            </h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <Link
                                        to="/company-profile"
                                        className="hover:text-teal-400 transition-colors"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/case-studies"
                                        className="hover:text-teal-400 transition-colors"
                                    >
                                        Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/free-webinar"
                                        className="hover:text-teal-400 transition-colors"
                                    >
                                        Free Webinar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/free-internship"
                                        className="hover:text-teal-400 transition-colors"
                                    >
                                        Internship Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/education-support"
                                        className="hover:text-teal-400 transition-colors"
                                    >
                                        Education Support
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us - NEW SECTION */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white">
                                Contact Us
                            </h3>
                            <ul className="space-y-4 text-gray-400">
                                {/* Address */}
                                <li className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                                    <span className="leading-relaxed">
                                        Jl. Profesor Eyckman No. 28 Pavillion,
                                        <br />
                                        Bandung 40161
                                    </span>
                                </li>

                                {/* Email */}
                                <li className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                    <a
                                        href="mailto:contact@bandungtalentsource.com"
                                        className="hover:text-teal-400 transition-colors break-all"
                                    >
                                        contact@bandungtalentsource.com
                                    </a>
                                </li>

                                {/* Phone Numbers */}
                                <li className="flex items-start space-x-3">
                                    <Phone className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                                    <div className="flex flex-col space-y-1">
                                        {/* Landline */}
                                        <a
                                            href="tel:+622282068001"
                                            className="hover:text-teal-400 transition-colors"
                                        >
                                            +62-22-82068001
                                        </a>
                                        {/* Mobile/WA */}
                                        <a
                                            href="https://wa.me/6281770237849"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:text-teal-400 transition-colors"
                                        >
                                            +62 817 7023 7849
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="border-t border-slate-800 mt-12 pt-8 flex justify-center items-center text-sm text-gray-500">
                        <p>
                            &copy; 2026 Bandung TalentSource. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
            <WhatsAppPopup />
        </div>
    )
}

export default App
