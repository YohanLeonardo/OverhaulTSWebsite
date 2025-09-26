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
import Services from './sections/Services';
import TrackRecord from './sections/TrackRecord';
import Clients from './sections/Clients';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#home" className="cursor-pointer">
                <img src={logo} alt="TalentSource" className="h-12 w-auto hover:opacity-80 transition-opacity" />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden xl:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#about" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">About Us</a>
                <a href="#services" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Services</a>
                <a href="#track-record" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Case Studies & Op-Ed</a>
                <a href="#webinar" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Free Webinar & Live Consultation</a>
                <a href="#internship" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Free Internship</a>
                <a href="#education" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Education Support</a>
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
              <a href="#about" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">About Us</a>
              <a href="#services" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">Services</a>
              <a href="#track-record" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">Case Studies & Op-Ed</a>
              <a href="#webinar" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">Free Webinar & Live Consultation</a>
              <a href="#internship" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">Free Internship</a>
              <a href="#education" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium">Education Support</a>
            </div>
          </div>
        )}
      </nav>

      <Hero />

      <About />

      <Services />

      <TrackRecord />

      <Clients />

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
                <li><a href="#" className="hover:text-white transition-colors">RPA & Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Science & AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Talent Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Strategy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Webinar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Internship Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Education Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bandung TalentSource. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

