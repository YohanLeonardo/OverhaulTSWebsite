import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../../../components/ui/card'
import { CheckCircle, ChevronRight } from 'lucide-react'
import tujuhSembilanLogo from '../../../assets/tujuh-sembilan-logo.png'
import ioteraLogo from '../../../assets/logo_iotera.jpg'


const CorporatePartners = () => {
  const partnershipCriteria = [
    {
      id: 1,
      text: 'can complement TS in order to achieve its vision statement',
    },
    {
      id: 2,
      text: 'Located in Indonesia, most preferably in Bandung',
    },
    {
      id: 3,
      text: 'Young and vibrant company or startup',
    },
    {
      id: 4,
      text: 'Believe and fully aligned to TS mission statement',
    },
  ]

  const partners = [
    {
      id: 'tujuh-sembilan',
      logo: tujuhSembilanLogo,
      description:
        'In December 2019, TS sealed-in a strategic long-term partnership agreement with a vibrant high performing digital service start-up in Bandung which strategically combine the complementing resources of the two companies',
      establishedDate: 'December 2019',
      partnershipType: 'Strategic Long-term Partnership',
    },
    {
      id: 'iotera',
      logo: ioteraLogo,
      description: 'Partnership for turnkey projects, covering systems and subsystems, utilizing IoT technology for various industries',
      establishedDate: 'August 2023',
      partnershipType: 'Strategic Technical and Business Partnership',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-teal-600">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/corporate-partners" className="hover:text-teal-600">
            About Us
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Corporate Partners</span>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Corporate Partners
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Strategic partnerships that drive innovation and excellence in
              digital transformation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-4">
          {/* Left Column - Partnership Criteria */}
          <div>
            <Card className="bg-white shadow-lg border-0 h-fit">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  TS has standing partnership agreement with company which:
                </h2>

                <div className="space-y-6">
                  {partnershipCriteria.map((criteria) => (
                    <div
                      key={criteria.id}
                      className="flex items-start space-x-4"
                    >
                      {/* --- REPLACED BULLET WITH SVG ICON --- */}
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {criteria.text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Partner Showcase */}
          <div className='h-fit'>
            {partners.map((partner) => (
              <Card key={partner.id} className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  {/* Partner Logo and Name */}
                  <div className="text-center mb-8">
                    <div className="mb-6">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-20 mx-auto object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      {partner.tagline}
                    </p>
                  </div>

                  {/* Partnership Details */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Partnership Type
                      </h4>
                      <p className="text-gray-700">{partner.partnershipType}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Established
                      </h4>
                      <p className="text-gray-700">{partner.establishedDate}</p>
                    </div>
                  </div>

                  {/* Partnership Description */}
                  <div className="mt-6 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-700 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Benefits Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-teal-600 to-blue-700 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Strategic Partnership Benefits
              </h2>
              <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
                Our corporate partnerships enable us to deliver comprehensive
                digital transformation solutions by combining complementary
                expertise, resources, and innovative approaches to meet our
                clients' evolving needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CorporatePartners
