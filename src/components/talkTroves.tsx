import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function TalkTrovesPromo() {
  return (
    <section className="w-full bg-[#e0d5f0] py-12 px-4 md:px-8 mt-[150px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#3a3a6a] mb-8 text-center md:text-left">
          Upgrade to TalkTrovesToday!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg p-4 shadow-sm flex items-start">
            <div className="flex-shrink-0 mr-4">
              <Image
                src="/talktroves.png?height=80&width=80"
                alt="TalkTroves representative"
                width={220}
                height={112}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-medium text-[#3a3a6a] mb-1">Want to convert more leads into customers?</h3>
              <p className="text-sm text-gray-600">
                Read our latest LinkedIn articles on how business are thriving with TalkTroves.
              </p>
              <a href="#" className="text-sm text-blue-600 flex items-center mt-2 hover:underline">
                Learn more <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-4 shadow-sm flex items-start">
            <div className="flex-shrink-0 mr-4">
              <Image
                src="/talktroves.png?height=80&width=80"
                alt="TalkTroves representative"
                width={220}
                height={112}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-medium text-[#3a3a6a] mb-1">Experience TalkTroves Anywhere</h3>
              <p className="text-sm text-gray-600">
                Available on App Store & Google Play - Power your team collaboration and customer support with real-time
                chat.
              </p>
              <a href="#" className="text-sm text-blue-600 flex items-center mt-2 hover:underline">
                Download now <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg p-4 shadow-sm flex items-start">
            <div className="flex-shrink-0 mr-4">
              <Image
                src="/talktroves.png?height=80&width=80"
                alt="TalkTroves representative"
                width={220}
                height={112}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-medium text-[#3a3a6a] mb-1">Meet the TalkTroves Leadership</h3>
              <p className="text-sm text-gray-600">
                Learn about the visionaries behind TalkTroves, committed to revolutionizing customer communication.
              </p>
              <a href="#" className="text-sm text-blue-600 flex items-center mt-2 hover:underline">
                Meet the team <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg p-4 shadow-sm flex items-start">
            <div className="flex-shrink-0 mr-4">
              <Image
                src="/talktroves.png?height=80&width=80"
                alt="TalkTroves representative"
                width={220}
                height={112}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-medium text-[#3a3a6a] mb-1">Meets the Mind Driving TalkTroves</h3>
              <p className="text-sm text-gray-600">
                Get to know the founders and leadership team revolutionizing customer support.
              </p>
              <a href="#" className="text-sm text-blue-600 flex items-center mt-2 hover:underline">
                Learn more <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
