import { ProductDetail } from "../component/Productpage/productDetail"
import { ProductImage } from "../component/Productpage/Productimage"
import { Navbar } from "../component/navbar";
import { useLocation } from "react-router-dom"
import { Recomendation } from "../component/Productpage/afteraproduct";
import { Footer } from "../component/mainpagecomponent/footer";
export function ProductPage(){
  const location=useLocation();
  const product=location.state;
  return(
    <>
      <Navbar />
      <div className="flex w-full h-auto md:flex-row flex-col">
        < ProductImage product={product}/>
        <ProductDetail product={product}/>
      </div>
      < Recomendation />
      <Footer />
    </>
  )
}