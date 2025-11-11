import { Navbar } from "../components/navbar";
import ProductCategory from "../components/ProductCategory";
import FeatureBulk from "../components/Featurebulk";
import Contactus from "../components/contactus";
import FooterSection from "../components/footerSection";
export function MainPage() {
  return (
    <div>
      <Navbar />
      <ProductCategory />
      <FeatureBulk />
      <Contactus />
      <FooterSection />
    </div>
  );
};
