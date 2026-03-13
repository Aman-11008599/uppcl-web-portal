"use client"

export function SidebarTabs() {
  return (
    <div className="fixed left-0 top-[55%] z-50 flex flex-col">
      {/* INTRANET Tab */}
      <div className="bg-[#1a4a8f] text-white py-3 px-0.5 cursor-pointer hover:bg-[#153d75] border-l-[3px] border-[#2e7d32]">
        <span className="text-[10px] font-bold tracking-wider" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
          INTRANET
        </span>
      </div>
      
      {/* EMPLOYEE CORNER Tab */}
      <div className="bg-[#f57c00] text-white py-3 px-0.5 cursor-pointer hover:bg-[#e65100] border-l-[3px] border-[#c62828]">
        <span className="text-[10px] font-bold tracking-wider" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
          EMPLOYEE CORNER
        </span>
      </div>
    </div>
  )
}
