import { Link } from "react-router-dom";
import { Heart, Target, Users, Award, Calendar, MapPin, Phone, Mail, Home, Utensils, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const milestones = [
  { year: "2002", event: "Mahatma's Trust established" },
  { year: "2005", event: "Started free medical camps" },
  { year: "2008", event: "Launched educational support program" },
  { year: "2010", event: "Started free eye camps" },
  { year: "2015", event: "Computer coaching program initiated" },
  { year: "2020", event: "Expanded ENT camp services" },
];

const teamMembers = [
  { 
    name: "J.R. Ramesh", 
    role: "Founder",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/608a9faa-50d3-43b0-b0a3-d55885037b75/generated_images/professional-portrait-photograph-of-a-mi-370ced8f-20251202164644.jpg"
  },
  { 
    name: "T.R. Kumaran", 
    role: "Secretary",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/608a9faa-50d3-43b0-b0a3-d55885037b75/generated_images/professional-portrait-photograph-of-a-mi-28544ab5-20251202164644.jpg"
  },
  { 
    name: "M.R. Premkumar", 
    role: "Treasurer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/608a9faa-50d3-43b0-b0a3-d55885037b75/generated_images/professional-portrait-photograph-of-a-mi-69c60279-20251202164644.jpg"
  },
];

const facilities = [
  {
    icon: Home,
    title: "Comfortable Living",
    description: "Spacious, well-ventilated rooms with comfortable beds and furniture for our residents.",
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    description: "Three healthy, balanced meals daily prepared with love and care by our dedicated staff.",
  },
  {
    icon: Activity,
    title: "Healthcare",
    description: "Regular health checkups, medication management, and 24/7 emergency care support.",
  },
  {
    icon: Users,
    title: "Social Activities",
    description: "Games, cultural programs, and recreational activities to keep our elders engaged and happy.",
  },
];

export default function About() {
  return (
    <div className="bg-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Mahatma Old Age Home - A sanctuary of love, care, and dignity for our senior citizens since 2002.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Mahatma's Trust was established in 2002 with a simple yet powerful vision - 
                to provide a loving home for senior citizens who need care and support. Our dedication 
                to social service stems from the belief that every elder deserves to live their golden 
                years with dignity and happiness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we have expanded our services beyond elderly care to include 
                various community welfare programs such as free medical camps, eye camps, blood donation 
                drives, and educational support for underprivileged children.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Mahatma Old Age Home stands as a beacon of hope for countless families, 
                providing not just shelter but a vibrant community where our elders can thrive, 
                engage in meaningful activities, and enjoy their retirement years surrounded by care.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">22+ Years of Service</p>
                  <p className="text-gray-600 text-sm">Dedicated to community welfare</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-6-1764692142031.jpeg?width=8000&height=8000&resize=contain"
                    alt="Mahatma Old Age Home Residents"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive care and amenities to ensure our residents live comfortably and happily.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a safe, comfortable, and loving environment for senior citizens, 
                ensuring they receive proper care, nutritious food, medical attention, and 
                meaningful social engagement. We also strive to serve the broader community 
                through health camps and educational initiatives.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a society where every elderly person is treated with respect and 
                dignity, and where the underprivileged have access to healthcare and education. 
                We envision expanding our services to reach more people in need across Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our service to the community</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 hidden md:block"></div>
                  <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center z-10 mx-4">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-green-50 rounded-xl p-6 shadow-md">
                      <p className="text-green-700 font-bold text-xl">{milestone.year}</p>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership</h2>
            <p className="text-gray-600">The dedicated team behind Mahatma's Trust</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden text-center shadow-lg">
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-green-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p>7/5, Sanjeevi Street, Meenakshi Nagar, Villapuram, Madurai - 625 012 (TN)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <p>0452-2679676, 4219676 | 94433 10634</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <p>mahatmatrustmadurai@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="mb-4 text-green-100">Visit us and see the difference you can make</p>
                <Link to="/contact">
                  <Button className="bg-white text-green-700 hover:bg-green-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
