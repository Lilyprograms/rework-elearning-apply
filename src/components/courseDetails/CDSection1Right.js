import { FaMoneyBillWave } from "react-icons/fa";
import { IoTimeOutline, IoBarChartOutline } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { TfiMoney } from "react-icons/tfi";

function CDSection1Right() {
  return (
    <div className="CD_s1--right">
      <div className="CD_s1--right-cont">
        <div className="CD_s1--right-flex">
          <div className="flexed1">
            <FaMoneyBillWave />
            <h4>Total Payable Fee</h4>
          </div>
          <p className="CD_s1-price">$1,000</p>
        </div>
        <div className="CD_s1--right-flex">
          <div className="flexed1">
            <TfiMoney />
            <h4>Monthly Installments</h4>
          </div>
          <p>$100.00</p>
        </div>
        <div className="CD_s1--right-flex">
          <div className="flexed1">
            <IoTimeOutline />
            <h4>Duration</h4>
          </div>
          <p>9 months</p>
        </div>
        <div className="CD_s1--right-flex">
          <div className="flexed1">
            <IoBarChartOutline />
            <h4>Required Skill</h4>
          </div>
          <p>Beginner</p>
        </div>
        <div className="CD_s1--right-flex">
          <div className="flexed1">
            <TbCertificate />
            <h4>Certificate</h4>
          </div>
          <p>Yes</p>
        </div>
        <div className="CD_s1--right-flex">
          <div className="flexed1">
            <GoLocation />
            <h4>Location</h4>
          </div>
          <p>Online / Self-paced</p>
        </div>
      </div>
    </div>
  );
}

export default CDSection1Right;
