"use client"

import { CheckIcon, XIcon } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

interface ComparisonFeature {
  name: string
  talkTroves: boolean
  chatfuel: boolean
}

export default function FeatureComparison() {
  const features: ComparisonFeature[] = [
    { name: "History", talkTroves: true, chatfuel: true },
    { name: "Chat Report", talkTroves: true, chatfuel: true },
    { name: "Agent Report", talkTroves: true, chatfuel: true },
    { name: "Realtime monitoring", talkTroves: true, chatfuel: true },
    { name: "Agent Management", talkTroves: true, chatfuel: true },
    { name: "Department Management", talkTroves: true, chatfuel: true },
    { name: "Roles & Permissions", talkTroves: true, chatfuel: true },
    { name: "Routing", talkTroves: true, chatfuel: true },
    { name: "Shortcut", talkTroves: true, chatfuel: true },
    { name: "Triggers", talkTroves: true, chatfuel: true },
    { name: "Goals", talkTroves: true, chatfuel: true },
    { name: "Widget Appearance", talkTroves: true, chatfuel: true },
    { name: "Per chat Form", talkTroves: true, chatfuel: true },
    { name: "Offline Form", talkTroves: true, chatfuel: true },
    { name: "Email Piping", talkTroves: true, chatfuel: true },
    { name: "Operating Hours", talkTroves: true, chatfuel: true },
    { name: "Timezone", talkTroves: true, chatfuel: false },
    { name: "Security", talkTroves: true, chatfuel: true },
    { name: "High Load Dashboard", talkTroves: true, chatfuel: true },
    { name: "Chat tags", talkTroves: true, chatfuel: true },
  ]

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4 bg-white rounded-lg shadow-sm mt-[149px]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#2c4b6e] mb-6 text-center">
        TalkTroves VS Chatfuel at a glance
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-sm py-6">
        <Table className="border-collapse">
          <TableHeader>
            <TableRow className="bg-white">
              <TableHead className="w-1/3 font-semibold text-[#2c4b6e] text-base">Feature</TableHead>
              <TableHead className="w-1/3 text-center font-semibold text-[#2c4b6e] text-base">TalkTroves</TableHead>
              <TableHead className="w-1/3 text-center font-semibold text-[#2c4b6e] text-base">Chatfuel</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <TableCell className="font-medium">{feature.name}</TableCell>
                <TableCell className="text-center">
                  {feature.talkTroves ? (
                    <div className="flex justify-center">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span className="sr-only">Yes</span>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <XIcon className="h-5 w-5 text-red-500" />
                      <span className="sr-only">No</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {feature.chatfuel ? (
                    <div className="flex justify-center">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span className="sr-only">Yes</span>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <XIcon className="h-5 w-5 text-red-500" />
                      <span className="sr-only">No</span>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
