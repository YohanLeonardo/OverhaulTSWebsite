import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const achievementsData = [
  {
    title: "BCA Automation Centre of Excellence",
    description: "End-to-end diagnosis and upgrade of established BCA automation process workflow across three major milestones (2021, 2022, 2024)."
  },
  {
    title: "Pegadaian Digital Transformation",
    description: "Designed and implemented Inventory Management System for Gadai outlets with centralized control and enhanced security."
  },
  {
    title: "Peruri Digital Business Development",
    description: "Established new digital products team and launched Peruri Digital SBU (Strategic Business Unit)."
  },
  {
    title: "INKA Multi Service Process Transformation",
    description: "Business process transformation in factory operations with digital adaptation and culture change."
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

        <div className="grid md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-teal-700">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;

