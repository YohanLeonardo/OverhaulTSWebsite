import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Brain, 
  Smartphone, 
  Settings,
  Target,
  ArrowRight,
  Calendar,
  MapPin,
  Award,
  CheckCircle,
  BarChart3,
  Zap,
  ChevronRight
} from "lucide-react";

const caseStudiesData = [
  {
    id: 1,
    title: "Case Study : Fraud Detection System - Mobile & Internet Banking",
    category: "Data Analytics",
    icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
    description:
      "Menggunakan metode gabungan dari Rule Based dan Unsupervised Learning: analisis perilaku belanja, profiling nasabah, dan lokasi geografis.",
    technologies: [
      "Rule-Based",
      "Unsupervised Learning",
      "Customer Profiling",
      "Geospatial Analysis"
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    link: "https://bandungtalentsource.com/case-studies/"
  },
  {
    id: 2,
    title: "Data analytics : Students' social economic grouping",
    category: "Data Analytics",
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
    description:
      "Selama pandemi COVID-19, sekolah ingin menyalurkan dukungan secara tepat sasaran dengan menganalisis data orang tua/keluarga dan menghindari salah alokasi.",
    technologies: ["Data Analytics", "Segmentation", "Education"],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    link: "https://bandungtalentsource.com/case-studies/"
  },
  {
    id: 3,
    title:
      "Data analytics: Finding the right strategy to increase fee-based income of cellular ’pulsa’ retailer",
    category: "Data Analytics",
    icon: <TrendingUp className="h-8 w-8 text-red-600" />,
    description:
      "Bank yang juga menjual top-up pulsa/data mencari strategi efektif untuk meningkatkan volume pembelian dengan menganalisis perilaku dan profil nasabah.",
    technologies: ["Behavior Analysis", "Customer Insights", "Banking"],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    link: "https://bandungtalentsource.com/case-studies/"
  },
  {
    id: 4,
    title: "Case Study Work Process Streamlining & Automation",
    category: "Process Automation & RPA",
    icon: <Settings className="h-8 w-8 text-teal-600" />,
    description:
      "Studi peninjauan proses bisnis, melakukan BPI/BPR dan otomasi proses di industri keuangan terkemuka.",
    technologies: ["BPI/BPR", "RPA", "Workflow Automation"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    link: "https://bandungtalentsource.com/case-studies/"
  },
  {
    id: 5,
    title:
      "Application User-Friendliness and Smartness (Knowledge Management Function)",
    category: "Knowledge Management",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    description:
      "Aplikasi internal penting untuk agen call center dengan fitur knowledge management untuk meningkatkan kemudahan dan kecerdasan penggunaan.",
    technologies: ["Knowledge Management", "UX", "Internal Tools"],
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1200&q=80",
    link: "https://bandungtalentsource.com/case-studies/"
  }
];

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  // derive categories from data to stay in sync with content
  const categories = [
    "All",
    ...Array.from(new Set(caseStudiesData.map((s) => s.category)))
  ];

  const filteredStudies = selectedCategory === "All" 
    ? caseStudiesData 
    : caseStudiesData.filter(study => study.category === selectedCategory);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-teal-600">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Case Studies & Op-Ed</span>
        </div>
      </div>

      {/* Header Section with Gradient Banner */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Case Studies & Success Stories
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Discover how we've helped leading Indonesian companies transform their operations through digital innovation, process automation, and strategic consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white shadow-lg"
                    : "hover:bg-teal-50 hover:border-teal-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <div
                key={study.id}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      {study.icon}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {study.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                      {study.title}
                    </CardTitle>
                    {study.client && (
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Building2 className="h-4 w-4 mr-2" />
                        {study.client}
                      </div>
                    )}
                    {study.duration && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {study.duration}
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="text-gray-600 mb-4">
                      {study.description}
                    </CardDescription>

                    <div className="space-y-3 flex-grow">
                      {Array.isArray(study.achievements) && study.achievements.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {study.achievements.slice(0, 2).map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-600">
                                <CheckCircle className="h-3 w-3 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {Array.isArray(study.technologies) && study.technologies.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {study.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t">
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button 
                          className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                          variant="outline"
                        >
                          Download Case Study
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
