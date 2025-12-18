import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Users, Award, Briefcase, Star, ChevronRight } from 'lucide-react'

// Import partner images
import anasImage from '../../../assets/anas-pp-Small.png'
import indraImage from '../../../assets/indra-pp-Small.png'
import joeImage from '../../../assets/joe-pp-Small.png'
// import tataImage from '../../../assets/tata-pp-Small.png'
import bambangImage from '../../../assets/bambang-pp-Small.png'
import benawiImage from '../../../assets/Benawi-Santosa-pp-Small.png'
import suryatinImage from '../../../assets/Suryatin-pp-Small.png'

const StandingPartners = () => {
    const [hoveredPartner, setHoveredPartner] = useState(null)

    const partners = [
        {
            id: 'suryatin',
            name: 'Suryatin Setiawan',
            title: 'Senior Business & Management Consultant',
            image: suryatinImage,
            category: 'Business Strategy',
            achievements: [
                'Hands-on senior business and management consultant',
                'Experienced Business Leader in Indonesia telecommunications and IT industry',
                'Senior reputable expert and mentor in the industry',
                'Extensive experience in Mobile Service Business and Telco',
                'Organization Transformation specialist in digitalization',
                'Board of commissioner member of TelkomTelstra (Telkom Indonesia & Telstra Australia joint venture)',
                'Strong community and social service sense in education industry',
            ],
        },
        {
            id: 'bambang',
            name: 'Bambang Lusmiadi',
            title: 'Executive Leadership & Digital Transformation',
            image: bambangImage,
            category: 'Executive Leadership',
            achievements: [
                'Rich professional life across telecommunication industry milestones',
                'Career progression from multimedia engineer to top management positions',
                'Multi-industry experience: telecommunication, content media, digital services',
                'Healthcare service domain expertise as CEO of Telkomedika (Telkom subsidiary)',
                'Leadership in telephony to multimedia communication transition',
                'Cloud-based service industry experience',
                'Comprehensive knowledge in leadership, management, business and technology',
            ],
        },
        {
            id: 'benawi',
            name: 'Benawi Santosa',
            title: 'IoT & Instrumentation Systems Expert',
            image: benawiImage,
            category: 'Technology Innovation',
            achievements: [
                'Extensive career in telecommunication industry production and deployment',
                'Expert in microwave transmission networks and satellite communication systems',
                'Specialist in Programmable Logic Controller (PLC) and embedded controllers',
                'Hardware and software development in instrumentation industries',
                'SCADA (Supervisory Control and Data Acquisition) systems expert',
                '5+ years designing and delivering Internet of Things systems',
                'Cross-industry IoT solutions for various purposes and industries',
            ],
        },
        {
            id: 'joe',
            name: 'Joe Lian Min',
            title: 'Software Engineering & System Architecture',
            image: joeImage,
            category: 'Software Development',
            achievements: [
                'Master of Information & Computer Science from Toyohashi University of Technology',
                'Commercial Digital Map web-based application development',
                'Smart Dealer Management System (SDMS) architect',
                'Desktop to web application migration specialist (Foxpro to web)',
                'System designer and development supervision expert',
                'Quality control and Software Engineering Life Cycle implementation',
                'Scrum and agile software engineering methodology adoption',
            ],
        },
        // {
        //   id: 'tata',
        //   name: 'Tata Wirasasmita',
        //   title: 'Data Analytics & Human Capital Management',
        //   image: tataImage,
        //   category: 'Data Science',
        //   achievements: [
        //     'Master of Management and Statistics background',
        //     'Data analytics specialist in human capital management',
        //     'Multi-industry project experience: agro business, Jakarta Stock Exchange',
        //     'Banking and education sector expertise',
        //     'Unique combination of human capital management and data analytics skills',
        //     'Statistical modeling and workforce optimization specialist',
        //     'Cross-sector analytical solutions provider',
        //   ],
        // },
        {
            id: 'indra',
            name: 'Indra Rachmat',
            title: 'RPA & Process Automation Architect',
            image: indraImage,
            category: 'Process Automation',
            achievements: [
                'Software developer turned process automation expert',
                'Deep knowledge in Java programming and software technology',
                'Senior solution architect in process automation/RPA',
                'Top-rank position in process automation/RPA community',
                'International project experience (Japanese motors, steel, retail, finance)',
                'Process analyst, RPA development and testing specialist',
                'Instrumental role in bringing process automation to various clients',
            ],
        },
        {
            id: 'anas',
            name: 'Anastasia Sherin',
            title: 'Data Science & AI Solutions Specialist',
            image: anasImage,
            category: 'AI & Machine Learning',
            achievements: [
                'Multiple professional certifications holder',
                'Data Analytics, Data Science, and Statistics expert',
                'Mathematics Modeling and Financial Mathematics specialist',
                'Intelligent search engine with NLP algorithm development (Telco)',
                'Real-time fraud detection system for mobile banking (Banking)',
                'Machine learning model for anomalous health insurance claims (Insurance)',
                'Project management role across various industry implementations',
            ],
        },
    ]

    const categories = [
        {
            name: 'Business Strategy',
            color: 'bg-blue-100 text-blue-800',
            icon: Briefcase,
        },
        {
            name: 'Technology Innovation',
            color: 'bg-green-100 text-green-800',
            icon: Star,
        },
        {
            name: 'Executive Leadership',
            color: 'bg-purple-100 text-purple-800',
            icon: Award,
        },
        {
            name: 'Data Science',
            color: 'bg-orange-100 text-orange-800',
            icon: Users,
        },
        {
            name: 'Software Development',
            color: 'bg-teal-100 text-teal-800',
            icon: Star,
        },
        {
            name: 'Process Automation',
            color: 'bg-red-100 text-red-800',
            icon: Award,
        },
        {
            name: 'AI & Machine Learning',
            color: 'bg-indigo-100 text-indigo-800',
            icon: Briefcase,
        },
    ]

    const getCategoryStyle = (category) => {
        const categoryInfo = categories.find((cat) => cat.name === category)
        return categoryInfo ? categoryInfo.color : 'bg-gray-100 text-gray-800'
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-gray-100 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
                    <Link to="/" className="hover:text-teal-600">
                        Home
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link
                        to="/standing-partners"
                        className="hover:text-teal-600"
                    >
                        About Us
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Standing Partners</span>
                </div>
            </div>

            {/* Header Section */}
            <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            Standing Partners
                        </h1>
                        <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                            Meet our experienced partners who bring deep
                            expertise and proven track records to drive your
                            digital transformation success
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Grid Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Business Operation Members
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our standing partners combine decades of experience
                            with cutting-edge expertise to deliver exceptional
                            results for our clients
                        </p>
                    </div>

                    {/* Partners Grid */}
                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {partners.map((partner, index) => (
                            <div
                                key={partner.id}
                                className={`relative group ${
                                    index === 6 ? 'lg:col-start-2' : ''
                                }`}
                                onMouseEnter={() =>
                                    setHoveredPartner(partner.id)
                                }
                                onMouseLeave={() => setHoveredPartner(null)}
                            >
                                {/* Partner Card */}
                                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden h-80">
                                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                                        {/* Profile Image */}
                                        <div className="relative mb-6">
                                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-blue-500 p-1">
                                                <img
                                                    src={partner.image}
                                                    alt={partner.name}
                                                    className="w-full h-full rounded-full object-cover bg-white"
                                                />
                                            </div>
                                            {/* Category Badge */}
                                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                                                <Badge
                                                    className={`${getCategoryStyle(
                                                        partner.category
                                                    )} text-sm px-3 py-1`}
                                                >
                                                    {partner.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Partner Info */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            {partner.name}
                                        </h3>
                                        <p className="text-base text-gray-600 leading-relaxed">
                                            {partner.title}
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Hover Overlay with Achievements */}
                                {hoveredPartner === partner.id && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg p-6 text-white z-10 transform transition-all duration-300">
                                        <div className="h-full flex flex-col">
                                            {/* Header */}
                                            <div className="text-center mb-4">
                                                <h4 className="text-lg font-bold mb-1">
                                                    {partner.name}
                                                </h4>
                                                <p className="text-teal-100 text-sm">
                                                    {partner.title}
                                                </p>
                                            </div>

                                            {/* Achievements List */}
                                            <div className="flex-1 overflow-y-auto">
                                                <h5 className="text-sm font-semibold mb-3 text-teal-100">
                                                    Key Achievements:
                                                </h5>
                                                <ul className="space-y-2 text-xs">
                                                    {partner.achievements.map(
                                                        (
                                                            achievement,
                                                            index
                                                        ) => (
                                                            <li
                                                                key={index}
                                                                className="flex items-start space-x-2"
                                                            >
                                                                <div className="w-1.5 h-1.5 bg-teal-300 rounded-full mt-1.5 flex-shrink-0"></div>
                                                                <span className="leading-relaxed">
                                                                    {
                                                                        achievement
                                                                    }
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Categories Legend */}
                    <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Expertise Areas
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {categories.map((category, index) => {
                                const IconComponent = category.icon
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50"
                                    >
                                        <IconComponent className="h-5 w-5 text-gray-600" />
                                        <span className="text-sm font-medium text-gray-700">
                                            {category.name}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Call to Action */}
                    {/* <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Work with Our Expert Partners?
              </h3>
              <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                Our standing partners are ready to bring their expertise to your
                digital transformation journey. Let's discuss how their
                specialized skills can benefit your organization.
              </p>
              <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div> */}
                </div>
            </section>
        </div>
    )
}

export default StandingPartners
