export function Footer() {
  return (
    <footer className="bg-[#489fb5] text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Section 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            We provide quality homes and amazing experiences. Trusted by hundreds of hosts and users.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/add-home" className="hover:underline">Add Home</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Section 3: Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:scale-110 transition-transform">🌐</a>
            <a href="#" className="hover:scale-110 transition-transform">📘</a>
            <a href="#" className="hover:scale-110 transition-transform">📸</a>
            <a href="#" className="hover:scale-110 transition-transform">🐦</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-6 text-white/80">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}

// export default Footer;
