import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import {
  Menu,
  X,
  ChevronDown,
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
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
      if (webinarRef.current && !webinarRef.current.contains(event.target)) {
        setIsWebinarDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // --- FUNGSI BARU: Handle WhatsApp Click ---
  const handleScheduleConsultation = () => {
    const fixedPhoneNumber = '6281770237849' // Nomor yang sama dengan WhatsAppPopup
    const message = 'Halo, saya ingin menjadwalkan konsultasi bisnis dengan TalentSource.' // Pesan default
    
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
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center"
                  >
                    About Us
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        isAboutDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isAboutDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                      <Link
                        to="/company-profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        onClick={() => setIsAboutDropdownOpen(false)}
                      >
                        Company Profile
                      </Link>
                      <Link
                        to="/standing-partners"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        onClick={() => setIsAboutDropdownOpen(false)}
                      >
                        Standing Partners
                      </Link>
                      <Link
                        to="/corporate-partners"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        onClick={() => setIsAboutDropdownOpen(false)}
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

                {/* Case Studies & Op-Ed Dropdown (click-to-toggle) */}
                <div className="relative" ref={caseRef}>
                  <button
                    onClick={() => setIsCaseDropdownOpen(!isCaseDropdownOpen)}
                    className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center"
                  >
                    Case Studies & Op-Ed
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        isCaseDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isCaseDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                      <Link
                        to="/case-studies"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        onClick={() => setIsCaseDropdownOpen(false)}
                      >
                        Case Studies
                      </Link>
                      <Link
                        to="/op-ed"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        onClick={() => setIsCaseDropdownOpen(false)}
                      >
                        Op-Ed
                      </Link>
                    </div>
                  )}
                </div>

                {/* Free Webinar & Live Consultation Dropdown */}
                <div className="relative" ref={webinarRef}>
                  <button
                    onClick={() => setIsWebinarDropdownOpen(!isWebinarDropdownOpen)}
                    className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center"
                  >
                    Free Webinar & Live Consultation
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        isWebinarDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isWebinarDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                      <Link
                        to="/free-webinar"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        onClick={() => setIsWebinarDropdownOpen(false)}
                      >
                        Free Webinar
                      </Link>
                      <Link
                        to="/live-stream-consultation"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        onClick={() => setIsWebinarDropdownOpen(false)}
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
                <div className="text-gray-800 font-medium px-3 py-2 text-base">Case Studies & Op-Ed</div>
                <Link to="/case-studies" className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
                <Link to="/op-ed" className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm" onClick={() => setIsMenuOpen(false)}>Op-Ed</Link>
              </div>
              {/* Free Webinar & Live Consultation mobile */}
              <div className="space-y-1">
                <div className="text-gray-800 font-medium px-3 py-2 text-base">Free Webinar & Live Consultation</div>
                <Link to="/free-webinar" className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm" onClick={() => setIsMenuOpen(false)}>Free Webinar</Link>
                <Link to="/live-stream-consultation" className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm" onClick={() => setIsMenuOpen(false)}>Live Stream Consultation</Link>
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
        <Route path="/standing-partners" element={<StandingPartners />} />
        <Route path="/corporate-partners" element={<CorporatePartners />} />
        <Route path="/services" element={<Service />} />
        <Route path="/free-internship" element={<FreeInternship />} />
        <Route path="/education-support" element={<EducationSupport />} />
        <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/op-ed" element={<OpEd />} />
            <Route path="/op-ed/:articleId" element={<ArticlePage />} />
        <Route path="/free-webinar" element={<FreeWebinar />} />
        <Route path="/live-stream-consultation" element={<LiveStreamConsultation />} />
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
                  Let's discuss how we can help accelerate your digital
                  transformation journey with our proven expertise and local
                  insights.
                </p>
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3"
                    onClick={handleScheduleConsultation} // FUNGSI DITAMBAHKAN DISINI
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </section>
          }
        />
      </Routes>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <img src={logo} alt="TalentSource" className="h-10 w-auto mb-4" />
              <p className="text-gray-400 mb-4">
                Empowering Indonesian companies through digital transformation,
                RPA, and talent development.
              </p>
              <p className="text-gray-400 text-sm">
                Providing unique professional services to telco, cellular, and
                IT service companies in Indonesia.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/company-profile" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/free-webinar" className="hover:text-white transition-colors">
                    Free Webinar
                  </Link>
                </li>
                <li>
                  <Link to="/free-internship" className="hover:text-white transition-colors">
                    Internship Program
                  </Link>
                </li>
                <li>
                  <Link to="/education-support" className="hover:text-white transition-colors">
                    Education Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Bandung TalentSource. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <WhatsAppPopup />
    </div>
  )
}

export default App