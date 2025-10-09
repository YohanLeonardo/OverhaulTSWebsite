import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Settings,
  Brain,
  Smartphone,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

// --- UI Components (From Original Code) ---
// These are simplified versions of the shadcn/ui components for this single-file environment.
const Button = ({ children, className, size = 'md' }) => {
  const sizeClasses = {
    lg: 'px-8 py-3 text-lg',
    md: 'px-4 py-2 text-base',
  };
  return (
    <button className={`font-semibold rounded-lg shadow-md transition-colors ${sizeClasses[size]} ${className}`}>
      {children}
    </button>
  );
};

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="p-6">{children}</div>;
const CardTitle = ({ children }) => <h3 className="text-2xl font-bold tracking-tight text-gray-900">{children}</h3>;
const CardDescription = ({ children }) => <p className="text-md text-gray-500 mt-1">{children}</p>;
const CardContent = ({ children }) => <div className="p-6 pt-0">{children}</div>;
const Badge = ({ children, className }) => <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${className}`}>{children}</span>;


// --- Section & Page Components (From Original Code, Merged into this file) ---

const Hero = () => (
  <section className="bg-teal-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
      <Badge className="bg-teal-100 text-teal-800 mb-4">
        Your Partner in Digital Innovation
      </Badge>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
        Empowering Indonesia Through Digital Transformation
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
        We deliver cutting-edge solutions in RPA, Data Science, and Mobile Development, tailored for the unique needs of the Indonesian market.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700">
          Our Services
        </Button>
        <Button size="lg" className="bg-white text-teal-600 border border-gray-300 hover:bg-gray-50">
          Contact Us
        </Button>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">About Us</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A Unique Focus on Local Talent and Global Tech
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Bandung TalentSource is a professional service provider with a dedicated focus on leveraging local Indonesian talent to deliver world-class technology solutions in RPA, AI, and Data Science.
        </p>
      </div>
    </div>
  </section>
);

const ServicesPage = () => (
    <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Our Services</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Comprehensive Solutions for Digital Growth
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    We offer a spectrum of services designed to automate processes, derive insights from data, and build robust digital platforms.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { icon: <Settings className="h-8 w-8 text-white" />, title: "RPA & Automation", desc: "Streamline your business processes, reduce human error, and increase efficiency with our Robotic Process Automation solutions." },
                    { icon: <Brain className="h-8 w-8 text-white" />, title: "Data Science & AI", desc: "Unlock the power of your data with advanced analytics, machine learning models, and predictive insights to make smarter decisions." },
                    { icon: <Smartphone className="h-8 w-8 text-white" />, title: "Mobile Development", desc: "Engage your customers with beautiful, intuitive, and high-performance mobile applications for both iOS and Android platforms." },
                    { icon: <Users className="h-8 w-8 text-white" />, title: "Talent Development", desc: "We nurture Indonesia's brightest tech talents, providing them with the skills and opportunities to excel in the digital economy." },
                    { icon: <TrendingUp className="h-8 w-8 text-white" />, title: "Digital Strategy", desc: "Our experts help you craft a comprehensive digital transformation roadmap that aligns with your business goals." },
                    { icon: <CheckCircle className="h-8 w-8 text-white" />, title: "Quality Assurance", desc: "Ensuring your digital products are reliable, scalable, and secure through rigorous testing and quality assurance protocols." },
                ].map((service) => (
                    <div key={service.title} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-600 mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const TrackRecord = () => (
  <section id="track-record" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Track Record</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Proven Success, Tangible Results
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>RPA Implementation for a Major Telco</CardTitle>
            <CardDescription>Reduced manual processing time by 90%</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">We automated over 50 core business processes for a leading Indonesian telecommunications company, resulting in significant cost savings and improved data accuracy.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Analytics for a Retail Giant</CardTitle>
            <CardDescription>Increased sales forecasting accuracy by 35%</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Developed a machine learning model to predict consumer trends, enabling better inventory management and targeted marketing campaigns.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Clients = () => (
  <section id="clients" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
        Trusted by Industry Leaders in Indonesia
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
        <p className="font-bold text-gray-500 text-xl">TELKOMSEL</p>
        <p className="font-bold text-gray-500 text-xl">INDOSAT</p>
        <p className="font-bold text-gray-500 text-xl">XL AXIATA</p>
        <p className="font-bold text-gray-500 text-xl">BANK MANDIRI</p>
        <p className="font-bold text-gray-500 text-xl">BCA</p>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <>
    <Hero />
    <About />
    <ServicesPage />
    <TrackRecord />
    <Clients />
  </>
);

const CompanyProfile = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 className="text-4xl font-bold mb-4">Company Profile</h1>
    <p className="text-lg text-gray-700">Detailed information about Bandung TalentSource's history, mission, and values will be displayed here.</p>
  </div>
);

const StandingPartners = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 className="text-4xl font-bold mb-4">Standing Partners</h1>
    <p className="text-lg text-gray-700">A list of our long-term strategic partners will be displayed here.</p>
  </div>
);

const CorporatePartners = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 className="text-4xl font-bold mb-4">Corporate Partners</h1>
    <p className="text-lg text-gray-700">A showcase of our corporate collaborations and clients will be displayed here.</p>
  </div>
);

// --- Main App Component ---

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const logoUrl = 'https://placehold.co/200x50/FFFFFF/115e59?text=TalentSource&font=sans';

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="cursor-pointer" onClick={closeMenus}>
                  <img src={logoUrl} alt="TalentSource" className="h-12 w-auto hover:opacity-80 transition-opacity" />
                </Link>
              </div>

              <div className="hidden xl:block">
                <div className="ml-10 flex items-baseline space-x-6">
                  <div className="relative">
                    <button onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)} className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center">
                      About Us
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                        <Link to="/company-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors" onClick={closeMenus}>Company Profile</Link>
                        <Link to="/standing-partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors" onClick={closeMenus}>Standing Partners</Link>
                        <Link to="/corporate-partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors" onClick={closeMenus}>Corporate Partners</Link>
                      </div>
                    )}
                  </div>
                  <Link to="/services" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Services</Link>
                  <a href="#track-record" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Case Studies & Op-Ed</a>
                  <a href="#webinar" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Free Webinar & Live Consultation</a>
                  <a href="#internship" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Free Internship</a>
                  <a href="#education" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">Education Support</a>
                </div>
              </div>
              <div className="xl:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="xl:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                  <div className="text-gray-800 font-medium px-3 py-2 text-base">About Us</div>
                  <Link to="/company-profile" className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm" onClick={closeMenus}>Company Profile</Link>
                  <Link to="/standing-partners" className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm" onClick={closeMenus}>Standing Partners</Link>
                  <Link to="/corporate-partners" className="text-gray-600 hover:text-teal-600 block px-6 py-2 text-sm" onClick={closeMenus}>Corporate Partners</Link>
                <Link to="/services" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium" onClick={closeMenus}>Services</Link>
                <a href="#track-record" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium" onClick={closeMenus}>Case Studies & Op-Ed</a>
                <a href="#webinar" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium" onClick={closeMenus}>Free Webinar & Live Consultation</a>
                <a href="#internship" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium" onClick={closeMenus}>Free Internship</a>
                <a href="#education" className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium" onClick={closeMenus}>Education Support</a>
              </div>
            </div>
          )}
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/standing-partners" element={<StandingPartners />} />
            <Route path="/corporate-partners" element={<CorporatePartners />} />
          </Routes>
        </main>
        <Routes>
           <Route path="/" element={
              <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto">Let's discuss how we can help accelerate your digital transformation journey with our proven expertise and local insights.</p>
                  <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">Schedule a Consultation</Button>
                </div>
              </section>
            }/>
        </Routes>
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <img src={logoUrl} alt="TalentSource" className="h-10 w-auto mb-4" />
                <p className="text-gray-400 mb-4">Empowering Indonesian companies through digital transformation, RPA, and talent development.</p>
                <p className="text-gray-400 text-sm">Providing unique professional services to telco, cellular, and IT service companies in Indonesia.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/services" className="hover:text-white transition-colors">RPA & Automation</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Data Science & AI</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Mobile Development</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Talent Development</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Digital Strategy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/company-profile" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><a href="#track-record" className="hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#webinar" className="hover:text-white transition-colors">Free Webinar</a></li>
                  <li><a href="#internship" className="hover:text-white transition-colors">Internship Program</a></li>
                  <li><a href="#education" className="hover:text-white transition-colors">Education Support</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Bandung TalentSource. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

