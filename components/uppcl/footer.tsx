"use client"

export function Footer() {
  return (
    <footer className="bg-[#1a4a8f] py-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-8 text-white">
          {/* About */}
          <div>
            <h4 className="font-bold mb-4 text-lg">About UPPCL</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Chairman{"'"}s Message</a></li>
              <li><a href="#" className="hover:text-white">Organization Structure</a></li>
              <li><a href="#" className="hover:text-white">Our Subsidiaries</a></li>
              <li><a href="#" className="hover:text-white">Board of Directors</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Bill Payment</a></li>
              <li><a href="#" className="hover:text-white">New Connection</a></li>
              <li><a href="#" className="hover:text-white">Complaint Registration</a></li>
              <li><a href="#" className="hover:text-white">Load Change Request</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Tenders</a></li>
              <li><a href="#" className="hover:text-white">RTI</a></li>
              <li><a href="#" className="hover:text-white">Vacancy/Results</a></li>
              <li><a href="#" className="hover:text-white">Downloads</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Shakti Bhawan, 14- Ashok Marg</li>
              <li>Lucknow - 226001</li>
              <li>Uttar Pradesh, India</li>
              <li>Toll Free: 1912</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-sm">
          <p>© 2026 Uttar Pradesh Power Corporation Limited. All Rights Reserved.</p>
          <p className="mt-2">
            Designed & Developed by: Uttar Pradesh Power Corporation Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}
