import "../assets/styles/Partnership.css";
import PartnershipSection1 from "../components/partnership/PartnershipSection1";
import PartnshipBanner from "../components/partnership/PartnershipBanner";
import PartnershipSection2 from "../components/partnership/PartnershipSection2";
import PartnerShipSection3 from "../components/partnership/PartnerShipSection3";

function Partnership() {
  return (
    <div>
      <PartnshipBanner />
      <PartnershipSection1 />
      <PartnershipSection2 />
      <PartnerShipSection3 />
    </div>
  );
}

export default Partnership;
