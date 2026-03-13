"use client"

import { Check, IndianRupee, Globe, Users, AlertCircle, Link as LinkIcon, Video, Settings, FileText } from "lucide-react"
import { useState } from "react"

const billGenerationItems = [
  { text: "Bill Payment", bold: false },
  { text: "Postpaid Bill Payment through Online NEFT/RTGS", bold: false },
  { text: "Smart Meter Prepaid Recharge", bold: false, isNew: true },
  { text: "KESCo Smart Meter Consumer Dashboard", bold: false },
  { text: "Multi-Story Recharge (Radius)", bold: false, isNew: true },
  { text: "Prepaid Recharge (Genus Meters)", bold: false, hasVideo: true },
  { text: "Net-Meter Self Bill Generation", bold: false },
  { text: "Self Bill Generation (upto 9 kw)", bold: false },
  { text: "Helpdesk for online Payment related", bold: true },
  { text: "Last Online Payment Receipt", bold: false },
]

const connectionServicesItems = [
  { text: "Apply for New Electricity Connection (Jhatpat Connection)", bold: false },
  { text: "Apply for bulk load for multi storey buildings and colonies", bold: false },
  { text: "Apply for Net Metering/Net Feed-in", bold: false },
  { text: "Directions for Net Metering/Net Feed-in", bold: false },
  { text: "Apply for New Electricity Connection for Private Tube Well", bold: false },
  { text: "Apply for New Connection for Comm., Industrial & Institutional (Nivesh Mitra)", bold: false },
  { text: "COT Application Format and Fee", bold: false },
]

const serviceRequestItems = [
  { text: "Bill Correction Request", bold: false },
  { text: "Name Correction", bold: false },
  { text: "Address Correction", bold: false },
  { text: "Mobile Number and Email updation", bold: false },
  { text: "Load Change Request", bold: false },
  { text: "Category Change", bold: false },
  { text: "Ownership Change", bold: false },
  { text: "Meter Related Requests", bold: false },
  { text: "Permanent Disconnection (PD) Request", bold: false },
]

const complaintsItems = [
  { text: "C.G.R.F. Complaint Portal", bold: false },
  { text: "1912 Complaint Registration", bold: false },
  { text: "1912 Complaint Tracking", bold: false },
  { text: "COT Status Report", bold: false },
  { text: "Ready reckoner for line charges beyond 40 meter", bold: false },
  { text: "Bijli Mitra Portal (Theft Complaint)", bold: false, isOrange: true },
  { text: "Outsourced Personnel Click Here for Complaint", bold: false },
]

const importantLinksItems = [
  { text: "UPERC", bold: false },
  { text: "Janhit Guarantee Act  2011", bold: false },
  { text: "Application Processing Fee Rates", bold: false },
  { text: "Meter Readers Details", bold: false },
  { text: "eGazette", bold: false },
  { text: "CGRF", bold: false },
]

const videoGuideItems = [
  { text: "How to get New Electricity Connection Online", bold: false },
  { text: "How to get New Private Tubewell Connection Online", bold: false },
  { text: "How to Pay Electricity Bill Online", bold: false },
  { text: "How to Register Online Complaint", bold: false },
]

const servicesDetailsItems = [
  { text: "Download UPPCL Consumer App", bold: true },
  { text: "Tariff Order FY 2025-26", bold: false },
  { text: "Cost Data Book-2026", bold: false },
  { text: "Download Form", bold: false },
  { text: "Find Common Service Center (VLE)", bold: false },
  { text: "Process Steps for recharge prepaid (SAHAJ APP)", bold: false },
]

const otherItems = [
  { text: "Vigilance Team and Police Stations", bold: false },
  { text: "Assessment and compounding in theft", bold: false },
  { text: "Scheduled Outages of Feeders", bold: false },
  { text: "Monthly Outage of Feeders", bold: false },
  { text: "Average Supply Hours at Division", bold: false },
  { text: "Minimum Wage for outsource Person", bold: false },
  { text: "Address of Division", bold: false },
]

interface ServiceCardProps {
  title: string
  icon: React.ReactNode
  items: Array<{ text: string; bold?: boolean; isNew?: boolean; hasVideo?: boolean; isOrange?: boolean }>
  bgColor: string
}

