"use client"
import { Calendar, Clock } from "lucide-react"

export default function TrustUsComponent() {
  return (
    <div className="flex flex-row w-full max-w-[1616px] mx-auto px-4 py-16 gap-16 justify-between mt-[150px]">
      {/* Left side - CTA */}
      <div className="flex flex-col justify-center w-[500px]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#375281] mb-4">Trust Us, We&apos;ve Got You Covered!</h2>
        <p className="text-gray-600 mb-8">
          Join our happy customers and deliver seamless, efficient support with the right tools!
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-[#e9d8f0] text-[#6a3093] rounded-md hover:bg-[#e0c9ea] transition-colors">
            Such a demo
          </button>
          <button className="px-6 py-3 bg-[#8a4baf] text-white rounded-md hover:bg-[#7a3e9d] transition-colors">
            Start 30-days Free Trial
          </button>
        </div>
      </div>

      {/* Right side - Calendar/Scheduling Interface */}
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Real-Time Marketing</h3>
                <p className="text-xs text-gray-500">Manage your bookings in real-time with your partners</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-purple-600 text-white text-xs rounded">Schedule</button>
                <button className="px-3 py-1 bg-white text-gray-600 text-xs border border-gray-300 rounded">
                  View Stats
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Interface */}
          <div className="p-4 flex gap-2">
            {/* Left sidebar */}
            <div className="w-12 bg-gradient-to-b from-purple-800 to-purple-600 rounded-md flex flex-col items-center py-2">
              <div className="w-8 h-8 bg-white rounded-full mb-2"></div>
              <div className="w-6 h-1 bg-white/50 rounded-full my-1"></div>
              <div className="w-6 h-1 bg-white/50 rounded-full my-1"></div>
            </div>

            {/* Calendar grid */}
            <div className="flex-1 grid grid-cols-3 gap-3">
              <div className="bg-gray-100 p-3 rounded-md flex flex-col">
                <div className="text-purple-800 font-bold text-xl">5</div>
                <div className="flex items-baseline">
                  <span className="text-purple-600 font-bold">+4</span>
                  <span className="text-gray-500 text-xs ml-1">+1</span>
                </div>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <div className="text-sm text-gray-600">1o-5s</div>
                <div className="text-sm text-gray-600">4s</div>
              </div>

              <div className="bg-gray-100 p-3 rounded-md flex items-center justify-center">
                <div className="text-2xl font-bold">1</div>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <div className="text-xl font-bold">25</div>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <div className="text-xl font-bold">27</div>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <div className="text-xl font-bold text-purple-800">227</div>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <div className="text-sm text-gray-600">1o-5s</div>
                <div className="text-sm text-gray-600">9s</div>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <div className="text-sm text-gray-600">10s-5s</div>
              </div>

              <div className="bg-gray-100 p-3 rounded-md flex items-center justify-center">
                <div className="text-purple-800 text-xl font-bold">27%</div>
              </div>

              <div className="bg-gray-100 p-3 rounded-md flex flex-col">
                <div className="text-xl font-bold">11</div>
                <div className="flex items-baseline">
                  <span className="text-gray-500 text-xs">+3</span>
                  <span className="text-gray-500 text-xs ml-1">+7</span>
                </div>
              </div>

              <div className="bg-gray-100 p-3 rounded-md flex items-center justify-center">
                <div className="text-xl font-bold">42</div>
                <div className="text-xs text-gray-500">+1</div>
              </div>
            </div>
          </div>

          {/* Bottom icons */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between">
              <div className="flex flex-col items-center max-w-[120px]">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 text-gray-500" />
                </div>
                <p className="text-xs text-center text-gray-500">Schedule meetings automatically</p>
              </div>

              <div className="flex flex-col items-center max-w-[120px]">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-400"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-0.5 bg-gray-400 rotate-45"></div>
                      <div className="w-4 h-0.5 bg-gray-400 -rotate-45"></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-500">Block unwanted time slots</p>
              </div>

              <div className="flex flex-col items-center max-w-[120px]">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-gray-500" />
                </div>
                <p className="text-xs text-center text-gray-500">Real-time availability updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
