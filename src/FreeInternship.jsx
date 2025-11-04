import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, 
  Users, 
  Target, 
  GraduationCap, 
  Briefcase,
  Code,
  TrendingUp,
  CheckCircle,
  FileText
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import growThroughUsImage from './assets/grow-through-us.jpg'

const FreeInternship = () => {
  const programAreas = [
    { icon: Users, title: 'Human resource management' },
    { icon: TrendingUp, title: 'Marketing and commerce' },
    { icon: Code, title: 'Data science' },
    { icon: Briefcase, title: 'Process automation' },
    { icon: Target, title: 'Build and grow start-up business' },
    { icon: GraduationCap, title: 'Software development lifecycle (software engineering)' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-teal-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Free Internship Program</span>
        </div>
      </div>

      {/* Header Section with Gradient Banner */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 hover:bg-white/30">
              Grow Through Us
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Free Internship Program
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              TalentSource opens internship and on-the-job experience programs
              for students and young professionals. This is an ideal 'on-boarding' program 
              for participants before joining any real activities and career in life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Introduction Card */}
              <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-teal-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Real Projects, Real Experience
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Participants will be assigned a real project with real targets; 
                    all will be done digitally and an experienced mentor where real-life 
                    experience will become a unique precious value.
                  </p>
                </CardContent>
              </Card>

              {/* Image Section */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={growThroughUsImage}
                  alt="Grow Through Us"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Program Areas */}
              <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Available Program Areas
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Various professional areas, ranging from specific skill until
                    more managerial, are available in this 'Grow Through Us' program
                    which all related to digital knowledge and skill such as:
                  </p>
                  <div className="grid sm:grid-cols-1 gap-4">
                    {programAreas.map((area, index) => {
                      const Icon = area.icon
                      return (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-teal-600" />
                          </div>
                          <p className="text-gray-700 font-medium pt-2">
                            {area.title}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Program Benefits */}
              <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-0 rounded-2xl shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Program Benefits
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Participants can exercise its maximum capacity and develop its
                        early stage of its professional strength through this honest and
                        helpful no-nonsense program which is unique to TS.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Participants maintain its full freedom not to join TS after the 
                        program and pursue its career in other opportunity. Those who 
                        perform and decide to join TS group business are also welcome.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Depending on the volume of participants' interest, if required,
                        TS will get more industry experienced senior volunteers,
                        including those who work in global companies in Indonesia, to
                        spare their time and energy to provide mentorship service to
                        this program.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-r from-teal-600 to-blue-600 border-0 rounded-2xl shadow-xl">
                <CardContent className="p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <GraduationCap className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">
                      Ready to Start Your Journey?
                    </h2>
                  </div>
                  <p className="text-xl text-teal-100 mb-6 leading-relaxed">
                    Let TalentSource be your reliable support to get into the real
                    journey of your life!
                  </p>
                  <p className="text-teal-100 leading-relaxed">
                    Interested students and fresh graduate (S1 and S2) may apply for
                    the programs by notifying us via our chat and email contacts AND
                    complete the following Application Form.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Application Form */}
            <div className="lg:sticky lg:top-8">
              <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <FileText className="h-6 w-6" />
                    <h3 className="text-xl font-bold">
                      Application Form
                    </h3>
                  </div>
                  <p className="text-teal-100">
                    Complete the form below to apply for our Free Internship Program
                  </p>
                </div>

                <CardContent className="p-0">
                  <div className="p-1">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeaJEZQk4lfmKacshnVV5vNoWtuwj2wOnc2Ab-2hg8BxtsV_w/viewform?embedded=true"
                      width="100%"
                      height="1000px"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Free Internship Application Form"
                      className="rounded-b-2xl"
                    >
                      Loading...
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FreeInternship
