import { Navbar } from "../component/navbar";
import { CategoriesSection } from "../component/mainpagecomponent/cetegeriesSection";
import { SalePoster } from "../component/mainpagecomponent/saleposter";
import { ElectronicSection } from "../component/mainpagecomponent/electronicsection";
import { PhoneSection } from "../component/mainpagecomponent/phoneSection";
import { TopRated } from "../component/mainpagecomponent/toprated";
import { KhadbeejSection } from "../component/mainpagecomponent/khadbeejSection";
import { LargeAppliance } from "../component/mainpagecomponent/largeappliance";
import { Grocery } from "../component/mainpagecomponent/grocery";
import { Footer } from "../component/mainpagecomponent/footer";
export function MainPage() {
  return (
    <div>
      <Navbar />
      <CategoriesSection />
      <SalePoster />
      <ElectronicSection />
      <LargeAppliance />
      <PhoneSection />
      <TopRated />
      <KhadbeejSection />
      <Grocery />
      <Footer />
    </div>
  );
};
