"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
// import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Mission from "@/components/ui/Mission";
import Story from "@/components/ui/Story";
import Solution from "@/components/ui/Solution";
import Contact from "@/components/ui/Contact";

export default function Home() {
  // const [showMore, setShowMore] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed Email:", email);
    setEmail("");
  };

  // const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div
        className="relative min-h-full bg-cover bg-center text-gray-800"
        style={{ backgroundImage: "url(/images/man.jpg)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-10"></div>

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-20">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Simplification.png"
              alt="Logo"
              width={30}
              height={30}
            />
            <span className="font-bold text-lg text-[#333434]">
              KENEI Solutions
            </span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-[#5B5D5D]">
            <Link href="/" className="hover:text-[#005642] cursor-pointer">
              Home
            </Link>
            <Link
              href="/mission"
              className="hover:text-[#005642] cursor-pointer"
            >
              Mission Statement
            </Link>
            <Link href="/story" className="hover:text-[#005642] cursor-pointer">
              Our Story
            </Link>
            <Link
              href="/solution"
              className="hover:text-[#005642] cursor-pointer"
            >
              Our Solutions & Impact
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#005642] cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded-md text-sm hover:bg-[#005642]">
            Get Started
          </button>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-[#333434] px-6 py-20 md:py-32">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex -space-x-2">
              <Image
                src="/images/man.jpg"
                alt="user"
                width={24}
                height={24}
                className="rounded-full border"
              />
              <Image
                src="/images/man2.jpg"
                alt="user"
                width={24}
                height={24}
                className="rounded-full border"
              />
              <Image
                src="/images/man.jpg"
                alt="user"
                width={24}
                height={24}
                className="rounded-full border"
              />
            </div>
            <span className="text-sm">
              Over 100,000+ Healthcare access by 2025
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl">
            Empowering Africa Through Technology & AI
          </h1>
          <p className="max-w-xl text-sm md:text-base mb-6">
            Innovative solutions in healthcare, finance, housing, and education
            for underserved communities.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-700 px-6 py-2 rounded-md text-white text-sm hover:bg-green-600">
              Explore Our Impact
            </button>
            <button className="border border-green-700 px-6 py-2 rounded-md text-green-700 text-sm hover:bg-green-700 hover:text-white">
              Learn more
            </button>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="relative z-10 bg-white px-4 py-10 md:py-20 md:px-20">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-md">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/Frame 16.png"
                alt="Highlight 1"
                width={500}
                height={500}
                className="rounded-xl"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/Frame 18.png"
                alt="Highlight 2"
                width={500}
                height={500}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Mission />
      <Story />
      <Solution />
      <Contact />
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 bg-[#f3f8f5] min-h-screen">
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="w-64 h-64 md:w-96 md:h-96 relative">
            <Image
              src="/images/blackww.png" // Add the image to your public folder with this name
              alt="Smiling Woman"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="md:w-1/2 w-full max-w-md bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/images/Simplification.png"
              alt="KENEI Logo"
              width={30}
              height={30}
            />
            <h2 className="text-lg font-semibold text-gray-800">
              KENEI Solutions
            </h2>
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Subscribe to our Newsletter!
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Stay updated on how we’re changing Africa.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="w-full border rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12H8m8 0a4 4 0 01-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-800 hover:bg-emerald-700 text-white py-2 rounded-full text-sm font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-white border-t py-12 px-6 md:px-16 text-sm text-gray-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/Simplification.png"
                alt="KENEI Logo"
                width={30}
                height={30}
              />
              <span className="text-base font-semibold">KENEI Solutions</span>
            </div>
            <p className="mb-4 max-w-sm">
              KenEi Health Solutions is transforming access to healthcare
              through innovation. We deliver AI powered, virtual medical
              services designed to be accessible, affordable, and reliable for
              individuals in Nigeria’s underserved communities, and beyond. Your
              health, our mission.
            </p>
            <div className="flex space-x-4 text-gray-600">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">Mission</Link>
              </li>
              <li>
                <Link href="#">Our Story</Link>
              </li>
              <li>
                <Link href="#">Solutions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">AI-Assisted Medical Consultations</Link>
              </li>
              <li>
                <Link href="#">Virtual Doctor Appointments</Link>
              </li>
              <li>
                <Link href="#">Health Monitoring & Wellness Tools</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">Help</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-12">
          2025 KenEi Solutions Inc.
        </p>
      </footer>
    </>
  );
}
