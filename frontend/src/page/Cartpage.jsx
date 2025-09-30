import { ItemAdd } from "../component/cartsection/itemadd";
import { CartSuggestion } from "../component/cartsection/cartsuggestion";
import { Footer } from "../component/mainpagecomponent/footer";
import { CartNavbar } from "../component/cartsection/cartnavbaer";
export function CartPage(){
  return(
    <>
      <CartNavbar />
      <ItemAdd />
      <CartSuggestion />
      <Footer />
    </>
  )
}