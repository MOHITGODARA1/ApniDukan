function FooterSection() {
  return (
    <footer className="bg-[#f6fafc] border-t border-[#dce3eb] mt-16 py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Column 1 - About */}
        <div>
          <h2 className="text-lg font-semibold text-[#1e293b] mb-3">
            About Us
          </h2>
          <p className="text-sm text-gray-600 leading-6">
            We supply high-quality groceries, vegetables, hardware, and daily-use items 
            directly to shopkeepers at wholesale rates. Bulk buying made simple and reliable.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-[#1e293b] mb-3">
            Quick Links
          </h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="hover:text-[#489fb5] cursor-pointer">Home</li>
            <li className="hover:text-[#489fb5] cursor-pointer">Products</li>
            <li className="hover:text-[#489fb5] cursor-pointer">Contact Us</li>
            <li className="hover:text-[#489fb5] cursor-pointer">My Orders</li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-[#1e293b] mb-3">
            Contact Info
          </h2>
          <p className="text-sm text-gray-600">📍 Surjgarh, Rajasthan</p>
          <p className="text-sm text-gray-600">📞 +91 9057164791</p>
          <p className="text-sm text-[#489fb5] font-medium cursor-pointer hover:underline">
            mohitgodara816@gmail.com
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-[#dce3eb] pt-4">
        © {new Date().getFullYear()} ApniDukan. All rights reserved.
      </div>
    </footer>
  );
}

export default FooterSection;
