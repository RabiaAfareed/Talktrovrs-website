"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


export default function TalkTrovesFooter() {
  const [email, setEmail] = useState("")

  return (
    <footer className="w-full bg-[#e6d9f2] py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* First row - Main navigation categories */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 border-b border-gray-300">
          {/* TalkTroves Column */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-[#5d4b8c] flex items-center justify-center mr-2">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <h3 className="text-[#5d4b8c] font-semibold">TalkTroves</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Alternatives
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-[#5d4b8c] font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Support Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Data Migration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  System Status
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Change Log
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Request for Proposal
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[#5d4b8c] font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Awards & Certificates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  VoIP Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h3 className="text-[#5d4b8c] font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Typing Test
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Code calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Column */}
          <div>
            <h3 className="text-[#5d4b8c] font-semibold mb-4">Popular</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Knowledge base software
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Customer service software
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  VoIP phone systems
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Self-service software
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Inbound call center software
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Complaint management system
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Client portal software
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#5d4b8c]">
                  Help desk software for startups
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Second row - Other sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {/* Sales Contacts */}
          <div>
            <h3 className="text-[#5d4b8c] font-semibold mb-4">Sales Contacts</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-700">+44 1632 123456</li>
              <li className="text-sm text-gray-700">+1 1322252019</li>
              <li className="text-sm text-gray-700">talktroves@gmail.com</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-[#5d4b8c] font-semibold mb-4">Socials</h3>
            <div className="flex space-x-3">
              <Link href="#" className="w-8 h-8 rounded-full bg-[#3b5998] flex items-center justify-center text-white">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-[#c32aa3] flex items-center justify-center text-white">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-[#1da1f2] flex items-center justify-center text-white">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-[#0a66c2] flex items-center justify-center text-white">
                <Linkedin size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-[#ff0000] flex items-center justify-center text-white">
                <Youtube size={16} />
              </Link>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-[#5d4b8c] font-semibold mb-4">Reviews</h3>
            <div className="flex items-center space-x-2">
              <div className="bg-[#00b67a] text-white px-2 py-1 rounded text-xs flex items-center">
                <span className="mr-1">Trustpilot</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#5d4b8c] font-semibold mb-4">Subscribe to our newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Try your e-mail for update"
                  className="w-full border-gray-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button className="bg-[#5d4b8c] hover:bg-[#4a3a70]">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-600 mt-2">Get the latest news about TalkTroves updates and discounts.</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 pt-6 border-t border-gray-300 flex flex-wrap justify-end gap-4 text-sm text-gray-600">
          <Link href="#" className="hover:text-[#5d4b8c]">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-[#5d4b8c]">
            Security Policy
          </Link>
          <Link href="#" className="hover:text-[#5d4b8c]">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-[#5d4b8c]">
            GDPR
          </Link>
          <Link href="#" className="hover:text-[#5d4b8c]">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  )
}
