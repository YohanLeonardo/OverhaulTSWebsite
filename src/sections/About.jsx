import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Users, Settings, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TalentSource?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born, grown, and living as Indonesians, we understand the anatomy and behavior of Indonesian companies better than any global consulting firm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <CardTitle>Local Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Deep understanding of Indonesian business culture and practices, enabling more effective solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Customized Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Every program is fully customized to your specific needs and situation with measurable objectives.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Proven Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Track record of successful digital transformations with major Indonesian corporations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

