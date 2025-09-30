import {MainPage} from "./page/mainpage"
import { LoginPage } from "./page/loginpage"
import {Routes,Route,Link} from 'react-router-dom'
import { SingUppage } from "./page/singuppage"
import { PhonePage } from "./page/phonepage"
import { KhadBeejPage} from "./page/khadbeejpage"
import { ElectronicsPage } from "./page/Electronicpgae"
import { FastFoodpage } from "./page/fastfoodpage"
import { Grocerypage } from "./page/Grocerypage"  
import { ProductPage } from "./page/Product"
import { CartPage } from "./page/Cartpage"
import { CartProvider } from "./component/storedata/cartdata"
import { BuyNowPage } from "./page/BuynowPage"
import { AdressPage } from "./page/adressPage"
import { PaymentPage } from "./page/paymentPage"
import { ContactUs } from "./page/Contactus"
function App() {
  return (
    <>
        <CartProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/loginpage' element={<LoginPage />} />
            <Route path='/singuppage' element={<SingUppage />} />
            <Route path="/Phonepage" element={<PhonePage />} />
            <Route path="/khadbeejpage" element={<KhadBeejPage />} />
            <Route path="/Electronicpgae" element={<ElectronicsPage />} />
            <Route path="/fastfoodpage" element={<FastFoodpage />} />
            <Route path="/Grocerypage" element={<Grocerypage />} />
            <Route path="/Product" element={<ProductPage />} />
            <Route path="/Cartpage" element={<CartPage />} />
            <Route path="/BuynowPage" element={<BuyNowPage />} />
            <Route path="/adressPage" element={<AdressPage />} /> 
            <Route path="/paymentPage" element={<PaymentPage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </CartProvider>
    </>
  )
}

export default App
