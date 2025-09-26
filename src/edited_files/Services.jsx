import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx';
import { Settings, Brain, Smartphone, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: Settings,
    title: "Work Process Streamlining & Automation (RPA)",
    description: "Transform your business processes with intelligent automation solutions that reduce manual work and increase efficiency.",
    features: ["Process Analysis", "RPA Implementation", "Workflow Optimization", "Performance Monitoring"],
    detailedDescription: "We are the Indonesian Process Automation / RPA hands-on expert with six packages of services:",
    detailedFeatures: [
      "Free webinar RPA introduction",
      "Live coaching/ workshop on 'Make your very first robots'",
      "Proof of Concept (PoC) process automation trial case",
      "Consulting Service: 'Discovering the Right Strategy to start RPA'",
      "Process automation / RPA design and development for your organization",
      "Consulting service: 'The Invisible Reality Behind Process Automation'"
    ]
  },
  {
    icon: Brain,
    title: "Data Science, Machine Learning & AI Solutions",
    description: "Leverage the power of data and AI to make informed decisions and drive business growth.",
    features: ["Predictive Analytics", "Machine Learning Models", "AI Integration", "Data Visualization"],
    detailedDescription: "Accelerate your organization initiative to engage Data analytics and Data science and our data scientist team is ready to support:",
    detailedFeatures: [
      "Leverage your sleeping big data into strategic business assets",
      "Developing data analytics, machine learning and AI capabilities for your organization",
      "Help your corporation to become an insight driven organization"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Application Design & Development",
    description: "Create engaging mobile experiences that connect with your customers and streamline operations.",
    features: ["iOS & Android Apps", "Cross-platform Development", "UI/UX Design", "App Maintenance"],
    detailedDescription: "Comprehensive mobile application services to enhance your digital presence:",
    detailedFeatures: [
      "Design and develop new m-app",
      "Review your current m-app, upgrade its features and capabilities",
      "Develop internal dashboard for the m-app operational monitoring",
      "Adding machine learning and AI capabilities to the m-app",
      "Redesign existing m-app, with better UI/UX and robust security"
    ]
  },
  {
    icon: Users,
    title: "Talent Re & Upskilling - Catching Up the Digital Challenges",
    description: "Prepare your team for the digital future with comprehensive training and development programs.",
    features: ["Digital Skills Training", "Leadership Development", "Change Management", "Performance Coaching"],
    detailedDescription: "We help companies to build a new Learning & Development strategy by moving away from traditional classroom training and adopting Talent Re and Upskilling strategy:",
    detailedFeatures: [
      "Coaching and mentoring system to develop talents",
      "Help talents to engage and catch up the needs of digital work style",
      "TS provides remote coaching services to upskill companies' talents in area of process automation, data science, and work process streamlining"
    ]
  },
  {
    icon: TrendingUp,
    title: "Strategic and Specific Domains, Digitalization Consultation Services",
    description: "Navigate your digital transformation journey with expert guidance and strategic planning.",
    features: ["Digital Strategy", "Technology Roadmap", "Business Analysis", "Implementation Planning"],
    detailedDescription: "TS provides near turn-key service comprises both consulting and solution development to help Indonesian corporations benefiting the progress of digital technology and culture:",
    detailedFeatures: [
      "Strategic domain: Corporate digital transformation initiative",
      "Specific focus: digital product and service development, digitalization and automation of internal processes, digitalization of customer facing processes"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital transformation services designed to accelerate your business growth and operational efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="grid grid-cols-2 gap-2 flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full mt-4 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl border-0 shadow-2xl p-0">
                        <div className="relative">
                          {/* Header with gradient background */}
                          <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-t-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-white mb-3">
                                {service.title}
                              </DialogTitle>
                              <DialogDescription className="text-teal-100 text-lg leading-relaxed">
                                {service.detailedDescription}
                              </DialogDescription>
                            </DialogHeader>
                          </div>
                          
                          {/* Content area */}
                          <div className="p-8">
                            <div className="space-y-4">
                              {service.detailedFeatures.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                                    <span className="text-white text-sm font-bold">•</span>
                                  </div>
                                  <span className="text-gray-800 leading-relaxed">{feature}</span>
                                </div>
                              ))}
                            </div>
                            
                            {/* Call to action */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                              <div className="text-center">
                                <p className="text-gray-600 mb-4">Ready to get started with this service?</p>
                                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 rounded-lg">
                                  Contact Us Today
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

