"use client"

const quickActions = [
  { text: "Uttar Pradesh Krishak Bill Mafi Panjikaran", row: 1 },
  { text: "Load Change Request", row: 1 },
  { text: "Bijli Mitra (Theft Complaint)", row: 1 },
  { text: "Know Your Account Number for Rural Area/Kesco", row: 2 },
  { text: "Download UPPCL Consumer App", row: 2 },
  { text: "Vendor Invoice Tracking System", row: 2 },
]

export function QuickActionButtons() {
  const row1 = quickActions.filter(a => a.row === 1)
  const row2 = quickActions.filter(a => a.row === 2)

  return (
    <section className="bg-[#d4e5f7] py-6 px-8">
      <div className="space-y-4">
        <div className="flex justify-center gap-6">
          {row1.map((action, index) => (
            <button
              key={index}
              className="bg-[#006666] hover:bg-[#005555] text-white font-medium py-3 px-6 rounded-md text-sm transition-colors shadow-md"
            >
              {action.text}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-6">
          {row2.map((action, index) => (
            <button
              key={index}
              className="bg-[#006666] hover:bg-[#005555] text-white font-medium py-3 px-6 rounded-md text-sm transition-colors shadow-md"
            >
              {action.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
