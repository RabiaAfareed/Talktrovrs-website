import Image from "next/image"
import { Button } from "./ui/button"


export default function GlobalReachSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8  rounded-lg bg-white max-w-7xl mx-auto mt-[150px]">
      <div className="relative w-full md:w-1/2 h-64 md:h-80">
        <div className="absolute inset-0 bg-gray-100 rounded-full flex items-center justify-center">
          <div className="relative w-[720px] h-[517px]">
            <Image
              src="/map.png"
              alt="World map with highlighted global points"
              fill
              className="object-contain"
            />
            {/* Yellow dots representing global points */}
            <div className="absolute h-2 w-2 bg-yellow-400 rounded-full" style={{ top: "30%", left: "20%" }}></div>
            <div className="absolute h-2 w-2 bg-yellow-400 rounded-full" style={{ top: "40%", left: "45%" }}></div>
            <div className="absolute h-2 w-2 bg-yellow-400 rounded-full" style={{ top: "35%", left: "70%" }}></div>
            <div className="absolute h-2 w-2 bg-yellow-400 rounded-full" style={{ top: "60%", left: "80%" }}></div>
            <div className="absolute h-2 w-2 bg-yellow-400 rounded-full" style={{ top: "50%", left: "25%" }}></div>

            {/* Connection lines */}
            <div
              className="absolute h-px bg-yellow-400 w-16 transform rotate-45"
              style={{ top: "35%", left: "25%" }}
            ></div>
            <div
              className="absolute h-px bg-yellow-400 w-16 transform -rotate-12"
              style={{ top: "40%", left: "50%" }}
            ></div>
            <div
              className="absolute h-px bg-yellow-400 w-16 transform rotate-12"
              style={{ top: "45%", left: "70%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
        <h2 className="text-3xl font-semibold text-slate-700 mb-4 px-8">Global Reach with Multilingual Support</h2>
        <p className="text-slate-600 mb-6 px-8">
          43+ languages translations and language-adaptable widgets for smooth global customer interactions
        </p>
        <Button className="bg-purple-300 hover:bg-purple-400 text-slate-700 px-8 py-2 rounded-md transition-colors m-6">
          Try it today
        </Button>
      </div>
    </div>
  )
}
