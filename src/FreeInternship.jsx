import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import growThroughUsImage from './assets/grow-through-us.jpg'

const FreeInternship = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-teal-600">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Free Internship Program</span>
        </div>
      </div>

      {/* Header Section with Gradient Banner */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Free Internship Program
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              TalentSource opens internship and on-the-job experience programs
              for students and young professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="lg:col-span-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is an ideal ‘on-boarding’ program for participants before
                joining any real activities and career in life. Participants
                will be assigned a real project with real targets; all will be
                done digitally and an experienced mentor where real-life
                experience will become a unique precious value.
              </p>
              <img
                src={growThroughUsImage}
                alt="Grow Through Us"
                className="w-full h-auto rounded-lg shadow-md mb-8"
              />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Various professional areas, ranging from specific skill until
                more managerial, are available in this ‘Grow Through Us’ program
                which all related to digital knowledge and skill such as:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                <li>Human resource management</li>
                <li>Marketing and commerce</li>
                <li>Data science</li>
                <li>Process automation</li>
                <li>Build and grow start-up business</li>
                <li>Software development lifecycle (software engineering)</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Participants can exercise its maximum capacity and develop its
                early stage of its professional strength through this honest and
                helpful no-nonsense program which is unique to TS. Participants
                maintain its full freedom not to join TS after the program and
                pursue its career in other opportunity. Those who perform and
                decide to join TS group business are also welcome.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Depending on the volume of participants’ interest, if required,
                TS will get more industry experienced senior volunteers,
                including those who work in global companies in Indonesia, to
                spare their time and energy to provide mentorship service to
                this program.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Interested students and fresh graduate (S1 and S2) may apply for
                the programs by notifying us via our chat and email contacts AND
                complete the following Application Form :
              </p>
              <p className="text-xl font-bold text-teal-600 leading-relaxed mb-8">
                Let TalentSource be your reliable support to get into the real
                journey of your life !
              </p>
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Permintaan Free Internship Program
              </h2>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeaJEZQk4lfmKacshnVV5vNoWtuwj2wOnc2Ab-2hg8BxtsV_w/viewform?embedded=true"
                width="100%"
                height="1000px"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Free Internship Application Form"
              >
                Loading...
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FreeInternship
