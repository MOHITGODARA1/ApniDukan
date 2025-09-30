
import { useNavigate } from "react-router-dom";
export function Payment() {
  const navigate=useNavigate();
  return (
    <div className="w-full h-auto flex justify-center items-center py-10">
      <div className="w-[90%] max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Choose Payment Method</h2>

        <form className="space-y-6">
          <div className="flex items-center gap-4">
            <input
              type="radio"
              id="online"
              name="payment"
              value="online"
              className="accent-[#489fb5] w-5 h-5"
            />
            <label htmlFor="online" className="text-lg text-gray-700 cursor-pointer">
              Credit(on EMI)
            </label>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="radio"
              id="cod"
              name="payment"
              value="cod"
              className="accent-[#489fb5] w-5 h-5"
            />
            <label htmlFor="cod" className="text-lg text-gray-700 cursor-pointer">
              Cash on Delivery
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#489fb5] hover:bg-[#357d92] text-white text-lg py-2 rounded-md transition-all"
           onClick={()=>{
            alert("order palced");
            navigate('/');
           }}>
            Place your Order
          </button>
        </form>
      </div>
    </div>
  );
}
