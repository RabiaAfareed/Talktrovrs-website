"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Globe, Menu, User } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"

const navItems = [
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full h-[154px] bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="text-[#375281] font-semibold text-2xl flex items-center">
              <span className="text-[#375281]">Talk</span>
              <span className="text-[#375281]">Troves</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[202px]">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-[#375281] hover:text-blue-800 font-medium flex items-center">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className=" text-[#375281] border-purple-200 hover:bg-purple-200">
              Free Trial
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5 text-gray-700" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Globe className="h-5 w-5 text-green-700" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-md">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[#375281] hover:text-blue-800 font-medium flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button
              variant="outline"
              className="w-full bg-purple-100 text-[#375281] border-purple-200 hover:bg-purple-200"
            >
              Free Trial
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
