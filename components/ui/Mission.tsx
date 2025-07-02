import React from 'react'
import Image from 'next/image'

const Mission = () => {
  return (
    <section  className="w-full px-4 py-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Text Box */}
            <div data-aos="zoom-in" className="bg-[#031C17] text-white rounded-xl p-6 md:p-10 shadow-md">
              <span className="inline-block text-sm text-yellow-300 font-semibold bg-[#1C3A33] px-4 py-1 rounded mb-4">
                Mission & Statement
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                We’re on a mission to revolutionize Africa’s future through tech and AI
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                At KenEi Health, our mission is to empower individuals to take control of their well-being by providing accessible, personalized, and comprehensive healthcare solutions. We strive to bridge the gap between patients and healthcare professionals, fostering a supportive community that prioritizes preventive care, early intervention, and holistic wellness. Through our innovative platform, we aim to make quality healthcare more accessible, convenient, and affordable for all
              </p>
            </div>
    
            {/* Right Image Box */}
            <div className="overflow-hidden rounded-xl shadow-md">
              <Image
              data-aos="zoom-in"
                src="/images/female.jpg"
                alt="AI woman"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
  )
}

export default Mission