"use client"
import Image from "next/image"
import { Button } from "./ui/button"


export default function ChatfuelAlternativeBanner() {
  return (
    <div
      className="relative w-full max-w-[1720px] h-[588px] mx-auto my-8 p-6 md:p-10 bg-white border-4 border-blue-400 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[124px] overflow-hidden"
    
    >
      {/* Left side with trophy and people */}
      <div className="relative w-full md:w-1/2 h-full flex items-start justify-start">
      <Image
        src="/trophy.png"
        alt="Trophy"
        width={760.94189453125}
        height={505.34722900390625}
        style={{ objectFit: "contain" }}
        priority
        />
         
    </div>


      {/* Right side with text content */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 leading-tight">
          A Powerful Chatfuel
          <br />
          Alternative
        </h2>

        <p className="text-blue-800 text-lg">
          175+ help desk features, including ticketing, automation,
          <br />
          live chat, social networks, call center, and a customer portal
        </p>

        <p className="text-blue-800 text-lg">
          Get everything in one solution for just $39/month, eliminating
          <br />
          the needs for multiple tools.
        </p>

        <Button className="mt-4 bg-purple-400 hover:bg-purple-500 text-white px-8 py-2 rounded-md text-lg">
          Start Free Trial
        </Button>
      </div>
    </div>
  )
}
