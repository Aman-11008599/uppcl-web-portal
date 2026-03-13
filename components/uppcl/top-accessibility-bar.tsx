"use client"

import { Home, ChevronDown } from "lucide-react"

export function TopAccessibilityBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {/* Indian Flag Tricolor Gradient Line */}
      <div 
        className="h-[4px] w-full"
        style={{ 
          background: "linear-gradient(to right, #FF9933 0%, #FF9933 30%, #FFFFFF 50%, #138808 70%, #138808 100%)" 
        }}
      ></div>
      
      {/* Blue Accessibility Bar */}
      <div className="flex h-[36px] bg-[#1a4a8f] overflow-hidden">
        {/* Main blue section */}
        <div className="flex-1 flex items-center justify-end px-2 gap-0.5">
          <button className="text-white hover:bg-white/10 p-1.5">
            <Home className="w-4 h-4" />
          </button>
          
          <span className="text-white/60 mx-1">|</span>
          
          <button className="text-white text-[11px] font-medium px-2 py-1 hover:bg-white/10">
            SCREEN READER ACCESS
          </button>
          
          <span className="text-white/60">|</span>
          
          <button className="text-white text-[11px] font-medium px-2 py-1 hover:bg-white/10">
            SKIP TO MAIN CONTENT
          </button>
          
          <span className="text-white/60">|</span>
          
          <button className="text-white text-[11px] font-medium px-2 py-1 hover:bg-white/10">
            SITEMAP
          </button>
          
          <span className="text-white/60">|</span>
          
          <button className="bg-[#e8b923] text-black text-[11px] font-medium px-2 py-1 hover:bg-[#d4a520] whitespace-nowrap flex-shrink-0">
            OUTSOURCE KARMI PORTAL
          </button>
          
          <span className="text-white/60 mx-1">|</span>
          
          <button className="text-white text-[11px] font-medium px-2 py-1 hover:bg-white/10">
            हिंदी संस्करण
          </button>
        </div>
        
        {/* Orange/yellow section */}
        <div className="bg-[#e8a83a] flex items-center px-2 gap-1">
          <button className="flex items-center gap-0.5 px-1 py-1 hover:bg-black/5">
            {/* Wheelchair accessibility icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
              <circle cx="12" cy="4" r="2" />
              <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"/>
            </svg>
            <ChevronDown className="w-3 h-3 text-black" />
          </button>
          
          <span className="text-black/40">|</span>
          
          <button className="text-black text-[11px] font-medium px-2 py-1 hover:bg-black/5">
            VBTS
          </button>
        </div>
        
        {/* Search section */}
        <div className="bg-white flex items-center px-2">
          <input
            type="text"
            placeholder="Search"
            className="w-28 h-7 px-2 text-xs border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  )
}
