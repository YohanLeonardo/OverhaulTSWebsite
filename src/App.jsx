import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Settings,
  Brain,
  Smartphone,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'
import './styles/App.css'
import logo from './assets/logo-new.png';
import Hero from './sections/Hero';
import About from './sections/About';
import TrackRecord from './sections/TrackRecord';
import Clients from './sections/Clients';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ServicesPage from './Services';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="cursor-pointer">
                  <img src={logo} alt="TalentSource" className="h-12 w-auto hover:opacity-80 transition-opacity" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden xl:block">
                <div className="ml-10 flex items-baseline space-x-6">
                  <Link to="/#about" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">About Us</Link>
                  <Link to="/services" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Services</Link>
                  <Link to="/#track-record" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Case Studies & Op-Ed</Link>
                  <Link to="/#webinar" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Free Webinar & Live Consultation</Link>
                  <Link to="/#internship" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Free Internship</Link>
                  <Link to="/#education" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Education Support</Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="xl:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="xl:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link to="/#about" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">About Us</Link>
                <Link to="/services" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">Services</Link>
                <Link to="/#track-record" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">Case Studies & Op-Ed</Link>
                <Link to="/#webinar" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">Free Webinar & Live Consultation</Link>
                <Link to="/#internship" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">Free Internship</Link>
                <Link to="/#education" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">Education Support</Link>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <TrackRecord />
              <Clients />
            </>
          } />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help accelerate your digital transformation journey with our proven expertise and local insights.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <img src={logo} alt="TalentSource" className="h-10 w-auto mb-4" />
                <p className="text-gray-400 mb-4">
                  Empowering Indonesian companies through digital transformation, RPA, and talent development.
                </p>
                <p className="text-gray-400 text-sm">
                  Providing unique professional services to telco, cellular, and IT service companies in Indonesia.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/services" className="hover:text-white transition-colors">RPA & Automation</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Data Science & AI</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Mobile Development</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Talent Development</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Digital Strategy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/#track-record" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link to="/#webinar" className="hover:text-white transition-colors">Free Webinar</Link></li>
                  <li><Link to="/#internship" className="hover:text-white transition-colors">Internship Program</Link></li>
                  <li><Link to="/#education" className="hover:text-white transition-colors">Education Support</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Bandung TalentSource. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
