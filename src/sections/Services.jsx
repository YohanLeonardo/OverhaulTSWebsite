import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Settings, Brain, Smartphone, Users, TrendingUp, CheckCircle } from 'lucide-react';

const servicesData = [
  {
    icon: Settings,
    title: "Work Process Streamlining & Automation (RPA)",
    description: "Transform your business processes with intelligent automation solutions that reduce manual work and increase efficiency.",
    features: ["Process Analysis", "RPA Implementation", "Workflow Optimization", "Performance Monitoring"]
  },
  {
    icon: Brain,
    title: "Data Science, Machine Learning & AI Solutions",
    description: "Leverage the power of data and AI to make informed decisions and drive business growth.",
    features: ["Predictive Analytics", "Machine Learning Models", "AI Integration", "Data Visualization"]
  },
  {
    icon: Smartphone,
    title: "Mobile Application Design & Development",
    description: "Create engaging mobile experiences that connect with your customers and streamline operations.",
    features: ["iOS & Android Apps", "Cross-platform Development", "UI/UX Design", "App Maintenance"]
  },
  {
    icon: Users,
    title: "Talent Re & Upskilling",
    description: "Prepare your team for the digital future with comprehensive training and development programs.",
    features: ["Digital Skills Training", "Leadership Development", "Change Management", "Performance Coaching"]
  },
  {
    icon: TrendingUp,
    title: "Strategic Digitalization Consultation",
    description: "Navigate your digital transformation journey with expert guidance and strategic planning.",
    features: ["Digital Strategy", "Technology Roadmap", "Business Analysis", "Implementation Planning"]
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
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

