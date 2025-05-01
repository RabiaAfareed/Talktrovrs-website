import Image from "next/image"

export default function ChatWidgetBanner() {
  return (
    <div className="relative w-full max-w-[1920px] h-auto bg-[#D3BAE4]  rounded-lg overflow-hidden mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d4f76] mb-8">The Fastest Chat Widget</h2>
          <p className="text-lg md:text-xl text-[#3d4f76] mb-8">
            Fastest chat widget on the market-leads in just 2.5 seconds.
          </p>
          <p className="text-lg md:text-xl text-[#3d4f76]">
            35% more conversions-customers are likely to complete a purchase after using live chat. Faster responses-
            higher sales.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="rounded-lg p-2 pb-0">
              
              <div className="relative w-[757px] h-[567px]">
                <Image
                  src="/girl.png"
                  alt="Dashboard with charts and gauge"
                  width={757}
                  height={567}
                  className="rounded-t-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
