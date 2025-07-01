import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 bg-white min-h-screen">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <button
              className="bg-yellow-200 text-sm text-gray-800 font-medium px-4 py-1 rounded hover:bg-yellow-300 transition"
            >
              Contact Us
            </button>
    
            <p className="text-gray-700 text-base md:text-lg">
              We might be powered by tech, but we never forget the human touch. Everything you need is right within our platforms, but if you ever need support or just want to reach out we’re always here. Let’s connect.
            </p>
    
            <div className="text-sm md:text-base">
              <p><span className="font-medium text-gray-500">Call:-</span> <span className="font-semibold text-gray-800">+234 7083575143</span></p>
              <p><span className="font-medium text-gray-500">Email:-</span> <span className="font-semibold text-gray-800">kenei.health@gmail.com</span></p>
              <p><span className="font-medium text-gray-500">Address:-</span> <span className="font-semibold text-gray-800">Oribanwa phase 1, Lagos, Nigeria</span></p>
            </div>
          </div>
    
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/imagesd.jpg" // Place the image in public folder with this name
                alt="Customer Service"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
  )
}

export default Contact