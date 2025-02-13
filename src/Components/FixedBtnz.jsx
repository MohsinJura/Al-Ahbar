import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { MdPhone } from 'react-icons/md'

const FixedBtnz = () => {
  return (
    <div>
        {/* WhatsApp Button */}
        <div className="fixed bottom-16 left-4">
            <a href="https://wa.me/971563271614" className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
            <FaWhatsapp className="text-xl" />
            <span>+971563271614</span>
            </a>
        </div>
        {/* Phone Button */}
        <div className="fixed bottom-4 left-4">
            <a href="https://wa.me/971563271614" className="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
              <MdPhone className="text-xl" />
              <span> +971563271614 </span>
            </a>
        </div>
    </div>
  )
}

export default FixedBtnz