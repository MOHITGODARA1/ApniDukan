import { useNavigate } from "react-router-dom"
export function AdressSection(){
  const nevigate=useNavigate();
  return(
    <>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-[90%]">
          <form action="#" className="w-full">
            <div className="flex flex-col mt-2.5">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Full Name" className="border border-gray-800 rounded-lg h-9 mt-1.5 pl-1.5 outline-none" required/>
            </div>
            <div className="flex flex-col mt-2.5">
              <label htmlFor="number">Phone Number</label>
              <input type="tel" id="number" placeholder="Phone Number" className="border border-gray-800 rounded-lg h-9 mt-1.5 pl-1.5 outline-none" required/>
            </div>
            <div className="flex flex-col mt-2.5">
              <label htmlFor="Pincode">Pincode</label>
              <input type="text" id="Pincode" placeholder="Pincode" className="border border-gray-800 rounded-lg h-9 mt-1.5 pl-1.5 outline-none" required/>
            </div>
            <div className="flex flex-col mt-2.5">
              <label htmlFor="City">City/Village</label>
              <input type="text" id="City" placeholder="City/Village" className="border border-gray-800 rounded-lg h-9 mt-1.5 pl-1.5 outline-none" required/>
            </div>
            <div className="flex flex-col mt-2.5">
              <label htmlFor="WardNo">Address</label>
              <input type="text" id="WardNo" placeholder="Ward.No,Shope Name" className="border border-gray-800 rounded-lg h-9 mt-1.5 pl-1.5 outline-none" required/>
            </div>
            <button className="w-full bg-[#489fb5] hover:bg-[#357d92] mt-6 py-2 text-white rounded-md text-lg transition-all" type="Submit" onClick={()=>{
              nevigate("/paymentPage")
            }}>
              Proceed to payment
            </button>
          </form>
        </div>
      </div>
    </>
  )
}