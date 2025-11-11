import { useState } from "react";

function BulkProducts() {

  const products = [
    { name: "Rice", price: "₹25/kg", moqLabel: "Min 10 Kg", moq: 10, img: "" },
    { name: "Wheat Flour", price: "₹35/kg", moqLabel: "Min 10 Kg", moq: 10, img: "" },
    { name: "Sunflower Oil", price: "₹110/litre", moqLabel: "Min 5 Litre", moq: 5, img: "" },
    { name: "Sugar", price: "₹42/kg", moqLabel: "Min 10 Kg", moq: 10, img: "" },
    { name: "Potato", price: "₹20/kg", moqLabel: "Min 20 Kg", moq: 20, img: "" },
    { name: "Onion", price: "₹28/kg", moqLabel: "Min 20 Kg", moq: 20, img: "" },
    { name: "Ladyfinger", price: "₹25/kg", moqLabel: "Min 10 Kg", moq: 10, img: "" },
    { name: "Stainless Screws", price: "₹320 / 100 pcs", moqLabel: "Min 100 pcs", moq: 100, img: "" },
    { name: "Plastic Bucket", price: "₹85/each", moqLabel: "Min 20 pcs", moq: 20, img: "" },
    { name: "Cleaning Brush", price: "₹22/each", moqLabel: "Min 30 pcs", moq: 30, img: "" }
  ];

  const [quantities, setQuantities] = useState(products.map(p => p.moq));

  const updateQty = (index, newQty) => {
    setQuantities(prev => prev.map((qty, i) =>
      i === index ? Math.max(newQty, products[index].moq) : qty
    ));
  };

  return (
    <div className="w-[90%] mx-auto mt-10">

      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-xl text-[#1e293b]">Featured Bulk Products</h1>
        <button className="text-[#489fb5] font-medium flex items-center gap-1 hover:underline">
          View All Products <span className="text-lg">→</span>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        
        {products.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-[#dce3eb] hover:shadow-md transition p-4">

            {/* IMAGE AREA (40% of card) */}
            <div className="w-full h-28 bg-[#f5f9fc] border border-[#dce3eb] rounded-lg flex items-center justify-center overflow-hidden mb-3">
              {/* You will put an image later  */}
              {/* Example: <img src={item.img} className="h-full object-contain" /> */}
              <span className="text-gray-400 text-sm">Image</span>
            </div>

            {/* PRODUCT NAME */}
            <h2 className="font-semibold text-[#1e293b]">{item.name}</h2>

            {/* PRICE */}
            <p className="text-[#489fb5] font-medium mt-1">{item.price}</p>

            {/* MOQ */}
            <p className="text-sm text-gray-500">{item.moqLabel}</p>

            {/* QUANTITY CONTROL */}
            <div className="flex items-center gap-2 mt-3 border border-gray-300 rounded-lg">
              <button
                onClick={() => updateQty(index, quantities[index] - 1)}
                className="px-3 py-1  rounded-lg text-3xl"
              >
                -
              </button>

              <input
                type="text"
                className="w-full text-center  p-2 cursor-default"
                value={quantities[index]}
                onChange={(e) => updateQty(index, parseInt(e.target.value))}
              />

              <button
                onClick={() => updateQty(index, quantities[index] + 1)}
                className="px-3 py-1  rounded-lg text-2xl"
              >
                +
              </button>
            </div>

            {/* ADD TO CART BUTTON */}
            <button className="mt-4 bg-[#489fb5] hover:bg-[#3f8ea1] text-white font-medium px-4 py-2 rounded-lg w-full cursor-pointer">
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BulkProducts;
