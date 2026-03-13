"use client"

export function TollFreeNumbers() {
  return (
    <section className="bg-[#e8e8e8] py-6 px-8">
      <h2 className="text-3xl font-bold text-[#1a4a8f] text-center mb-6">Toll Free Numbers</h2>
      
      <div className="bg-[#1a4a8f] rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-white/20">
          {/* Left Section - 1912 */}
          <div className="p-8 text-center text-white">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="2" width="18" height="4" rx="1" />
                <rect x="5" y="8" width="2" height="10" />
                <rect x="9" y="8" width="2" height="10" />
                <rect x="13" y="8" width="2" height="10" />
                <rect x="17" y="8" width="2" height="10" />
                <rect x="3" y="18" width="18" height="2" rx="1" />
              </svg>
            </div>
            <p className="text-xl mb-2">For any query or</p>
            <p className="text-xl mb-2">information related to</p>
            <p className="text-xl mb-4">Electricity, Please Contact</p>
            <p className="text-lg">on <span className="text-[#f57c00] text-4xl font-bold">1912</span></p>
          </div>

          {/* Right Section - Other Numbers */}
          <div className="p-8 text-center text-white">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="2" width="18" height="4" rx="1" />
                <rect x="5" y="8" width="2" height="10" />
                <rect x="9" y="8" width="2" height="10" />
                <rect x="13" y="8" width="2" height="10" />
                <rect x="17" y="8" width="2" height="10" />
                <rect x="3" y="18" width="18" height="2" rx="1" />
              </svg>
            </div>
            <p className="text-xl">PUVVNL/ MVVNL/ PVVNL/ DVVNL/KESCO 1800-410-1912</p>
          </div>
        </div>
      </div>
    </section>
  )
}
