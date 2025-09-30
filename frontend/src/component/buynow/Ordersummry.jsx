import { UseCart } from "../storedata/cartdata"
import { useNavigate } from "react-router-dom";
export function OrderSummry() {
  const { cart } = UseCart();
  const navigate=useNavigate();
  const total = cart?.item?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
  const shippingcharge = 20;

  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center bg-white py-6">
        {/* Heading */}
        <div className="w-[90%]">
          <h1 className="text-3xl font-serif font-semibold mt-5 text-gray-800">Order Summary</h1>
        </div>

        {/* Items */}
        {cart?.item?.map((item) => (
          <div key={item.id} className="w-[90%] flex flex-col border-b border-gray-300 py-4">
            <div className="flex flex-row">
              <div className="md:w-[20%] w-[40%]">
                <img src={item.Image} alt="Product" className="h-24 w-24 rounded-lg object-cover" />
              </div>
              <div className="flex flex-col md:w-[30%] w-[40%] ml-3">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.description?.split(" ").slice(0, 8).join(" ") + "..."}</p>
                <p className="text-green-800 font-medium mt-1">₹{item.price}</p>
                <p className="text-sm mt-1 text-gray-700">Quantity: {item.quantity}</p>
              </div>
              <div className="flex justify-end items-center w-[20%] md:w-[40%] text-base font-medium text-gray-800">
                ₹{item.price * item.quantity}
              </div>
            </div>
          </div>
        ))}

        {/* Total Summary Box */}
        <div className="w-[90%] mt-4 border border-gray-400 rounded-lg p-4 bg-[#f9f9f9]">
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-600 text-lg ml-2">Sub Total:</p>
            <p className="font-semibold text-lg mr-2.5">₹{total}</p>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-600 text-lg ml-2">Shipping Charge:</p>
            <p className="font-semibold text-lg mr-2.5">₹{shippingcharge}</p>
          </div>
          <div className="h-[1px] w-full bg-gray-400 my-2"></div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-800 text-lg ml-2 font-medium">Total:</p>
            <p className="font-bold text-lg mr-2.5 text-green-900">₹{total + shippingcharge}</p>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="w-[90%]">
          <button className="w-full bg-[#489fb5] hover:bg-[#357d92] mt-6 py-2 text-white rounded-md text-lg transition-all"
          onClick={()=>{
            navigate('/adressPage')
          }}>
            Proceed
          </button>
        </div>
      </div>
    </>
  );
}
