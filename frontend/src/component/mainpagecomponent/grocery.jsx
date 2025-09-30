import g1 from "../../assets/g1.png"
import { useNavigate } from "react-router-dom"
export function Grocery(){
  const navigate=useNavigate();
  const items=[
        {id:1,name:"realme Teach",Image:g1,price:"10000",oldprice:"12000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy."},
        {id:2,name:"realme Teach",Image:g1,price:"10000",oldprice:"12000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy."},
        {id:3,name:"realme Teach",Image:g1,price:"10000",oldprice:"12000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy."},
        {id:4,name:"realme Teach",Image:g1,price:"10000",oldprice:"12000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy."},
        {id:5,name:"realme Teach",Image:g1,price:"10000",oldprice:"12000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy."},
        {id:6,name:"realme Teach",Image:g1,price:"10000",oldprice:"12000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy."}
      ]
      return(
          <>
            <div className="w-full flex justify-center items-center">
              <div className="w-[90%] flex flex-col gap-2 rounded-lg mt-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold md:ml-7 ml-2 mt-2">Grocery Item</h1>
                  <button className="bg-black text-white p-2 rounded-md m-2 flex items-center gap-1 w-15 flex-shrink-0 justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
                <div className="grid md:grid-cols-6  grid-cols-3 place-items-center">
                  {
                    items.map((item)=>{
                      return(
                        <div className="h-40 mt-4 w-22 flex flex-col gap-2 rounded-lg cursor-pointer"
                        key={item.id}
                        onClick={()=>{
                        navigate("/Product",{state:item});
                      }}>
                          <div className="h-[60%] w-full">
                            <img src={item.Image} alt="not found" className="h-full w-full object-contain" />
                          </div>
                          <div className="h-[40%] flex flex-col">
                            <p className="text-sm truncate font-light">{item.name}</p>
                            <p className="text-[10px] font-semibold">₹{item.price} <span className="text-gray-500 line-through ml-1">₹{item.oldprice}</span></p>
                            <p className="text-[14px] font-semibold text-green-700">Hot Deal</p>
                          </div>
                        </div>
                      )
                  })
                  }
                </div>
              </div>
            </div>
          </>
      )
}