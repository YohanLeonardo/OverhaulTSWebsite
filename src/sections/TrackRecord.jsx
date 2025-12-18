import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    company: "BCA",
    logo: "/logos/BCA.png",
    title: "BCA Automation Centre of Excellence",
    description: [
      "End-to-end diagnosis and upgrade of the established BCA automation processes workflow",
      "Design the first BCA Automation Centre of Excellence (BCA ACE) in 2021, 2022 and 2024",
      "Support BCA in an accessible process automation upscaling journey that will impact automation while going forward",
      "This will ensure BCA to stay dominant and competitive in the industry"
    ]
  },
  {
    company: "Pegadaian",
    logo: "/logos/pegadaian.png",
    title: "Pegadaian Digital Transformation",
    description: [
      "Design, develop and POC implementation of Inventory Management System for Gadai outlets to establishing more centralized control system",
      "Perform 14 shops pilot processes in HQ and Regional Office in the area of Human Capital, Finance and GEKA, Develop Process Automation using RPA and scripts to gain outcome. Design a concept of life and big thing (PLG) program for improved employee"
    ]
  },
  {
    company: "Tower Bersama Group",
    logo: "/logos/tower-bersama-Small.png",
    title: "Tower Bersama Group Process Excellence",
    description: [
      "Annual Executive Industry Review",
      "To presenting and discussing its research results and projections on cellular tower industry in the annual executive review",
      "To research covers the business and competitive landscape, the opportunities offered by the latest technology trend that will impact the business"
    ]
  },
  {
    company: "Peruri",
    logo: "/logos/peruri-Small.png",
    title: "Peruri Digital Business Development",
    description: [
      "Peruri new Digital Business Development and Coaching System, new system and developing the new digital products that first Peruri brand as an innovative highly secured products",
      "Coaching the estimate, the products and the potential partners",
      "Building the new team capabilities in defining and accessing potential partners and customers relationship practice, doing the business planning",
      "Building and launching Peruri Digital SBU (Strategic Business Unit)"
    ]
  },
  {
    company: "Agit",
    logo: "/logos/agit-Small.png",
    title: "Agit Business Process Consulting",
    description: [
      "Business Analysis and Consulting (Network Device, Data Center)",
      "Supporting Agit to identify new business portfolio as part of business development exercise. These potential new businesses have been internally designed",
      "To be assigned to present the new business opportunities, discussing with agit and making the project at each one that supports agit to make their final decision"
    ]
  },
  {
    company: "INKA Multi Service",
    logo: "/logos/inka-Small.png",
    title: "INKA Multi Service Process Transformation",
    description: [
      "Business process transformation in the factory and coach the factory core design to engage in the new digitally oriented work processes",
      "Helping INKA Multi Service to identify the new products and services that are feasible to create and push to support the future growth of the company",
      "The project was eventually also assigned to change the work culture in the factory"
    ]
  },
  {
    company: "Telkomsel",
    logo: "/logos/telkomsel-Small.png",
    title: "Telkomsel Training & Development",
    description: [
      "HCM Roadmap Consultancy",
      "OTDP VP & GM Level Training",
      "Executive English",
      "Corporate Account Manager Training",
      "Network Service Area Manager Training",
      "Branch Manager Training"
    ]
  },
{
    company: "BMI (PT Bumi Menara Internusa)",
    logo: "/logos/logo_bmi.png",
    title: "RPA Export Documentation Automation",
    description: [
      "Automated export documentation preparation using RPA",
      "Managed documentation workflows involving multiple departments/divisions",
      "Facilitated automated access to various export authority portals",
      "Covered pre-shipment and post-shipment documentation phases"
    ]
  },
  {
    company: "BSI",
    logo: "/logos/logo_bsi.jpg",
    title: "Smart Vault System Implementation (Bullion Bank)",
    description: [
      "Designed and implemented a Smart Vault system for Bullion Bank",
      "Developed a comprehensive system covering both hardware and software",
      "Applied IoT technology to optimize business processes",
      "Integrated the Smart Vault system with existing applications and solutions",
      "Pioneered the design and implementation of Bullion Bank digitalization in Indonesia"
    ]
  }
];

const TrackRecord = () => {
  return (
    <section id="track-record" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven success stories with Indonesia's leading corporations across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
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
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white h-full">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={achievement.logo} 
                      alt={`${achievement.company} logo`} 
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg text-gray-900 font-semibold">
                    {achievement.company}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {achievement.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-teal-600 mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
