import Image from "next/image"
import { Button } from "./ui/button"


export default function ChatfuelAlternative() {
  return (
    <div className="w-full max-w-[1723px] mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-[81px]mt-[150px]">
      {/* Left Column - Text Content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A5082]">
          The Best Chatfuel Alternative is Here!
        </h2>
        <p className="text-lg text-gray-700 max-w-xl">
          Join thousands of businesses that trust TalkTroves for better, faster, and more affordable customer support.
        </p>
        <Button className="bg-[#7E3ACE] hover:bg-[#6930A8] text-white px-8 py-2 rounded-md">Get Started</Button>
      </div>

      {/* Right Column - Dashboard Image */}
      <div className="flex-1 shadow-xl rounded-lg overflow-hidden">
        <Image
          src="/chatfuel.png"
          alt="TalkTroves Dashboard"
          width={800}
          height={548}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
