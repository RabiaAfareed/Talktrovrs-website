import Image from "next/image"

export default function TestimonialSection() {
  return (
    <section className="relative w-full bg-purple-200 py-16 px-4">
      {/* Top blue bar */}
      <div className="absolute top-0 left-0 w-full h-2 "></div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#375281] mb-4">
          Still not sure about the best Talktroves help alternative?
        </h2>
        <p className="text-[#375281] max-w-3xl mx-auto mb-10">
          The greatest approach to demonstrate our dedication is to share the experiences and stories of those who have
          worked with us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between ">
            <div>
              <p className="font-medium text-[#375281] mb-4">
                Game-changer for our support team! With this app, our live chat efficiency has reached new heights.
                Happy customers, seamless service!
              </p>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src="/smantha.png?height=48&width=48"
                    alt="Samantha Turner"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-[#375281] font-medium">Samantha Turner</p>
              <p className="text-[#375281] text-sm">Operations Manager</p>
              <div className="mt-4 text-3xl font-boldtext-[#375281]">+ 40%</div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white rounded-lg p-8 shadow-md flex flex-col justify-between ">
            <div>
              <p className="font-medium text-[#375281] mb-4">
                Transforming customer service! Instant responses and improved engagement have boosted our support
                efficiency like never before
              </p>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src="/smantha.png?height=48&width=48"
                    alt="Samantha Turner"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-[#375281] font-medium">Samantha Turner</p>
              <p className="text-[#375281] text-sm">Operations Manager</p>
              <div className="mt-4">
                <div className="text-3xl font-bold text-[#375281]">+ 10 k</div>
                <p className="text-[#375281] text-sm">New Followers in the last 4 Months</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between">
            <div>
              <p className="font-medium text-[#375281] mb-4">
                Transforming customer service! Instant responses and improved engagement have boosted our support
                efficiency like never before
              </p>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src="/smantha.png?height=48&width=48"
                    alt="Samantha Turner"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-[#375281] font-medium">Samantha Turner</p>
              <p className="text-[#375281] text-sm">Operations Manager</p>
              <div className="mt-4 text-3xl font-bold text-[#375281]">+ 25%</div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  )
}
