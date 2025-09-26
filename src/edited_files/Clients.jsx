import React from 'react';

const clientsData = [
  // Row 1
  { name: "CIBA Vision", logo: "/logos/ciba-vision.png" },
  { name: "INKA Multi Service", logo: "/logos/inka-Small.png" },
  { name: "UNPAD", logo: "/logos/unpad.png" },
  { name: "Trio", logo: "/logos/trio.png" },
  { name: "Astra Infra", logo: "/logos/astra-infra.png" },
  
  // Row 2
  { name: "Agit", logo: "/logos/agit-Small.png" },
  { name: "Tower Bersama Group", logo: "/logos/tower-bersama-Small.png" },
  { name: "Peruri", logo: "/logos/peruri-Small.png" },
  { name: "Telkomsel", logo: "/logos/telkomsel-Small.png" },
  { name: "Telkom Indonesia", logo: "/logos/telkom-indonesia.png" },
  
  // Row 3
  { name: "BCA", logo: "/logos/BCA.png" },
  { name: "Infomedia", logo: "/logos/infomedia.png" },
  { name: "Yayasan Pendidikan Warga", logo: "/logos/yayasan.png" },
  { name: "Nestle", logo: "/logos/nestle.png" },
  { name: "Pegadaian", logo: "/logos/pegadaian.png" }
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Major Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with some of Indonesia's most respected organizations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {clientsData.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="flex items-center justify-center min-h-[80px]">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
