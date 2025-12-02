"use client";

import Link from "next/link";
import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700">
                <Heart className="h-5 w-5 text-white" fill="currentColor" />
              </div>
              <span className="text-lg font-bold">
                Mahatma Old Age Home
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing loving care and a dignified life for senior citizens since 2002. 
              We believe every elder deserves respect, comfort, and happiness.
            </p>
          </div>

          {/* Main Branch */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Main Branch - Madurai</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-green-400" />
                <p>7/5, Sanjeevi Street, Meenakshi Nagar,<br />Villapuram, Madurai - 625 012</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-green-400" />
                <p>0452-2679676, 4219676</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-green-400" />
                <p>mahatmatrustmadurai@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Blood Donation Camp</li>
              <li>• Free Eye Camp</li>
              <li>• Free Medical Camp</li>
              <li>• ENT Camp</li>
              <li>• Educational Support</li>
              <li>• Computer Coaching</li>
            </ul>
          </div>

          {/* Quick Links & Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="pt-4 space-y-2">
              <h4 className="font-medium flex items-center gap-2 text-green-400">
                <Clock className="h-4 w-4" /> Visiting Hours
              </h4>
              <p className="text-sm text-gray-400">Daily: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bank Details */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gray-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center text-green-400">Donation Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-center">
              <div>
                <p className="text-gray-500">A/C Name</p>
                <p className="font-medium">MAHATMA&apos;S TRUST</p>
              </div>
              <div>
                <p className="text-gray-500">A/C No.</p>
                <p className="font-medium">1717172000006049</p>
              </div>
              <div>
                <p className="text-gray-500">IFSC Code</p>
                <p className="font-medium">KVBL0001717</p>
              </div>
              <div>
                <p className="text-gray-500">Bank</p>
                <p className="font-medium">Karur Vysya Bank, Madurai</p>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              80G Registration: AABTM1941RF20217 | Donations are tax exempt under Section 80G
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mahatma Old Age Home & Mahatma&apos;s Trust, Madurai. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Reg. No: 16/2002 | FCRA: 076040638
          </p>
        </div>
      </div>
    </footer>
  );
}