function ServiceCard({ title, icon, items, bgColor }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4" style={{ borderTopColor: bgColor }}>
      <div className={`px-4 py-3 flex items-center gap-3`} style={{ backgroundColor: bgColor }}>
        <span className="text-white">{icon}</span>
        <h3 className="text-white font-bold text-sm uppercase tracking-wide">{title}</h3>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-[#1a4a8f] mt-0.5 flex-shrink-0" />
              <span className={`${item.bold ? "font-bold" : ""} ${item.isOrange ? "text-[#f57c00]" : "text-gray-700"} hover:text-[#1a4a8f] cursor-pointer`}>
                {item.text}
                {item.isNew && (
                  <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded animate-pulse">
                    new
                  </span>
                )}
                {item.hasVideo && (
                  <span className="ml-2 text-red-500 text-xs">Video</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface ExpandableCardProps {
  title: string
  icon: React.ReactNode
  items: Array<{ text: string; bold?: boolean }>
  bgColor: string
}

function ExpandableCard({ title, icon, items, bgColor }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full px-4 py-3 flex items-center gap-3`}
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-white">{icon}</span>
        <h3 className="text-white font-bold text-sm uppercase tracking-wide">{title}</h3>
      </button>
      {isExpanded && (
        <div className="p-4">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-[#1a4a8f] mt-0.5 flex-shrink-0" />
                <span className={`${item.bold ? "font-bold" : ""} text-gray-700 hover:text-[#1a4a8f] cursor-pointer`}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function ConsumerCorner() {
  return (
    <section className="bg-[#d4e5f7] py-6 px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#1a4a8f] italic">Consumer Corner</h2>
        <div className="flex items-center gap-4">
          {/* Registered User + Login Capsule */}
          <div className="flex items-center bg-[#e8eef5] rounded-full pl-5 pr-1 py-1 border border-gray-300">
            <span className="text-gray-600 text-sm font-semibold mr-3">REGISTERED USER</span>
            <button className="bg-[#2c3e7b] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#1a2a5c] transition-colors">
              LOGIN
            </button>
          </div>
          {/* New User + Register Capsule */}
          <div className="flex items-center bg-[#e8eef5] rounded-full pl-5 pr-1 py-1 border border-gray-300">
            <span className="text-gray-600 text-sm font-semibold mr-3">NEW USER</span>
            <button className="bg-[#2c3e7b] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#1a2a5c] transition-colors">
              REGISTER
            </button>
          </div>
        </div>
      </div>

      {/* Main Service Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <ServiceCard
          title="Bill Generation and Payment"
          icon={<IndianRupee className="w-5 h-5" />}
          items={billGenerationItems}
          bgColor="#f57c00"
        />
        <ServiceCard
          title="Connection Services"
          icon={<Globe className="w-5 h-5" />}
          items={connectionServicesItems}
          bgColor="#f57c00"
        />
        <ServiceCard
          title="Service Request"
          icon={<Users className="w-5 h-5" />}
          items={serviceRequestItems}
          bgColor="#f57c00"
        />
        <ServiceCard
          title="Complaints / Status"
          icon={<AlertCircle className="w-5 h-5" />}
          items={complaintsItems}
          bgColor="#f57c00"
        />
      </div>

      {/* Expandable Cards */}
      <div className="grid grid-cols-4 gap-4">
        <ExpandableCard
          title="Important Link/ Details"
          icon={<LinkIcon className="w-5 h-5" />}
          items={importantLinksItems}
          bgColor="#f57c00"
        />
        <ExpandableCard
          title="Video Guide"
          icon={<Video className="w-5 h-5" />}
          items={videoGuideItems}
          bgColor="#006666"
        />
        <ExpandableCard
          title="Services/ Details"
          icon={<Settings className="w-5 h-5" />}
          items={servicesDetailsItems}
          bgColor="#006666"
        />
        <ExpandableCard
          title="Other"
          icon={<FileText className="w-5 h-5" />}
          items={otherItems}
          bgColor="#f57c00"
        />
      </div>
    </section>
  )
}
