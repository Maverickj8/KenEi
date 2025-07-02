import React from "react";
import Image from "next/image";
import Link from "next/link";

const Solution = () => {
  const slides = [
    {
      id: 1,
      title: "My Edu Fusion",
      description: `A groundbreaking healthcare platform delivering quality medical services to remote areas. Impact: On track to provide healthcare access to 100,000+ individuals by 2025`,
      image: "/images/fusion.png",
    },
    {
      id: 2,
      title: "KenEi Health",
      description: `At KenEi Solutions, we’re driven by a singular mission: to harness
                the power of technology and AI to tackle the most pressing
                challenges facing Africa, especially in underserved communities.`,
      image: "/images/doct.jpg",
    },
    {
      id: 3,
      title: "Kenei Finance (Coming Soon)",
      description: `Innovative financial tools designed to promote inclusion and empower the unbanked. Impact Goal: Facilitate financial access for 50,000+ Africans by 2027.`,
      image: "/images/Frame 25.png",
    },
  ];
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-gray-800 text-3xl md:text-4xl font-bold mb-4">
          Our Solutions & Impact
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Kenei Solutions, our products are more than just tools, they are
          engines of change, designed to solve real problems across Africa’s
          most underserved regions. Here’s how we’re using technology and AI to
          transform lives:
        </p>
      </div>

      <Link href="https://myedufusion.com/">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {slides.map((slide, index) => (
          <div key={slide.id} className="bg-white p-4 rounded-lg">
            <p className="text-sm text-gray-500 font-semibold mb-1">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </p>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
              {slide.title}
            </h3>
            <p className="text-gray-600 mb-4">{slide.description}</p>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="rounded-xl overflow-hidden border-t-8 border-teal-300"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      </Link>
      
    </section>
  );
};

export default Solution;
