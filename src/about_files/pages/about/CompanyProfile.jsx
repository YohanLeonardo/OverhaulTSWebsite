import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.jsx'
import {
  CheckCircle,
  Download,
  Users,
  Target,
  Award,
  Globe,
} from 'lucide-react'
import bannerImage from '../../../assets/banner-bts-03-opt.jpg'

const CompanyProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: '',
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleDownload = (e) => {
    e.preventDefault()
    // Deadlink for now - will connect to backend later
    console.log('Download requested with data:', formData)
    alert('Download functionality will be available soon!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Company Profile
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Learn about TalentSource - Indonesia's leading digital
              transformation partner
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Company Info */}
            <div className="space-y-8">
              {/* Banner Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={bannerImage}
                  alt="TalentSource Presentation"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Company Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  About TalentSource
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  TalentSource is truly Indonesian Consulting and Solution
                  company which comprises the Indonesian experienced and highly
                  knowledgeable partners with hands-on experience and most
                  recent techniques, ready to help companies/organizations in
                  Indonesia in their digital transformation journey.
                </p>

                {/* Key Features */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Local Expertise
                      </h4>
                      <p className="text-sm text-gray-600">
                        Deep understanding of Indonesian business culture
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Proven Track Record
                      </h4>
                      <p className="text-sm text-gray-600">
                        Successful projects with leading corporations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Latest Technology
                      </h4>
                      <p className="text-sm text-gray-600">
                        Cutting-edge RPA, AI, and automation solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Comprehensive Support
                      </h4>
                      <p className="text-sm text-gray-600">
                        End-to-end digital transformation services
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 border-0">
                  <CardContent className="p-0">
                    <Users className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900">15+</h3>
                    <p className="text-gray-600">Major Clients</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 border-0">
                  <CardContent className="p-0">
                    <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                    <p className="text-gray-600">Projects Completed</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 border-0">
                  <CardContent className="p-0">
                    <Award className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900">5+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Download Form */}
            <div className="lg:sticky lg:top-8">
              <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <Download className="h-6 w-6" />
                    <h3 className="text-xl font-bold">
                      Get the TS Company Profile
                    </h3>
                  </div>
                  <p className="text-teal-100">
                    Download our comprehensive company profile and learn more
                    about our services
                  </p>
                </div>

                <CardContent className="p-6">
                  <form onSubmit={handleDownload} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange('firstName', e.target.value)
                        }
                        placeholder="Enter your first name"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange('lastName', e.target.value)
                        }
                        placeholder="Enter your last name"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization *
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange('company', e.target.value)
                        }
                        placeholder="Enter your company name"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        placeholder="Enter your work email"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Country *
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange('country', value)
                        }
                        required
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="indonesia">Indonesia</SelectItem>
                          <SelectItem value="singapore">Singapore</SelectItem>
                          <SelectItem value="malaysia">Malaysia</SelectItem>
                          <SelectItem value="thailand">Thailand</SelectItem>
                          <SelectItem value="philippines">
                            Philippines
                          </SelectItem>
                          <SelectItem value="vietnam">Vietnam</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-3 text-lg font-semibold"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Company Profile
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      By downloading, you agree to receive communications from
                      TalentSource about our services and solutions.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Info Card */}
              <Card className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 border-0">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Need More Information?
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Contact our team for personalized consultation and detailed
                    discussions about your digital transformation needs.
                  </p>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompanyProfile
