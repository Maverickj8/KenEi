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
                Lorem ipsum dolor sit amet consectetur. A aliquet pretium faucibus magna. 
                Eget feugiat dignissim iaculis neque mi sit convallis urna et. 
                Sed sem egestas dictum elit. Pulvinar a nibh lacus eget turpis lectus eleifend nisi.
                Non metus nullam justo non aliquam tincidunt nibh nisl.
                Pulvinar arcu vitae ipsum leo sed pulvinar risus nisi.
                Felis faucibus morbi feugiat bibendum. 
                Lacus facilisis diam placerat cursus senectus dictum consectetur morbi.
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