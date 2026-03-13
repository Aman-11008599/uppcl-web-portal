"use client"

import { Bell, FileText, Calendar } from "lucide-react"
import { useState } from "react"

const notifications = [
  {
    title: 'INFORMATION REGARDING EXTENSION OF DATE FOR INVITING APPLICATION FOR THE POST OF "COMPANY SECRETARY (ON A FIXED TERM BASIS)" IN UPPCL AGAINST ADVERTISEMENT NO. 03/VSA/2025/CS.',
    category: "Advertisements",
    fileSize: "827 KB",
    language: "",
    uploadDate: "06/01/2026",
  },
]

export function NewsAndNotifications() {
  const [newsRunning, setNewsRunning] = useState(true)
  const [notifRunning, setNotifRunning] = useState(true)

  return (
    <section className="bg-[#e8e8e8] py-6 px-8">
      <div className="grid grid-cols-2 gap-8">
        {/* News Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            {/* Orange gradient background */}
            <div 
              className="h-16 flex items-center justify-between px-6"
              style={{
                background: "linear-gradient(135deg, #f57c00 0%, #ff9800 50%, #ffc107 100%)",
              }}
            >
              <h3 className="text-white text-2xl font-bold italic">News</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setNewsRunning(false)}
                  className="bg-[#1a4a8f] text-white text-xs px-3 py-1 rounded hover:bg-[#153d75]"
                >
                  Stop
                </button>
                <button 
                  onClick={() => setNewsRunning(true)}
                  className="bg-[#1a4a8f] text-white text-xs px-3 py-1 rounded hover:bg-[#153d75]"
                >
                  Start
                </button>
              </div>
            </div>
          </div>
          <div className="p-6 min-h-[200px]">
            <ul className="list-disc list-inside text-gray-700">
              <li>Currently no latest News Flash is available.</li>
            </ul>
          </div>
          <div className="border-t border-[#1a4a8f] py-4 text-center">
            <a href="#" className="text-[#1a4a8f] font-medium hover:underline">View all</a>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            {/* Orange gradient background */}
            <div 
              className="h-16 flex items-center justify-between px-6"
              style={{
                background: "linear-gradient(135deg, #f57c00 0%, #ff9800 50%, #ffc107 100%)",
              }}
            >
              <h3 className="text-white text-2xl font-bold italic">Notifications</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setNotifRunning(false)}
                  className="bg-[#1a4a8f] text-white text-xs px-3 py-1 rounded hover:bg-[#153d75]"
                >
                  Stop
                </button>
                <button 
                  onClick={() => setNotifRunning(true)}
                  className="bg-[#1a4a8f] text-white text-xs px-3 py-1 rounded hover:bg-[#153d75]"
                >
                  Start
                </button>
              </div>
            </div>
          </div>
          <div className="p-6 min-h-[200px]">
            {notifications.map((notif, index) => (
              <div key={index} className="flex gap-4 border-b border-gray-200 pb-4">
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                  <Bell className="w-8 h-8 text-[#1a4a8f]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800 leading-relaxed mb-2">
                    {notif.title} <span className="text-[#1a4a8f]">[ {notif.category} ]</span>
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      File Size: {notif.fileSize} | Language:
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-red-500" />
                      Upload Date : {notif.uploadDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-[#1a4a8f] py-4 text-center">
            <a href="#" className="text-[#1a4a8f] font-medium hover:underline">View all</a>
          </div>
        </div>
      </div>
    </section>
  )
}
