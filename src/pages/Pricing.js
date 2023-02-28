import "../assets/styles/Pricing.css";
import PricingBanner from "../components/pricing/PricingBanner";
import PricingSection1 from "../components/pricing/PricingSection1";
import PricingSection2 from "../components/pricing/PricingSection2";
import FooterSub from "../layouts/FooterSub";

function Pricing() {
  return (
    <div>
      <PricingBanner />
      <PricingSection1 />
      <PricingSection2 />
      <FooterSub />
    </div>
  );
}

export default Pricing;
