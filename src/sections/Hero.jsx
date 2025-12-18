import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, ArrowRight } from 'lucide-react'
import heroBg from '../assets/hero-bg.jpg'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-teal-600/20 text-teal-300 border-teal-600/30 mb-6">
              Indonesian Digital Transformation Experts
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Indonesian Companies Through
              <span className="text-teal-400"> Digital Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are the Indonesian Process Automation / RPA hands-on experts
              with comprehensive services combining talent development,
              consulting, and hands-on projects to drive your digitalization
              agenda forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3"
                >
                  Start Your Digital Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-slate-900 bg-white hover:bg-gray-200 px-8 py-3"
                onClick={() => {
                  document.getElementById('track-record')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
              >
                View Our Track Record
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-teal-300">
                  Our Value Proposition
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-400 mr-3" />
                    <span>
                      Deep understanding of Indonesian business culture
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-400 mr-3" />
                    <span>Fully customized programs for each client</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-400 mr-3" />
                    <span>24/7 digital coaching and mentoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-400 mr-3" />
                    <span>Hands-on project implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
