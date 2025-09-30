import { useState } from "react";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add API call or email handler
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-8 md:flex md:gap-10">
        
        {/* Left Side - Info */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-[#1f2937] mb-4">Contact ApniDukan</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you. Whether you have a question about features, pricing, feedback, or anything else, our team is ready to answer all your questions.
          </p>
          <div className="space-y-3 text-gray-700 text-sm">
            <p><strong>Email:</strong>rajgodara816@gmail.com</p>
            <p><strong>Phone:</strong>+91-9680505799</p>
            <p><strong>Location:</strong> jhunjhunu, Rajasthan, India</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="md:w-1/2 space-y-6">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#489fb5]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#489fb5]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#489fb5]"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#489fb5] hover:bg-[#357d92] text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
