import { Clock, Package, Truck, CheckCircle } from "lucide-react";

function OrderTrack() {
  const orders = [
    {
      id: "WB-2891",
      status: "Delivered",
      deliveredOn: "13 Nov 2025, 3:45 PM",
      orderDate: "10 Nov 2025",
      totalAmount: "₹48,560",
      items: 15,
      address: "Sharma General Store",
      location: "Shop No. 15, Market Road, Sector 12, Mumbai - 400001",
      expected: "13 Nov 2025",
      progress: 4, // Delivered
    },
    {
      id: "WB-2892",
      status: "Out for Delivery",
      deliveredOn: "Expected soon",
      orderDate: "11 Nov 2025",
      totalAmount: "₹23,450",
      items: 10,
      address: "Kumar Retail Mart",
      location: "Shop No. 8, Park Avenue, Sector 21, Pune - 411001",
      expected: "14 Nov 2025",
      progress: 3, // Out for Delivery
    },
    {
      id: "WB-2893",
      status: "Packing",
      deliveredOn: "Expected soon",
      orderDate: "12 Nov 2025",
      totalAmount: "₹18,900",
      items: 8,
      address: "Singh Supermarket",
      location: "Shop No. 22, Green Plaza, Sector 9, Delhi - 110001",
      expected: "15 Nov 2025",
      progress: 2, // Packing
    },
  ];

  const steps = [
    { icon: <Clock size={24} />, label: "Processing" },
    { icon: <Package size={24} />, label: "Packing" },
    { icon: <Truck size={24} />, label: "Out for Delivery" },
    { icon: <CheckCircle size={24} />, label: "Delivered" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Order Tracking</h1>
        <p className="text-gray-500">Track your wholesale orders in real-time</p>
      </div>

      {/* Orders */}
      <div className="max-w-5xl mx-auto space-y-8">
        {orders.map((order, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-2xl p-6 border">
            {/* Order Info */}
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <p className="text-lg font-medium text-gray-700">Order {order.id}</p>
                <span
                  className={`inline-block text-sm font-medium px-3 py-1 rounded-full mt-1 ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Out for Delivery"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
                <p className="text-gray-500 mt-2">
                  {order.status === "Delivered"
                    ? `Delivered on ${order.deliveredOn}`
                    : `Expected Delivery on ${order.expected}`}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 text-right">
                <div>
                  <h3 className="text-gray-500 text-sm">Order Date</h3>
                  <p className="font-medium text-gray-700">{order.orderDate}</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm">Total Amount</h3>
                  <p className="font-medium text-gray-700">{order.totalAmount}</p>
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm">Items</h3>
                  <p className="font-medium text-gray-700">{order.items}</p>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-gray-200 my-6"></div>

            {/* Progress Bar with teal line */}
            <div className="relative flex justify-between items-center">
              {/* Full Gray Line - goes through center of icons */}
              <div className="absolute top-[30px] left-0 right-0 h-[3px] bg-gray-200" style={{ marginLeft: 'calc(50% / ' + steps.length + ')', marginRight: 'calc(50% / ' + steps.length + ')' }}></div>

              {/* Teal Progress Line - goes through center of icons */}
              <div
                className="absolute top-[30px] h-[3px] bg-[#4ba2a3] transition-all duration-500"
                style={{
                  left: 'calc(50% / ' + steps.length + ')',
                  width: `calc(${((order.progress - 1) / (steps.length - 1)) * 100}% - ${50 / steps.length}%)`,
                }}
              ></div>

              {/* Steps */}
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center relative z-10 flex-1">
                  <div
                    className={`p-3 rounded-full shadow transition-all ${
                      i < order.progress
                        ? "bg-[#4ba2a3] text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <p
                    className={`mt-2 text-sm font-medium ${
                      i < order.progress ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-[1px] bg-gray-200 my-6"></div>

            {/* Delivery Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-xl p-4">
                <h3 className="font-semibold text-gray-700 mb-1">Delivery Address</h3>
                <p className="text-gray-800 font-medium">{order.address}</p>
                <p className="text-gray-500 text-sm">{order.location}</p>
              </div>

              <div className="border rounded-xl p-4">
                <h3 className="font-semibold text-gray-700 mb-1">Expected Delivery</h3>
                <p className="text-gray-800 font-medium">{order.expected}</p>
                <p className="text-gray-500 text-sm">
                  Delivery between 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-gray-200 my-6"></div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-end gap-4">
              <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-100 transition">
                View Invoice
              </button>
              <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-100 transition">
                Contact Support
              </button>
              <button className="bg-[#4ba2a3] text-white px-6 py-2 rounded-lg hover:bg-[#3e8e8f] transition">
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderTrack;