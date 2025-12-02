"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, Stethoscope, Droplets, Ear, BookOpen, Monitor, Home, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Old Age Home",
    description: "Our primary service is providing a loving home for senior citizens. We offer comfortable accommodation, nutritious meals, medical care, and recreational activities to ensure our residents live their golden years with dignity and happiness.",
    features: ["24/7 Care & Support", "Nutritious Meals", "Medical Assistance", "Recreation Activities"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-6-1764692142031.jpeg?width=8000&height=8000&resize=contain",
    accent: "green",
  },
  {
    icon: Droplets,
    title: "Blood Donation Camp",
    description: "We organize regular blood donation camps in collaboration with local hospitals and blood banks. These camps help meet the critical demand for blood in our region and save countless lives.",
    features: ["Blood Group Testing", "Free Health Checkup", "Hemoglobin Testing", "Regular Camps"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-10-1764692142083.jpeg?width=8000&height=8000&resize=contain",
    accent: "red",
  },
  {
    icon: Eye,
    title: "Free Eye Camp",
    description: "In partnership with eye hospitals and foundations, we conduct free eye check-up camps. Patients receive comprehensive eye examinations, and those in need are provided with free spectacles or referred for surgery.",
    features: ["Eye Examination", "Free Spectacles", "Cataract Screening", "Surgery Referral"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-9-1764692141834.jpeg?width=8000&height=8000&resize=contain",
    accent: "blue",
  },
  {
    icon: Stethoscope,
    title: "Free Medical Camp",
    description: "Our medical camps provide free health checkups and medicine distribution to underprivileged communities. In collaboration with Rio Multispeciality Hospital, we ensure quality healthcare reaches those who cannot afford it.",
    features: ["General Checkup", "Free Medicines", "Specialist Consultation", "Health Awareness"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-8-1764692142077.jpeg?width=8000&height=8000&resize=contain",
    accent: "emerald",
  },
  {
    icon: Ear,
    title: "ENT Camp",
    description: "Our ENT camps focus on hearing loss detection and providing affordable hearing aids. This joint project helps many elderly and hearing-impaired individuals regain their ability to hear and communicate.",
    features: ["Hearing Tests", "Affordable Hearing Aids", "ENT Consultation", "Follow-up Care"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-10-1764692142083.jpeg?width=8000&height=8000&resize=contain",
    accent: "purple",
  },
  {
    icon: BookOpen,
    title: "Educational Support",
    description: "Through Palkar Help Line (U.S.A) partnership, we provide educational support to underprivileged students. This includes free uniforms, notebooks, school bags, and other essential educational materials.",
    features: ["Free Uniforms", "Notebooks & Stationery", "School Bags", "Educational Materials"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-7-1764692142279.jpeg?width=8000&height=8000&resize=contain",
    accent: "amber",
  },
  {
    icon: Monitor,
    title: "Computer Coaching",
    description: "We offer free computer coaching classes to empower youth with essential digital skills. These classes help students and job seekers develop computer literacy needed in today's digital world.",
    features: ["MS Office Training", "Internet Basics", "Typing Skills", "Certificate Course"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-7-1764692142279.jpeg?width=8000&height=8000&resize=contain",
    accent: "cyan",
  },
];

const accentColors: Record<string, { bg: string; text: string; light: string; border: string }> = {
  green: { bg: "bg-green-600", text: "text-green-600", light: "bg-green-100", border: "border-green-200" },
  red: { bg: "bg-red-600", text: "text-red-600", light: "bg-red-100", border: "border-red-200" },
  blue: { bg: "bg-blue-600", text: "text-blue-600", light: "bg-blue-100", border: "border-blue-200" },
  emerald: { bg: "bg-emerald-600", text: "text-emerald-600", light: "bg-emerald-100", border: "border-emerald-200" },
  purple: { bg: "bg-purple-600", text: "text-purple-600", light: "bg-purple-100", border: "border-purple-200" },
  amber: { bg: "bg-amber-600", text: "text-amber-600", light: "bg-amber-100", border: "border-amber-200" },
  cyan: { bg: "bg-cyan-600", text: "text-cyan-600", light: "bg-cyan-100", border: "border-cyan-200" },
};

const stats = [
  { label: "Residents Cared", value: "50+", icon: Users },
  { label: "Blood Camps", value: "100+", icon: Droplets },
  { label: "Eyes Treated", value: "5000+", icon: Eye },
  { label: "Years of Service", value: "22+", icon: Heart },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Minimal Hero */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-green-700 mb-4">
              <Star className="w-5 h-5" fill="currentColor" />
              <span className="text-sm font-semibold uppercase tracking-wide">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Care for 
              <span className="text-green-700"> Every Need</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From providing a loving home for the elderly to organizing health camps and educational programs, 
              we are committed to serving our community with compassion and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Services Sections */}
      {services.map((service, index) => {
        const colors = accentColors[service.accent];
        const isEven = index % 2 === 0;
        
        return (
          <section 
            key={index} 
            className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Floating Badge */}
                  <div className={`absolute -bottom-4 ${isEven ? '-right-4 md:right-8' : '-left-4 md:left-8'} ${colors.bg} text-white px-6 py-3 rounded-xl shadow-lg`}>
                    <div className="flex items-center gap-2">
                      <service.icon className="w-5 h-5" />
                      <span className="font-semibold text-sm">Service #{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`inline-flex items-center gap-2 ${colors.light} ${colors.text} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                    <service.icon className="w-4 h-4" />
                    {service.accent.charAt(0).toUpperCase() + service.accent.slice(1)} Initiative
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div 
                        key={fIndex} 
                        className={`flex items-center gap-3 p-3 rounded-lg ${colors.light} ${colors.border} border`}
                      >
                        <div className={`w-2 h-2 rounded-full ${colors.bg}`}></div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className={`${colors.bg} hover:opacity-90 text-white px-6 py-5 group`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Stats Banner */}
      <section className="bg-green-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-green-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Want to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your support can help us expand our services and reach more people in need. 
            Join us in our mission to serve the community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg">
                Donate Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-6 text-lg">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
