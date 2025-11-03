import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, CheckCircle, Download } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.jsx'

const LiveStreamConsultation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: '',
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleDownload = (e) => {
    e.preventDefault()
    alert('Download flyer functionality will be available soon!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-teal-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span>Live Stream Consultation Service</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Live Stream Consultation Service</h1>
          <p className="text-xl text-teal-100 max-w-4xl mx-auto">
            Livestream consultation is our unique service that adopts the consultation session with independent professional like doctor, architect, lawyer and others.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The major differences of our livestream consultation with those consultation model are:</h2>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" /><span className="text-gray-700">Appointment is made a lot easier and interactive</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" /><span className="text-gray-700">Our session is more structured with clear points</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" /><span className="text-gray-700">Will be limited to two hours session segment</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" /><span className="text-gray-700">Can be team of TS consultants on max 15 participants</span></li>
                  <li className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" /><span className="text-gray-700">Dedicated sessions dealing your own issues and concerns only</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">TS memberikan layanan live stream consultation service untuk tiga topik berikut :</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Process automation / RPA</li>
                  <li>Data analytics, Machine Learning dan AI</li>
                  <li>Corporate digital transformation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-0 rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultation service ini disesuaikan dengan kebutuhan peminat tergantung posisinya saat ini pada masing masing ketiga topik diatas:</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Sedang akan memutuskan untuk menerapkan di organisasi / korporasi</li>
                  <li>Saat tahap implementasi</li>
                  <li>Sudah cukup advanced dalam implementasi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed">Program ini Sebagian juga untuk mendukung free internship program TS.</p>
                <div className="mt-6">
                  <p className="text-gray-900 font-semibold">Korporasi/ organisasi peminat dapat menyatakan minat melalui</p>
                  <p className="text-teal-700 font-semibold">contact@bandungtalentsource.com</p>
                  <p className="text-teal-700 font-semibold">WA : +62 812-210-1938</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Download Flyer Form */}
          <div className="lg:sticky lg:top-8">
            <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <Download className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Download Flyer</h3>
                </div>
                <p className="text-teal-100">Fill the form to download flyer</p>
              </div>
              <CardContent className="p-6">
                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                    <Input type="text" value={formData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                    <Input type="text" value={formData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} placeholder="Enter your last name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                    <Input type="text" value={formData.company} onChange={(e) => handleInputChange('company', e.target.value)} placeholder="Enter your company name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Work email</label>
                    <Input type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="Enter your work email" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Country</label>
                    <Select onValueChange={(value) => handleInputChange('country', value)} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indonesia">Indonesia</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="malaysia">Malaysia</SelectItem>
                        <SelectItem value="thailand">Thailand</SelectItem>
                        <SelectItem value="philippines">Philippines</SelectItem>
                        <SelectItem value="vietnam">Vietnam</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-3 text-lg font-semibold">
                    <Download className="mr-2 h-5 w-5" /> Download Flyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LiveStreamConsultation


