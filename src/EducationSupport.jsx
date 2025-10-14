import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const EducationSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-teal-600">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Education Support</span>
        </div>
      </div>

      {/* Header Section with Gradient Banner */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Education Support
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Providing support for educational institutions to thrive in the
              digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">
                Program pengembangan sosial dan komunitas ini ditujukan untuk:
              </h2>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                <li>Pengurus Yayasan Pendidikan, khususnya swasta</li>
                <li>Tim kantor Yayasan Pendidikan</li>
                <li>Eksekutif manajemen sekolah/ universitas:</li>
                <ul className="list-circle list-inside ml-6 space-y-1">
                  <li>Kepala sekolah dan para wakasek</li>
                  <li>Ketua sekolah tinggi dan para wakil ketua</li>
                  <li>Rektor dan para wakil rector</li>
                </ul>
              </ul>
              <h2 className="text-2xl font-semibold mb-4">
                Program ini bukan program 'fund raising'
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Melainkan, bantuan TS dalam bentuk sharing dan coaching dengan
                tujuan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Menyegarkan system dan praktek manajemen dan governance
                  sekolah/ universitas
                </li>
                <li>
                  Menyelaraskan proses kerja sekolah dan universitas dengan
                  Teknik/ cara baru yang sudah jamak digunakan pada organisasi
                  yang masuk ke era ekonomi digital
                </li>
                <li>
                  Menyiapkan sekolah/universitas untuk melanjutkan perjalanan
                  dan tetap relevan dengan gaya hidup digital, sehingga
                  sekolah/universitas tetap relevan dimata Gen Z, Alpha, Beta
                  dst
                </li>
              </ul>
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Permintaan Layanan Dukungan Untuk Lembaga Pendidikan (Edu
                Support) TS Gratis
              </h2>
              <div>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfENKVJOFR0R8n9YaD1YwNxbtv4-Jq34tpRSHckWLg9NldMzA/viewform?embedded=true"
                  width="100%"
                  height="1000px"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Education Support Application Form"
                >
                  Loading...
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EducationSupport
