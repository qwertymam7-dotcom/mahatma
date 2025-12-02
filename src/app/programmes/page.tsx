"use client";

import Image from "next/image";
import { Heart, GraduationCap, Users, Stethoscope, Eye, Droplets, TreePine, Book, Shirt, Monitor, Ear } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const healthPrograms = [
  {
    title: "Free Medical Camps",
    description: "Regular medical camps with free checkups and medicines for the community. Conducted in partnership with leading hospitals.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-8-1764692077888.jpeg?width=8000&height=8000&resize=contain",
    icon: Stethoscope,
  },
  {
    title: "Free Eye Camps",
    description: "Eye checkups, spectacle distribution, and cataract surgery assistance for the underprivileged elderly and community members.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-9-1764692077706.jpeg?width=8000&height=8000&resize=contain",
    icon: Eye,
  },
  {
    title: "Blood Donation Camps",
    description: "Organizing blood donation drives and blood group testing camps to serve the healthcare needs of the community.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-10-1764692077784.jpeg?width=8000&height=8000&resize=contain",
    icon: Droplets,
  },
  {
    title: "ENT & Hearing Aid Camps",
    description: "ENT checkups and affordable hearing aid distribution for those with hearing impairments.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-10-1764692077784.jpeg?width=8000&height=8000&resize=contain",
    icon: Ear,
  },
];

const educationPrograms = [
  {
    title: "Free Spoken English Classes",
    description: "English grammar and spoken English coaching for underprivileged students to improve their communication skills and career prospects.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-12-1764692077690.jpeg?width=8000&height=8000&resize=contain",
    icon: GraduationCap,
  },
  {
    title: "Free Uniforms & Notebooks",
    description: "Distribution of school uniforms, notebooks, and educational materials to students from economically weaker sections.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-7-1764692077671.jpeg?width=8000&height=8000&resize=contain",
    icon: Shirt,
  },
  {
    title: "Computer Training",
    description: "Free computer coaching classes to help students gain digital literacy and essential computer skills for the modern world.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-7-1764692077671.jpeg?width=8000&height=8000&resize=contain",
    icon: Monitor,
  },
  {
    title: "Educational Support",
    description: "Through Palkar Help Line (USA) partnership, providing comprehensive educational assistance to deserving students.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-12-1764692077690.jpeg?width=8000&height=8000&resize=contain",
    icon: Book,
  },
];

const communityPrograms = [
  {
    title: "Tree Plantation Drives",
    description: "Pasumai Naadu initiative - environmental awareness and tree plantation programs to create a greener tomorrow.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-11-1764692077717.jpeg?width=8000&height=8000&resize=contain",
    icon: TreePine,
  },
  {
    title: "National Day Celebrations",
    description: "Celebrating Independence Day, Republic Day, and other national festivals with patriotic fervor and community gatherings.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-13-1764692077715.jpeg?width=8000&height=8000&resize=contain",
    icon: Heart,
  },
];

const stats = [
  { number: "5000+", label: "Free Medical Checkups" },
  { number: "1000+", label: "Students Supported" },
  { number: "500+", label: "Eye Surgeries Assisted" },
  { number: "2000+", label: "Trees Planted" },
];

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-soft-blue-light to-peach-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-warm-orange font-medium text-sm uppercase tracking-wider">Our Impact</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-warm-brown mt-2 mb-6">
              Programmes & Activities
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Beyond elderly care, Mahatma&apos;s Trust actively contributes to society through 
              health, education, and community development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-warm-brown">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-3xl sm:text-4xl font-bold text-peach">{stat.number}</p>
                <p className="text-white/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Programs */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center">
              <Stethoscope className="h-7 w-7 text-red-500" />
            </div>
            <div>
              <span className="text-red-500 font-medium text-sm uppercase tracking-wider">Healthcare Initiatives</span>
              <h2 className="font-serif text-3xl font-bold text-warm-brown">Health Programs</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {healthPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center">
                      <program.icon className="h-5 w-5 text-red-500" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-warm-brown mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="py-20 bg-soft-blue-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
              <GraduationCap className="h-7 w-7 text-soft-blue" />
            </div>
            <div>
              <span className="text-soft-blue font-medium text-sm uppercase tracking-wider">Empowering Youth</span>
              <h2 className="font-serif text-3xl font-bold text-warm-brown">Education Programs</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {educationPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center">
                      <program.icon className="h-5 w-5 text-soft-blue" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-warm-brown mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
              <Users className="h-7 w-7 text-green-600" />
            </div>
            <div>
              <span className="text-green-600 font-medium text-sm uppercase tracking-wider">Building Together</span>
              <h2 className="font-serif text-3xl font-bold text-warm-brown">Community Development</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {communityPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-72">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 text-white mb-2">
                      <program.icon className="h-5 w-5" />
                      <h3 className="font-serif text-xl font-semibold">{program.title}</h3>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-warm-brown to-warm-brown/80 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Partner With Us
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              We collaborate with hospitals, educational institutions, government bodies, 
              and NGOs to maximize our impact. Join us in making a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 rounded-lg px-6 py-3 text-white">
                Rio Multispeciality Hospital
              </div>
              <div className="bg-white/10 rounded-lg px-6 py-3 text-white">
                TRL Trust
              </div>
              <div className="bg-white/10 rounded-lg px-6 py-3 text-white">
                Palkar Help Line (USA)
              </div>
              <div className="bg-white/10 rounded-lg px-6 py-3 text-white">
                Eye Foundation
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
