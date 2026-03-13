"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function MainHeader() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  const menuItems = [
    { 
      label: "About UPPCL", 
      hasDropdown: true,
      items: ["Introduction", "Mission / Vision Statement", "Organisation Structure", "Role / Functions / Responsibilities / Activities", "Agencies under the Administrative Control"]
    },
    { 
      label: "Act & Rules", 
      hasDropdown: true,
      items: ["Electricity Act 2003", "Indian Electricity Rules", "UPERC Regulations", "Tariff Orders", "Government Orders"]
    },
    { 
      label: "Investors", 
      hasDropdown: true,
      items: ["Annual Reports", "Financial Statements", "Investor Presentations", "Stock Information", "Corporate Governance"]
    },
    { 
      label: "Tenders", 
      hasDropdown: true,
      items: ["Active Tenders", "Archived Tenders", "Tender Guidelines", "Vendor Registration", "e-Procurement"]
    },
    { 
      label: "Documents/Reports", 
      hasDropdown: true,
      items: ["Annual Reports", "Audit Reports", "Technical Reports", "Statistical Data", "Publications"]
    },
    { 
      label: "RTI", 
      hasDropdown: false,
      items: []
    },
    { 
      label: "Vacancy/Results", 
      hasDropdown: false,
      items: []
    },
    { 
      label: "Contact Us", 
      hasDropdown: true,
      items: ["Head Office", "Regional Offices", "Customer Care", "Grievance Redressal", "Feedback"]
    },
  ]

  return (
    <header className="bg-white py-2 px-4 flex items-center justify-between border-b border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        {/* UPPCL Emblem */}
        <div className="w-14 h-14 relative bg-[#d4e5f7] rounded-full flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-12 h-12">
            {/* Outer circle with text */}
            <circle cx="50" cy="50" r="48" fill="none" stroke="#1a4a8f" strokeWidth="1.5" />
            
            {/* Inner decorative circle */}
            <circle cx="50" cy="50" r="38" fill="none" stroke="#1a4a8f" strokeWidth="0.5" />
            
            {/* Ashoka-style emblem elements */}
            <circle cx="50" cy="30" r="8" fill="none" stroke="#1a4a8f" strokeWidth="1" />
            <circle cx="50" cy="30" r="4" fill="#1a4a8f" />
            
            {/* Transmission tower */}
            <path d="M50 38 L50 75" stroke="#1a4a8f" strokeWidth="2" />
            <path d="M42 45 L50 40 L58 45" stroke="#1a4a8f" strokeWidth="1.5" fill="none" />
            <path d="M40 55 L50 48 L60 55" stroke="#1a4a8f" strokeWidth="1.5" fill="none" />
            <path d="M38 65 L50 56 L62 65" stroke="#1a4a8f" strokeWidth="1.5" fill="none" />
            <path d="M36 75 L50 64 L64 75" stroke="#1a4a8f" strokeWidth="1.5" fill="none" />
            
            {/* Base */}
            <path d="M42 75 L58 75" stroke="#1a4a8f" strokeWidth="2" />
            
            {/* Hindi text at top */}
            <text x="50" y="12" textAnchor="middle" fontSize="5" fill="#1a4a8f" fontWeight="bold">उ.प्र. पावर कॉर्पो. लि.</text>
          </svg>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Small emblem */}
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="#d4e5f7" stroke="#1a4a8f" strokeWidth="2" />
              <path d="M50 25 L50 75" stroke="#1a4a8f" strokeWidth="3" />
              <path d="M35 35 L50 28 L65 35" stroke="#1a4a8f" strokeWidth="2" fill="none" />
              <path d="M30 50 L50 40 L70 50" stroke="#1a4a8f" strokeWidth="2" fill="none" />
              <path d="M25 65 L50 52 L75 65" stroke="#1a4a8f" strokeWidth="2" fill="none" />
            </svg>
          </div>
          
          <div>
            <h1 className="text-[#1a4a8f] text-lg font-bold leading-tight">Uttar Pradesh</h1>
            <h2 className="text-[#f57c00] text-base font-semibold leading-tight">Power Corporation Limited</h2>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center relative">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className="relative"
            onMouseEnter={() => item.hasDropdown && setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="flex items-center gap-0.5 px-2.5 py-1.5 text-sm text-[#1a4a8f] hover:bg-[#f57c00] hover:text-white font-medium whitespace-nowrap transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </button>
            
            {/* Dropdown Menu */}
            {item.hasDropdown && openDropdown === index && (
              <div className="absolute top-full left-0 bg-[#e8a83a] min-w-[220px] shadow-lg z-50">
                {item.items.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2.5 text-sm text-[#1a4a8f] hover:bg-[#d4922a] hover:text-white border-b border-[#d4922a]/30 last:border-b-0 transition-colors"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  )
}
