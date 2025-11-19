import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.jsx'
import { Input } from '@/components/ui/input.jsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.jsx'
import {
  Settings,
  Brain,
  Smartphone,
  Users,
  TrendingUp,
  CheckCircle,
  ChevronRight,
} from 'lucide-react'
 

const servicesData = [
  {
    icon: Settings,
    title: 'Work Process Streamlining & Automation (RPA)',
    description:
      'Transform your business processes with intelligent automation solutions that reduce manual work and increase efficiency.',
    features: [
      'Process Analysis',
      'RPA Implementation',
      'Workflow Optimization',
      'Performance Monitoring',
    ],
    detailedDescription:
      'We are the Indonesian Process Automation / RPA hands-on expert with six packages of services:',
    detailedFeatures: [
      'Free webinar RPA introduction',
      "Live coaching/ workshop on 'Make your very first robots'",
      'Proof of Concept (PoC) process automation trial case',
      "Consulting Service: 'Discovering the Right Strategy to start RPA'",
      'Process automation / RPA design and development for your organization',
      "Consulting service: 'The Invisible Reality Behind Process Automation'",
    ],
  },
  {
    icon: Brain,
    title: 'Data Science, Machine Learning & AI Solutions',
    description:
      'Leverage the power of data and AI to make informed decisions and drive business growth.',
    features: [
      'Predictive Analytics',
      'Machine Learning Models',
      'AI Integration',
      'Data Visualization',
    ],
    detailedDescription:
      'Accelerate your organization initiative to engage Data analytics and Data science and our data scientist team is ready to support:',
    detailedFeatures: [
      'Leverage your sleeping big data into strategic business assets',
      'Developing data analytics, machine learning and AI capabilities for your organization',
      'Help your corporation to become an insight driven organization',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Design & Development',
    description:
      'Create engaging mobile experiences that connect with your customers and streamline operations.',
    features: [
      'iOS & Android Apps',
      'Cross-platform Development',
      'UI/UX Design',
      'App Maintenance',
    ],
    detailedDescription:
      'Comprehensive mobile application services to enhance your digital presence:',
    detailedFeatures: [
      'Design and develop new m-app',
      'Review your current m-app, upgrade its features and capabilities',
      'Develop internal dashboard for the m-app operational monitoring',
      'Adding machine learning and AI capabilities to the m-app',
      'Redesign existing m-app, with better UI/UX and robust security',
    ],
  },
  {
    icon: Users,
    title: 'Talent Re & Upskilling - Catching Up the Digital Challenges',
    description:
      'Prepare your team for the digital future with comprehensive training and development programs.',
    features: [
      'Digital Skills Training',
      'Leadership Development',
      'Change Management',
      'Performance Coaching',
    ],
    detailedDescription:
      'We help companies to build a new Learning & Development strategy by moving away from traditional classroom training and adopting Talent Re and Upskilling strategy:',
    detailedFeatures: [
      'Coaching and mentoring system to develop talents',
      'Help talents to engage and catch up the needs of digital work style',
      "TS provides remote coaching services to upskill companies' talents in area of process automation, data science, and work process streamlining",
    ],
  },
  {
    icon: TrendingUp,
    title:
      'Strategic and Specific Domains, Digitalization Consultation Services',
    description:
      'Navigate your digital transformation journey with expert guidance and strategic planning.',
    features: [
      'Digital Strategy',
      'Technology Roadmap',
      'Business Analysis',
      'Implementation Planning',
    ],
    detailedDescription:
      'TS provides near turn-key service comprises both consulting and solution development to help Indonesian corporations benefiting the progress of digital technology and culture:',
    detailedFeatures: [
      'Strategic domain: Corporate digital transformation initiative',
      'Specific focus: digital product and service development, digitalization and automation of internal processes, digitalization of customer facing processes',
    ],
  },
]

const ServicesPage = () => {
  const [isRpaDialogOpen, setIsRpaDialogOpen] = useState(false)
  const [rpaForm, setRpaForm] = useState({ firstName: '', lastName: '', company: '', email: '', country: '' })

  const handleRpaChange = (field, value) => setRpaForm((p) => ({ ...p, [field]: value }))
  const handleRpaDownload = (e) => {
    e.preventDefault()
    const a = document.createElement('a')
    a.href = '/brochures/RPA-Brochure.pdf'
    a.download = 'RPA-Brochure.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setIsRpaDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-teal-600">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Services</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Services</h1>
          <p className="text-lg text-teal-100 max-w-4xl mx-auto">
            We help organizations accelerate digital transformation with hands-on expertise in automation, data, product, and people.
          </p>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured: RPA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Process Streamlining & Automation (RPA)</h2>
              <p className="text-gray-700 mb-6">
                Indonesian hands-on experts delivering end-to-end automation — from discovery and PoC to scaled rollouts and Centers of Excellence.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Free webinar RPA introduction',
                  "Live coaching/workshop: Make your very first robots",
                  'PoC process automation trial case',
                  'Discovering the Right Strategy to start RPA',
                  'RPA design and development for your organization',
                  'The Invisible Reality Behind Process Automation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700"><CheckCircle className="h-4 w-4 text-teal-600 mt-1 mr-2" />{item}</li>
                ))}
              </ul>
              <Button onClick={() => setIsRpaDialogOpen(true)} className="bg-teal-600 hover:bg-teal-700 text-white">
                Download RPA Brochure
              </Button>
            </div>
            <div>
              <Card className="border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle>What you get</CardTitle>
                  <CardDescription>Structured delivery with measurable outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {['Process Analysis', 'Bot Development', 'Governance & CoE', 'Change Management', 'Runbooks', 'Monitoring & ROI'].map((f, idx) => (
                      <div key={idx} className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
                        <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                        <span className="text-sm text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Other services as distinct blocks */}
          <div className="space-y-16">
            {[servicesData[1], servicesData[2], servicesData[3], servicesData[4]].map((service, idx) => {
              const IconComponent = service.icon
              return (
                <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className="h-6 w-6 text-teal-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.detailedFeatures.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700"><CheckCircle className="h-4 w-4 text-teal-600 mt-1 mr-2" />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <Card className="border-0 shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle>Highlights</CardTitle>
                      <CardDescription>Key focus areas we deliver</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((f, i) => (
                          <div key={i} className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
                            <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                            <span className="text-sm text-gray-700">{f}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          
        </div>
      </section>

      {/* RPA brochure dialog */}
      <Dialog open={isRpaDialogOpen} onOpenChange={setIsRpaDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Download RPA Brochure</DialogTitle>
            <DialogDescription>Fill the form to receive the brochure.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRpaDownload} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
              <Input value={rpaForm.firstName} onChange={(e) => handleRpaChange('firstName', e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
              <Input value={rpaForm.lastName} onChange={(e) => handleRpaChange('lastName', e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
              <Input value={rpaForm.company} onChange={(e) => handleRpaChange('company', e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Work email</label>
              <Input type="email" value={rpaForm.email} onChange={(e) => handleRpaChange('email', e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Country</label>
              <Select onValueChange={(v) => handleRpaChange('country', v)} required>
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
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">Download</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ServicesPage
