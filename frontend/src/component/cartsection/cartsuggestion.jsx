import TV from "../../assets/Tv1.jpg"
import AC from "../../assets/AC.jpg"
import freez from "../../assets/freez1.jpg"
import oven from "../../assets/oven.jpg"
import water from "../../assets/water1.jpg"
import washing from "../../assets/washingmac.jpg"
export function CartSuggestion() {
  const item = [
  {
    id: 1,
    image: TV,
    price: "29,999",
    name: "LG LCD",
    description: "24-inch OLED display"
  },
  {
    id: 2,
    image: AC,
    price: "34,499",
    name: "Samsung Split AC",
    description: "1.5 Ton, 5 Star, Inverter Split AC"
  },
  {
    id: 3,
    image: freez,
    price: "27,890",
    name: "Whirlpool Fridge",
    description: "260L Double Door Frost Free Refrigerator"
  },
  {
    id: 4,
    image: oven,
    price: "8,499",
    name: "IFB Microwave Oven",
    description: "30L Convection Microwave Oven"
  },
  {
    id: 5,
    image: water,
    price: "12,999",
    name: "Kent Water Purifier",
    description: "RO + UV + UF + TDS Control, 8L Storage"
  },
  {
    id: 6,
    image: washing,
    price: "22,799",
    name: "Bosch Washing Machine",
    description: "7kg Front Load Fully Automatic Washing Machine"
  }
];

  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="w-[90%]  rounded-lg py-4">
        <div className="w-full px-4">
          <h1 className="text-2xl font-bold">you might like this</h1>
        </div>

        <div className="flex overflow-x-auto space-x-4 px-4 mt-3 pb-2 scrollbar-hide md:flex-wrap md:justify-start md:space-x-0 md:gap-7">
          {item.map((item) => (
            <div
              key={item.id}
              className="min-w-[9rem] max-w-[9rem] flex-shrink-0 flex flex-col justify-between"
            >
              <div className="h-[130px] w-full flex justify-center items-center bg-white rounded-t-lg">
                <img
                  src={item.image}
                  alt="itemimage"
                  className="object-contain h-full w-full rounded"
                />
              </div>
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-sm">{item.description.split(" ").slice(0, 4).join(" ") + "..."}</p>
                <p className="text-green-700">
                 ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
