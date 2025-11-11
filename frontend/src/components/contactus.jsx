function Contactus() {
  return (
    <div className="w-[90%] mx-auto mt-12 mb-16">

      {/* Heading */}
      <h1 className="text-2xl font-bold text-[#1e293b] text-center mb-2">
        Contact Us
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Have questions? We’re here to help shopkeepers buy in bulk easily.
      </p>

      {/* Card */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-[#dce3eb] max-w-3xl mx-auto">

        <form className="grid grid-cols-1 gap-5">

          {/* Name */}
          <div>
            <label className="block text-sm text-[#1e293b] mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-3 outline-[#489fb5] focus:border-[#489fb5]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm text-[#1e293b] mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-3 outline-[#489fb5] focus:border-[#489fb5]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-[#1e293b] mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg p-3 outline-[#489fb5] focus:border-[#489fb5]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#489fb5] hover:bg-[#3f8ea1] text-white font-medium py-3 rounded-lg text-center transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contactus;
