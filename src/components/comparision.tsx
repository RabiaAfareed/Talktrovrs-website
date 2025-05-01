"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "../../lib/utils"


// List of all services to compare with
const services = [
  { name: "3CX", href: "#" },
  { name: "AirCall", href: "#" },
  { name: "Bird Eye", href: "#" },
  { name: "Birdesk", href: "#" },
  { name: "Bitrix24", href: "#" },
  { name: "CallHub", href: "#" },
  { name: "CallPage", href: "#" },
  { name: "Channels", href: "#" },
  { name: "Chatport", href: "#" },
  { name: "Crisp", href: "#" },
  { name: "ConnectWise", href: "#" },
  { name: "Customerly", href: "#" },
  { name: "Dashly", href: "#" },
  { name: "Desk.com", href: "#" },
  { name: "Dixa", href: "#" },
  { name: "Drift", href: "#" },
  { name: "Extend", href: "#" },
  { name: "Freshdesk", href: "#" },
  { name: "Front", href: "#" },
  { name: "Genesys", href: "#" },
  { name: "Gist", href: "#" },
  { name: "Gmail", href: "#" },
  { name: "Gorgias", href: "#" },
  { name: "Groove", href: "#" },
  { name: "HappyFox", href: "#" },
  { name: "HelpShift", href: "#" },
  { name: "Helprace", href: "#" },
  { name: "HelpScout", href: "#" },
  { name: "HelpCrunch", href: "#" },
  { name: "Hiver", href: "#" },
  { name: "HubSpot Service Hub", href: "#" },
  { name: "Intercom", href: "#" },
  { name: "Jira", href: "#" },
  { name: "Kayako", href: "#" },
  { name: "Kustomer", href: "#" },
  { name: "LeadDesk", href: "#" },
  { name: "LiveCall", href: "#" },
  { name: "LiveChat", href: "#" },
  { name: "LiveHelpNow", href: "#" },
  { name: "LivePerson", href: "#" },
  { name: "Lucep", href: "#" },
  { name: "Novocall", href: "#" },
  { name: "Olark", href: "#" },
  { name: "OneDesk", href: "#" },
  { name: "osTicket", href: "#" },
  { name: "OTRS", href: "#" },
  { name: "Outlook", href: "#" },
  { name: "PureChat", href: "#" },
  { name: "Qmovo", href: "#" },
  { name: "Rocket Chat", href: "#" },
  { name: "Ramenego", href: "#" },
  { name: "SmartSupp", href: "#" },
  { name: "SolarWinds", href: "#" },
  { name: "SpiceWorks", href: "#" },
  { name: "SysAid", href: "#" },
  { name: "SupportBee", href: "#" },
  { name: "Tawk", href: "#" },
  { name: "TeamSupport", href: "#" },
  { name: "Teamwork Desk", href: "#" },
  { name: "Userlike", href: "#" },
  { name: "Verloop", href: "#" },
  { name: "Vision", href: "#" },
  { name: "Vocalcom", href: "#" },
  { name: "Zendesk Talk", href: "#" },
  { name: "Zoho Desk", href: "#" },
  { name: "Zopin", href: "#" },
]

export default function CompareWithOthers() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="max-w-[1138px] mx-auto p-6 mt-[150px]">
      <div className="rounded-md p-4 md:p-6">
        <h2 className="text-center text-2xl font-semibold text-[#375281] mb-6">Compare With Others</h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className={cn(
                "text-xs md:text-sm text-[#375281] hover:text-blue-900 hover:underline transition-colors",
                hoveredItem === service.name && "font-semibold",
              )}
              onMouseEnter={() => setHoveredItem(service.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
