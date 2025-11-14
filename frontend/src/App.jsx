import {MainPage} from "./page/mainpage"
import { LoginPage } from "./page/loginpage"
import {Routes,Route,Link} from 'react-router-dom'
import { SingUppage } from "./page/singuppage"
import VerifyOtpPage from "./page/VerifyOtp"
import AllProduct from "./page/Allproduct.page"
import Order from "./page/order.page"
import CartPage from "./page/Cart.page"
function App() {
  return (
    <>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Allproduct" element={<AllProduct/>} />
            <Route path='/loginpage' element={<LoginPage />} />
            <Route path='/singuppage' element={<SingUppage />} />
            <Route path='/verfy-OTP' element={<VerifyOtpPage />} />
            <Route path="/OrderPage" element={<Order />} />
            <Route path="/Cartpage" element={<CartPage />} />
          </Routes>
    </>
  )
}

export default App
