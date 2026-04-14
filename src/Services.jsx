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
    Users,
    TrendingUp,
    CheckCircle,
    ChevronRight,
    Sparkles,
} from 'lucide-react'

const servicesData = [
    {
        icon: Sparkles,
        title: 'Gen-AI: Prompting Workshop',
        description:
            'Learn how to instruct GenAI accurately and comprehensively to get exactly what you need.',
        features: [
            'Precision Prompting',
            'Maximize Productivity',
            'Expert-Led Training',
            'Hands-on Practice',
        ],
        detailedDescription:
            'Gain essential skills to leverage GenAI in your professional and personal life:',
        detailedFeatures: [
            'Direct GenAI precisely according to your intentions and needs',
            'GenAI story line, prompt engineering insights, on-the spot prompting practice workshop aligned with participants professional need presented by TalentSource senior partners and GenAI specialists',
            'Flexible timing upon agreement (max 3 hours duration)',
            'Exclusive session with limited slots for 30-40 participants',
            "Hands-on session at the client's location (bring your own laptop)",
        ],
    },
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
        title: 'Strategic and Specific Domains, Digitalization Consultation Services',
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
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const [leadForm, setLeadForm] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        country: '',
    })

    const handleFormChange = (field, value) =>
        setLeadForm((p) => ({ ...p, [field]: value }))

    const handleDownloadSubmit = (e) => {
        e.preventDefault()

        // Langsung set ke Flyer Gen-AI
        const fileName = 'Flyer-Workshop-GenAI.pdf'
        const fileUrl = `/${fileName}`

        const a = document.createElement('a')
        a.href = fileUrl
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        setIsDialogOpen(false)
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
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                        Services
                    </h1>
                    <p className="text-lg text-teal-100 max-w-4xl mx-auto">
                        We help organizations accelerate digital transformation
                        with hands-on expertise in automation, data, product,
                        and people.
                    </p>
                </div>
            </section>

            <section id="services" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Featured 1: Gen-AI Workshop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                                    <Sparkles className="h-6 w-6 text-teal-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {servicesData[0].title}
                                </h2>
                            </div>
                            <p className="text-gray-700 mb-6">
                                {servicesData[0].description}
                            </p>
                            <ul className="space-y-2 mb-8">
                                {servicesData[0].detailedFeatures.map(
                                    (item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start text-gray-700"
                                        >
                                            <CheckCircle className="h-4 w-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ),
                                )}
                            </ul>
                            <Button
                                onClick={() => setIsDialogOpen(true)}
                                className="bg-teal-600 hover:bg-teal-700 text-white"
                            >
                                Download Gen-AI Flyer
                            </Button>
                        </div>
                        <div>
                            <Card className="border-0 shadow-xl rounded-2xl bg-white">
                                <CardHeader>
                                    <CardTitle>Highlights</CardTitle>
                                    <CardDescription>
                                        Key focus areas we deliver
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        {servicesData[0].features.map(
                                            (f, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center bg-white shadow-sm rounded-lg px-3 py-3 border border-gray-100"
                                                >
                                                    <CheckCircle className="h-4 w-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                                                    <span className="text-sm font-medium text-gray-700">
                                                        {f}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Featured 2: RPA*/}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12 pt-8 border-t border-gray-100">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                                    <Settings className="h-6 w-6 text-teal-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {servicesData[1].title}
                                </h2>
                            </div>
                            <p className="text-gray-700 mb-6">
                                Indonesian hands-on experts delivering
                                end-to-end automation — from discovery and PoC
                                to scaled rollouts and Centers of Excellence.
                            </p>
                            <ul className="space-y-2 mb-8">
                                {servicesData[1].detailedFeatures.map(
                                    (item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start text-gray-700"
                                        >
                                            <CheckCircle className="h-4 w-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                        <div>
                            <Card className="border-0 shadow-xl rounded-2xl">
                                <CardHeader>
                                    <CardTitle>Highlights</CardTitle>
                                    <CardDescription>
                                        Key focus areas we deliver
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            'Process Analysis',
                                            'Bot Development',
                                            'Governance & CoE',
                                            'Change Management',
                                            'Runbooks',
                                            'Monitoring & ROI',
                                        ].map((f, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center bg-gray-50 rounded-lg px-3 py-2"
                                            >
                                                <CheckCircle className="h-4 w-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-700">
                                                    {f}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Other services as distinct blocks (Data Science, Talent Re, Strategic) */}
                    <div className="space-y-16 pt-8 border-t border-gray-100">
                        {servicesData.slice(2).map((service, idx) => {
                            const IconComponent = service.icon
                            return (
                                <div
                                    key={service.title}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
                                >
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                                                <IconComponent className="h-6 w-6 text-teal-600" />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-gray-900">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-700 mb-6">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.detailedFeatures
                                                .slice(0, 4)
                                                .map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start text-gray-700"
                                                    >
                                                        <CheckCircle className="h-4 w-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                    <Card className="border-0 shadow-lg rounded-2xl">
                                        <CardHeader>
                                            <CardTitle>Highlights</CardTitle>
                                            <CardDescription>
                                                Key focus areas we deliver
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 gap-3">
                                                {service.features.map(
                                                    (f, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex items-center bg-gray-50 rounded-lg px-3 py-2"
                                                        >
                                                            <CheckCircle className="h-4 w-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                                                            <span className="text-sm text-gray-700">
                                                                {f}
                                                            </span>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Dynamic Lead Gen Form Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Download Gen-AI Flyer</DialogTitle>
                        <DialogDescription>
                            Fill the form to receive the document.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleDownloadSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First name
                            </label>
                            <Input
                                value={leadForm.firstName}
                                onChange={(e) =>
                                    handleFormChange(
                                        'firstName',
                                        e.target.value,
                                    )
                                }
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Last name
                            </label>
                            <Input
                                value={leadForm.lastName}
                                onChange={(e) =>
                                    handleFormChange('lastName', e.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Company/Organization
                            </label>
                            <Input
                                value={leadForm.company}
                                onChange={(e) =>
                                    handleFormChange('company', e.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Work email
                            </label>
                            <Input
                                type="email"
                                value={leadForm.email}
                                onChange={(e) =>
                                    handleFormChange('email', e.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Country
                            </label>
                            <Select
                                onValueChange={(v) =>
                                    handleFormChange('country', v)
                                }
                                required
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select your country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="indonesia">
                                        Indonesia
                                    </SelectItem>
                                    <SelectItem value="singapore">
                                        Singapore
                                    </SelectItem>
                                    <SelectItem value="malaysia">
                                        Malaysia
                                    </SelectItem>
                                    <SelectItem value="thailand">
                                        Thailand
                                    </SelectItem>
                                    <SelectItem value="philippines">
                                        Philippines
                                    </SelectItem>
                                    <SelectItem value="vietnam">
                                        Vietnam
                                    </SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                        >
                            Download
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ServicesPage
