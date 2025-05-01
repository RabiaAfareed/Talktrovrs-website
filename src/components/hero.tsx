"use client"

import { Play, MessageCircle } from "lucide-react"
import { Button } from "./ui/button"

export default function HeroSection() {
  return (
    <div className="relative w-full h-[702px] mb-[150px] overflow-hidden bg-gradient-to-br from-[#c5c5da] via-[#15181b] to-[#0a1a2a]">
      {/* Wavy background overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "/first.png",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Looking for <span className="text-white">Chatfuel</span> alternative?
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12">Upgrade to Talktrives for smarter Conversations</p>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            </div>
            <span className="text-sm md:text-base">3-Day Free Trial</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            </div>
            <span className="text-sm md:text-base">No Credit Card</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            </div>
            <span className="text-sm md:text-base">Free Chat Support</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            </div>
            <span className="text-sm md:text-base">Customer Service 24/7</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-purple-400 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
            Get Started | 30 days free
          </Button>

          <Button className="bg-purple-400 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
            <Play className="w-4 h-4 mr-2" /> Watch Video
          </Button>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="absolute bottom-4 right-4">
        <Button className="bg-purple-400 hover:bg-purple-700 text-white rounded-md flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Contact Us
        </Button>
      </div>
    </div>
  )
}
