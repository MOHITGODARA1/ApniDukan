import { useState } from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  // Demo Cart Products 🛒
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Premium Basmati Rice",
      price: 120,
      quantity: 5,
      img: "https://images.unsplash.com/photo-1617196034796-73e5d44a9f8e?auto=format&fit=crop&w=600&q=80",
      unit: "Kg",
    },
    {
      id: 2,
      name: "Sunflower Oil",
      price: 110,
      quantity: 2,
      img: "https://images.unsplash.com/photo-1623256791874-df4d62d1f2eb?auto=format&fit=crop&w=600&q=80",
      unit: "Litre",
    },
    {
      id: 3,
      name: "Wheat Flour",
      price: 35,
      quantity: 10,
      img: "https://images.unsplash.com/photo-1590080875831-9a3484d8cbf1?auto=format&fit=crop&w=600&q=80",
      unit: "Kg",
    },
  ]);

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + shipping;

  const handleQuantityChange = (id, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQty, 1) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Shopping Cart 🛒</h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <p>Your cart is empty!</p>
            <button
              onClick={() => navigate("/Allproduct")}
              className="mt-4 px-5 py-2 bg-[#4ba2a3] text-white rounded-lg hover:bg-[#3f8f90] transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* LEFT SIDE — CART PRODUCTS */}
            <div className="md:col-span-2 overflow-x-auto">
              {/* Table Header */}
              <div className="hidden sm:grid sm:grid-cols-5 font-semibold text-gray-700 border-b pb-3 mb-2">
                <span className="col-span-2">Product</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Total</span>
              </div>

              {/* Cart Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="grid sm:grid-cols-5 items-center gap-4 border rounded-xl p-3 hover:shadow-sm transition"
                  >
                    {/* Product Info */}
                    <div className="flex items-center gap-3 col-span-2">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg border"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-gray-500 text-sm">
                          {item.unit} • ₹{item.price}/{item.unit}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        −
                      </button>
                      <span className="px-3 font-semibold text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-center text-gray-700 font-medium">
                      ₹{item.price}
                    </p>

                    {/* Total + Remove */}
                    <div className="flex items-center justify-between sm:justify-center">
                      <p className="font-semibold text-[#4ba2a3]">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-3 text-red-500 hover:text-red-700"
                        title="Remove Item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE — ORDER SUMMARY */}
            <div className="border rounded-xl p-6 bg-gray-50 h-fit">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>

              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex justify-between font-semibold text-lg text-gray-800">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => navigate("/Allproduct")}
                  className="border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                >
                  Continue Shopping
                </button>
                <button className="bg-[#4ba2a3] py-2 rounded-lg text-white font-medium hover:bg-[#3f8f90] transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
