"use client"

import { MessageSquare, Zap, BarChart3, AlertTriangle, Code, Layers } from "lucide-react"

export default function DidYouKnow() {
  return (
    <div className="flex justify-between items-center max-w-[1436px] h-[695px] mx-auto p-12 rounded-lg">
      {/* Left side - Text content */}
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Did You Know?</h2>
        <p className="text-gray-600 mb-4">
          Talktroves provides free live chat functionality, allowing instant interaction between your audience and
          website visitors.
        </p>
        <p className="text-gray-600">Engage in real-time conversations and improve customer experience effortlessly.</p>
      </div>

      {/* Right side - Circular flow diagram */}
      <div className="relative w-[400px] h-[400px]">
        {/* Center icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center z-10">
          <MessageSquare className="w-10 h-10 text-white" />
        </div>

        {/* Surrounding icons with connecting arrows */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center">
          <Zap className="w-8 h-8 text-white" />
        </div>

        <div className="absolute top-[25%] right-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
          <Layers className="w-8 h-8 text-white" />
        </div>

        <div className="absolute bottom-[25%] right-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-white" />
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
          <Code className="w-8 h-8 text-white" />
        </div>

        <div className="absolute bottom-[25%] left-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>

        <div className="absolute top-[25%] left-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>

        {/* Connecting arrows */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#d8b4fe" />
            </marker>
          </defs>

          {/* Curved paths connecting the icons */}
          <path
            d="M 200 40 Q 250 80 320 100"
            fill="none"
            stroke="#d8b4fe"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M 320 100 Q 350 150 320 300"
            fill="none"
            stroke="#d8b4fe"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M 320 300 Q 280 350 200 360"
            fill="none"
            stroke="#d8b4fe"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M 200 360 Q 120 350 80 300"
            fill="none"
            stroke="#d8b4fe"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <path d="M 80 300 Q 50 150 80 100" fill="none" stroke="#d8b4fe" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M 80 100 Q 150 80 200 40" fill="none" stroke="#d8b4fe" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
      </div>
    </div>
  )
}
