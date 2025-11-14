import OrderTrack from "../Orders/trackorder"
import Navbar from "../components/navbar"
import FooterSection from "../components/footerSection"
function Order(){
  return(
    <>
      <Navbar />
      <OrderTrack />
      <FooterSection />
    </>
  )
}
export default Order