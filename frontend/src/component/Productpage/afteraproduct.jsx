import TV from "../../assets/Tv1.jpg"
import AC from "../../assets/AC.jpg"
import freez from "../../assets/freez1.jpg"
import oven from "../../assets/oven.jpg"
import water from "../../assets/water1.jpg"
import washing from "../../assets/washingmac.jpg"
export function Recomendation() {
  const item = [
    { id: 1, image: TV, price: "29,999" },
    { id: 2, image: AC, price: "29,999" },
    { id: 3, image: freez, price: "29,999" },
    { id: 4, image: oven, price: "29,999" },
    { id: 5, image: water, price: "29,999" },
    { id: 6, image: washing, price: "29,999" },
  ];

  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="w-[90%]  rounded-lg py-4">
        <div className="w-full px-4">
          <h1 className="text-2xl font-bold">Best deals</h1>
        </div>

        <div className="flex overflow-x-auto space-x-4 px-4 mt-3 pb-2 scrollbar-hide md:flex-wrap md:justify-start md:space-x-0 md:gap-7">
          {item.map((item) => (
            <div
              key={item.id}
              className="min-w-[9rem] max-w-[9rem] flex-shrink-0 flex flex-col justify-between cursor-pointer"
            >
              <div className="h-[130px] w-full flex justify-center items-center bg-white rounded-t-lg">
                <img
                  src={item.image}
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
