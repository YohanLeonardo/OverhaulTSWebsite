import React, { useState } from 'react'
import { X, ChevronLeft, Send } from 'lucide-react'
import whatsappIcon from './assets/WhatsApp.svg.webp'
import frigardIcon from './assets/firgard-Small.png'

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (phoneNumber && message) {
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(
        /[^0-9]/g,
        ''
      )}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      setPhoneNumber('')
      setMessage('')
      setIsChatOpen(false)
      setIsOpen(false)
    } else {
      alert('Please enter your WhatsApp number and message.')
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          className="bg-green-500 text-white text-xl rounded-full px-8 py-4 shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-3"
          onClick={() => setIsOpen(true)}
        >
          <img src={whatsappIcon} alt="WhatsApp Icon" className="h-8 w-8" />
          <span>Contact us!</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
          {!isChatOpen ? (
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Halo, ada yang bisa kami bantu?
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <button
                className="bg-green-500 text-white rounded-full px-4 py-3 w-full flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors"
                onClick={() => setIsChatOpen(true)}
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp Icon"
                  className="h-5 w-5"
                />
                <span>Chat via WhatsApp</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <div className="bg-green-500 text-white p-4 flex items-center justify-between">
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:text-gray-100"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <h3 className="text-lg font-semibold">Customer Support</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-center mb-4">
                  <img
                    src={frigardIcon}
                    alt="Frigard"
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Business Development
                    </p>
                    <p className="text-gray-600 text-sm">Frigard</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Our customer support team is here to answer your questions.
                  Ask us anything!
                </p>
                <input
                  type="text"
                  placeholder="Masukan nomor Whatsapp anda.."
                  className="w-full p-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <textarea
                  placeholder="Ketik pesan anda disini..."
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  className="bg-green-500 text-white rounded-full p-3 w-full flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors"
                  onClick={handleSendMessage}
                >
                  <Send className="h-5 w-5" />
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default WhatsAppPopup
