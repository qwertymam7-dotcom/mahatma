"use client";

import Image from "next/image";
import { Clock, Utensils, Coffee, Sun, Moon, Gamepad2, Book, Music, Users, Heart, Palette, TreePine } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dailySchedule = [
  { time: "5:30 AM", activity: "Wake Up & Morning Prayers", icon: Sun },
  { time: "6:30 AM", activity: "Morning Tea & Light Exercise", icon: Coffee },
  { time: "8:00 AM", activity: "Breakfast", icon: Utensils },
  { time: "9:00 AM", activity: "Personal Time / Medical Check", icon: Heart },
  { time: "11:00 AM", activity: "Recreational Activities", icon: Gamepad2 },
  { time: "12:30 PM", activity: "Lunch", icon: Utensils },
  { time: "2:00 PM", activity: "Rest / Nap Time", icon: Moon },
  { time: "4:00 PM", activity: "Evening Tea & Snacks", icon: Coffee },
  { time: "4:30 PM", activity: "Games & Social Time", icon: Users },
  { time: "6:30 PM", activity: "Evening Prayers", icon: Music },
  { time: "7:30 PM", activity: "Dinner", icon: Utensils },
  { time: "9:00 PM", activity: "Free Time & Bedtime", icon: Moon },
];

const leisureActivities = [
  {
    title: "Traditional Board Games",
    description: "Pallanguzhi, Parampadham (Snakes & Ladders), Daayam, and other classic Tamil games that keep minds sharp and spirits high.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-16-1764692077890.jpeg?width=8000&height=8000&resize=contain",
    icon: Gamepad2,
  },
  {
    title: "Cultural Programs",
    description: "Regular celebrations of festivals, Independence Day, Republic Day, and other national events with enthusiasm and joy.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-13-1764692077715.jpeg?width=8000&height=8000&resize=contain",
    icon: Music,
  },
  {
    title: "Reading & Storytelling",
    description: "Access to newspapers, books, and magazines. Regular storytelling sessions where residents share their life experiences.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-15-1764692077800.jpeg?width=8000&height=8000&resize=contain",
    icon: Book,
  },
  {
    title: "Group Activities",
    description: "Bhajan sessions, group exercises, yoga, and meditation to promote physical and mental well-being.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-14-1764692077899.jpeg?width=8000&height=8000&resize=contain",
    icon: Users,
  },
];

const amenities = [
  { icon: Utensils, title: "Nutritious Meals", description: "Three balanced, home-cooked meals with special diet options" },
  { icon: Heart, title: "Medical Care", description: "Regular health checkups and medical assistance on call" },
  { icon: Users, title: "Trained Staff", description: "Caring and trained caregivers available 24/7" },
  { icon: Palette, title: "Recreation Room", description: "Dedicated space for games, TV, and social activities" },
  { icon: TreePine, title: "Garden Area", description: "Beautiful garden space for morning walks and relaxation" },
  { icon: Book, title: "Library", description: "Collection of books, newspapers, and magazines" },
];

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-peach to-peach-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-warm-orange font-medium text-sm uppercase tracking-wider">Our Facilities</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-warm-brown mt-2 mb-6">
              Amenities & Daily Life
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We provide a comfortable, structured environment where our elderly residents 
              can enjoy their days with dignity, purpose, and joy.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-warm-orange font-medium text-sm uppercase tracking-wider">What We Provide</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-brown mt-2">
              Our Facilities
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-warm-orange/20 flex items-center justify-center mb-4">
                  <amenity.icon className="h-7 w-7 text-warm-orange" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-brown mb-2">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Timeline */}
      <section className="py-20 bg-soft-blue-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-soft-blue font-medium text-sm uppercase tracking-wider">Structured Care</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-brown mt-2">
              Daily Schedule
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A well-planned daily routine ensures our residents have a balanced day 
              with activities, rest, and social interaction.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-warm-orange/30 hidden md:block" />
              
              <div className="space-y-6">
                {dailySchedule.map((item, index) => (
                  <div key={index} className="relative flex items-center gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex w-16 h-16 rounded-full bg-white shadow-md items-center justify-center flex-shrink-0 z-10">
                      <item.icon className="h-6 w-6 text-warm-orange" />
                    </div>
                    
                    {/* Content card */}
                    <div className="flex-1 bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-3">
                          <div className="md:hidden w-10 h-10 rounded-full bg-peach-light flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-warm-orange" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-warm-orange" />
                            <span className="font-semibold text-warm-brown">{item.time}</span>
                          </div>
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-border" />
                        <p className="text-foreground ml-13 md:ml-0">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leisure Activities */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-warm-orange font-medium text-sm uppercase tracking-wider">Fun & Engagement</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-brown mt-2">
              Leisure Activities
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We believe in keeping our residents active and engaged through various 
              recreational activities that promote mental stimulation and social bonding.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {leisureActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <activity.icon className="h-5 w-5" />
                      <h3 className="font-serif text-xl font-semibold">{activity.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-warm-orange to-peach rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                  A Place to Call Home
                </h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  At Mahatma&apos;s Trust, we go beyond providing basic care. Our goal is to create 
                  a warm, family-like atmosphere where every resident feels valued, loved, and respected.
                </p>
                <ul className="space-y-3">
                  {[
                    "Personalized care plans for each resident",
                    "Regular family visits encouraged",
                    "Celebration of birthdays and special occasions",
                    "Mental health support and counseling",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-white" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-14-1764692077899.jpeg?width=8000&height=8000&resize=contain"
                  alt="Residents enjoying activities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
