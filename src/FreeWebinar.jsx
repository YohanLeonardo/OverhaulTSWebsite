import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Presentation, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'

const FreeWebinar = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-teal-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span>Request for a Free Webinar</span>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Request for a Free Webinar</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            TS memberikan layanan free webinar untuk tiga topik berikut.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Content */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Presentation className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Free Webinar Topics</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span className="text-gray-700">Process automation / RPA</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span className="text-gray-700">Data analytics, Machine Learning dan AI</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                    <span className="text-gray-700">Corporate digital transformation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-0 rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  Korporasi/ organisasi peminat dapat mengisi form Permintaan Free Webinar. Sebelum pelaksanaan free webinar TS akan kontak Anda untuk mempertajam kebutuhan Anda agar TS dapat memenuhinya sesuai permintaan, termasuk waktu yang dimintakan.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right: Application Form */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-white">
                <h2 className="text-xl font-bold">Permintaan Free Webinar</h2>
                <p className="text-teal-100">Silakan isi form di bawah ini</p>
              </div>
              <CardContent className="p-0">
                <div className="p-1">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSevAoPiF6pc6QED8RyySHYGtqDSpe7TZIKVdDkrD7Od7f3ABw/viewform?embedded=true"
                    width="100%"
                    height="1000px"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Free Webinar Request Form"
                    className="rounded-b-2xl"
                  >
                    Loading...
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FreeWebinar


