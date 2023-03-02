import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

export default function ApplicationProcess() {
  const [list] = useState([
    {
      id: 1,
      title: "Fill and submit the application form",
      descrp:
        "Applicant choose course interested in and apply by clicking on the Apply Now button on the course page, fill and submit the application form.",
    },
    {
      id: 2,
      title: "Attend pre-assessment classes",
      descrp:
        "Upon successful submission of application form, applicant get invited to attend classes that will prepare applicant for the assessment test.",
    },
    {
      id: 3,
      title: "Receive and attempt assessment tests",
      descrp:
        "When the pre-assessment class is completed, applicant will be given access to the assessment to attempt and submit for screening.",
    },
    {
      id: 4,
      title: "Complete enrolment and begin journey into tech",
      descrp: "Successful applicant will proceed to complete enrolment and start tech journey.",
    },
  ]);
  const [toggle, setToggle] = useState(0);
  const toggleAccordion = (id) => {
    setToggle(id);
    if (toggle === id) {
      setToggle(0);
    } else {
      setToggle(id);
    }
  };

  return (
    <div className="ApplicationProcess">
      <div className="">
        <div className="AP__content">
          {list.map((li) => (
            <div key={li.id} className={`AP_accordion ${toggle === li.id ? "AP_active" : ""}`}>
              <button
                className={`AP__accordion-btn ${toggle === li.id ? "AP_btn-active" : ""}`}
                onClick={() => toggleAccordion(li.id)}
              >
                <span className="AP_accordion-btn-text">{li.title}</span>
                <span>
                  <IoChevronDownSharp className={`AP__Acc-icon ${toggle === li.id ? "acc-icon-active" : ""}`} />
                </span>
              </button>
              <p className={`AP__accordion-text ${toggle === li.id ? "accordion-text-active" : ""}`}>{li.descrp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
