import React from 'react'
import Image from 'next/image'

const Story = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#D4E8E5] px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
            {/* LEFT */}
            <div className="relative z-10">
              <span className="inline-block text-sm text-white bg-yellow-400 px-4 py-1 rounded mb-4 font-medium">
                Our Story
              </span>
    
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Our Existence <br /> Explained
              </h2>
    
              <div className="flex gap-12 mt-10">
                <div>
                  <p className="text-3xl font-bold text-black">100,000+</p>
                  <p className="text-sm text-gray-700">Healthcare access</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-black">200,000+</p>
                  <p className="text-sm text-gray-700">Students</p>
                </div>
              </div>
            </div>
    
            {/* RIGHT */}
            <div data-aos="fade-down-left" className="bg-[#031C17] text-white p-6 md:p-10 rounded-2xl shadow-lg">
              <p className="text-sm leading-relaxed mb-6">
                Founded in <strong>2018</strong>, KenEi Solutions emerged from a clear
                need to help organizations simplify complex information and
                transform it into powerful, actionable solutions. We exist to make
                innovation accessible — distilling technology into its most impactful
                form for real-world change.
              </p>
              <p className="text-sm leading-relaxed mb-6">
                At KenEi Solutions, we’re driven by a singular mission: to harness
                the power of technology and AI to tackle the most pressing
                challenges facing Africa, especially in underserved communities.
                From healthcare and housing to finance and education, we’re committed
                to creating innovative solutions that make a tangible difference in
                people’s lives. Our journey began with a simple yet profound belief:
                that technology can be a force for good, bridging gaps and creating
                opportunities where they’re needed most.
              </p>
              <p className="text-sm leading-relaxed">
                KenEi Solutions turns complexity into clarity transforming advanced
                technology into simple, impactful solutions for everyday challenges.
              </p>
            </div>
          </div>
    
          {/* BACKGROUND IMAGE OVERLAY */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
            <Image
              src="/images/man2.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </section>
  )
}

export default Story