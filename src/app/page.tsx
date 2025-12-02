"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Eye, Stethoscope, BookOpen, Monitor, Droplets, Ear } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Droplets,
    title: "Blood Donation Camp",
    description: "Regular blood donation camps and blood group testing to serve the community.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Eye,
    title: "Free Eye Camp",
    description: "Comprehensive eye checkups and free spectacles distribution for the needy.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Stethoscope,
    title: "Free Medical Camp",
    description: "General health checkups with free medicine distribution to underprivileged.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Ear,
    title: "ENT Camp",
    description: "Hearing loss detection and affordable hearing aid project for the community.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BookOpen,
    title: "Educational Support",
    description: "Free uniforms, notebooks, and educational materials for underprivileged students.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Monitor,
    title: "Computer Coaching",
    description: "Free computer training classes to empower youth with digital skills.",
    color: "bg-cyan-100 text-cyan-600",
  },
];

const galleryImages = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-6-1764692142031.jpeg?width=8000&height=8000&resize=contain",
    alt: "Mahatma Old Age Home Residents",
    title: "Our Beloved Residents",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-5-1764693422575.jpeg?width=8000&height=8000&resize=contain",
    alt: "Residents Playing Snakes and Ladders",
    title: "Board Games Fun",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-4-1764693422806.jpeg?width=8000&height=8000&resize=contain",
    alt: "Fun Activities and Games",
    title: "Joyful Moments",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-3-1764693423094.jpeg?width=8000&height=8000&resize=contain",
    alt: "Traditional Pallanguzhi Game",
    title: "Traditional Games",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-2-1764693422736.jpeg?width=8000&height=8000&resize=contain",
    alt: "Carrom Board Game",
    title: "Indoor Games",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-2-1764692142513.jpeg?width=8000&height=8000&resize=contain",
    alt: "Recreation Activities",
    title: "Recreation Activities",
  },
];

export default function Home() {
  return (
    <div className="bg-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-100 to-green-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" fill="currentColor" />
                Since 2002
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Welcome to <br />
                <span className="text-green-700">Mahatma Old Age Home</span>
              </h1>
              <p className="text-lg text-gray-600">
                மகாத்மா முதியோர் இல்லம் - A place where our elders find love, care, and dignity. 
                We provide comprehensive support to senior citizens and serve the community through various social welfare programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg">
                    Learn More
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-100 px-8 py-6 text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-6-1764692142031.jpeg?width=8000&height=8000&resize=contain"
                  alt="Mahatma Old Age Home Residents"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-700">22+</p>
                    <p className="text-sm text-gray-600">Years of Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond caring for our elders, we actively serve the community through various social welfare programs and health camps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button className="bg-green-700 hover:bg-green-800 text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Life at Mahatma Old Age Home</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into the warm and caring environment we provide for our beloved elders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-medium p-4">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery">
              <Button className="bg-green-700 hover:bg-green-800 text-white">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Cause</h2>
          <p className="text-green-100 max-w-2xl mx-auto mb-8">
            Your contribution can make a significant difference in the lives of our elders and the community we serve. 
            Every donation helps us provide better care and expand our services.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-green-700 hover:bg-green-50 px-8 py-6 text-lg font-semibold">
              Donate Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
