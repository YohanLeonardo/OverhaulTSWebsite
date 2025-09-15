import React from 'react';

const clientsData = [
  "BCA (Bank Central Asia)",
  "Pegadaian",
  "Tower Bersama Group",
  "Peruri",
  "Agit",
  "INKA Multi Service"
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Indonesian Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with some of Indonesia's most respected organizations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clientsData.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="text-gray-800 font-semibold text-lg">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

