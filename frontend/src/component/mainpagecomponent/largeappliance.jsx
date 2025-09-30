import TV from "../../assets/Tv1.jpg"
import AC from "../../assets/AC.jpg"
import freez from "../../assets/freez1.jpg"
import oven from "../../assets/oven.jpg"
import water from "../../assets/water1.jpg"
import washing from "../../assets/washingmac.jpg"
import { useNavigate } from "react-router-dom"
export function LargeAppliance() {
  const navigate=useNavigate();
  const item = [
    { id: 1, Image: TV, price: "29,999",oldprice:"32000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy.",name:"sony Tv" },
    { id: 2, Image: AC, price: "29,999",oldprice:"32000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy.",name:"sony Tv" },
    { id: 3, Image: freez, price: "29,999",oldprice:"32000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy.",name:"sony Tv" },
    { id: 4, Image: oven, price: "29,999",oldprice:"32000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy.",name:"sony Tv" },
    { id: 5, Image: water, price: "29,999",oldprice:"32000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy.",name:"sony Tv" },
    { id: 6, Image: washing, price: "29,999",oldprice:"32000",Discription:"Experience the next generation of wearable technology with the SmartCart Pro Smartwatch. Featuring advanced health tracking, seamless notifications, and a long-lasting battery, it's designed to keep you connected and healthy.",name:"sony Tv" },
  ];

  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="w-[90%] bg-orange-200 rounded-lg py-4">
        <div className="w-full px-4">
          <h1 className="text-2xl font-bold">Large Appliances</h1>
        </div>

        <div className="flex overflow-x-auto space-x-4 px-4 mt-3 pb-2 scrollbar-hide md:flex-wrap md:justify-start md:space-x-0 md:gap-7">
          {item.map((item) => (
            <div
              key={item.id}
              className="min-w-[9rem] max-w-[9rem] flex-shrink-0 flex flex-col justify-between hover:cursor-pointer"
              onClick={()=>{
                navigate("/Product",{state:item})
              }}
            >
              <div className="h-[130px] w-full flex justify-center items-center bg-white rounded-t-lg">
                <img
                  src={item.Image}
                  alt="itemimage"
                  className="object-contain h-full w-full rounded"
                />
              </div>
              <div className="text-center bg-orange-500 rounded-b-lg">
                <p className="font-semibold text-sm text-white">Just ₹{item.price}*</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
