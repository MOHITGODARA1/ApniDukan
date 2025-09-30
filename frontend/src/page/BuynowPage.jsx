import { OrderSummry } from "../component/buynow/Ordersummry"
import { CartNavbar } from "../component/cartsection/cartnavbaer"
export function BuyNowPage(){
  return(
    <>
      <CartNavbar />
      <OrderSummry />
    </>
  )
}