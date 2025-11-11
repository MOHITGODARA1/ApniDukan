function ProductCategory() {
  return (
    <>
      <div className="mt-6 w-[90%] mx-auto">

        {/* Upper Bar */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-xl text-[#1e293b]">Product Categories</h1>
          <button className="text-[#489fb5] font-medium hover:underline">
            View All Products →
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">

          {/* Category Box */}
          <div className="bg-white p-4 rounded-xl shadow border border-[#dce3eb] hover:shadow-md transition cursor-pointer">
            <div className="text-[#489fb5] text-3xl font-bold mb-2">
              🛒
            </div>
            <h2 className="font-semibold text-[#1e293b] text-lg">Grocery</h2>
            <p className="text-sm text-gray-500">Rice, Oil, Flour, Spices</p>
            <p className="text-sm font-medium text-[#489fb5] mt-1">2450+ Products</p>
          </div>

          {/* Duplicate this box for other categories */}
          <div className="bg-white p-4 rounded-xl shadow border border-[#dce3eb] hover:shadow-md transition cursor-pointer">
            <div className="text-[#489fb5] text-3xl font-bold mb-2">
              🔩
            </div>
            <h2 className="font-semibold text-[#1e293b] text-lg">Hardware</h2>
            <p className="text-sm text-gray-500">Screws, Tools, Locks, Pipes</p>
            <p className="text-sm font-medium text-[#489fb5] mt-1">850+ Products</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow border border-[#dce3eb] hover:shadow-md transition cursor-pointer">
            <div className="text-[#489fb5] text-3xl font-bold mb-2">
              🥬
            </div>
            <h2 className="font-semibold text-[#1e293b] text-lg">Vegetables</h2>
            <p className="text-sm text-gray-500">Onion, Potato, Ladyfinger</p>
            <p className="text-sm font-medium text-[#489fb5] mt-1">120+ Products</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow border border-[#dce3eb] hover:shadow-md transition cursor-pointer">
            <div className="text-[#489fb5] text-3xl font-bold mb-2">
              🧴
            </div>
            <h2 className="font-semibold text-[#1e293b] text-lg">Plastic</h2>
            <p className="text-sm text-gray-500">Bottles, Buckets, Containers</p>
            <p className="text-sm font-medium text-[#489fb5] mt-1">350+ Products</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow border border-[#dce3eb] hover:shadow-md transition cursor-pointer">
            <div className="text-[#489fb5] text-3xl font-bold mb-2">
              🏠
            </div>
            <h2 className="font-semibold text-[#1e293b] text-lg">Household</h2>
            <p className="text-sm text-gray-500">Cleaners, Utensils, Daily Use</p>
            <p className="text-sm font-medium text-[#489fb5] mt-1">540+ Products</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default ProductCategory;
