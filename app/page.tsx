"use client"

import { TopAccessibilityBar } from "@/components/uppcl/top-accessibility-bar"
import { MainHeader } from "@/components/uppcl/main-header"
import { HeroBanner } from "@/components/uppcl/hero-banner"
import { ScrollingAnnouncement } from "@/components/uppcl/scrolling-announcement"
import { ActionButtons } from "@/components/uppcl/action-buttons"
import { ConsumerCorner } from "@/components/uppcl/consumer-corner"
import { QuickActionButtons } from "@/components/uppcl/quick-action-buttons"
import { TollFreeNumbers } from "@/components/uppcl/toll-free-numbers"
import { NewsAndNotifications } from "@/components/uppcl/news-and-notifications"
import { SidebarTabs } from "@/components/uppcl/sidebar-tabs"
import { Footer } from "@/components/uppcl/footer"

export default function UPPCLPage() {
  return (
    <div className="min-h-screen bg-[#e8e8e8] relative">
      {/* Fixed Sidebar Tabs */}
      <SidebarTabs />

      {/* Fixed UPPCL Logo Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="w-16 h-16 rounded-full bg-[#1a4a8f] border-4 border-white shadow-lg flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-10 h-10 text-white">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            <text x="50" y="35" textAnchor="middle" fontSize="8" fill="currentColor">POWER CORPORATION</text>
            <text x="50" y="55" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">UPPCL</text>
            <text x="50" y="70" textAnchor="middle" fontSize="6" fill="currentColor">GOVT. UNDERTAKING</text>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative pt-[40px]">
        <TopAccessibilityBar />
        <MainHeader />
        <HeroBanner />
        <ScrollingAnnouncement />
        <ActionButtons />
        <ConsumerCorner />
        <QuickActionButtons />
        <TollFreeNumbers />
        <NewsAndNotifications />
        <Footer />
      </main>
    </div>
  )
}
