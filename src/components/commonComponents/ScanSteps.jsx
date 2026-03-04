import React from "react";
import { RiFlaskLine } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { PiNetwork } from "react-icons/pi";

function ScanSteps() {
  return (
    <div className="scan-steps-sec">
      <div className="scan-step-item active">
        <div className="step-icon">
          <TbWorldSearch />
        </div>
        <span className="step-txt">Spidering</span>
      </div>
      <div className="scan-step-item">
        <div className="step-icon">
          <PiNetwork />
        </div>
        <span className="step-txt">Mapping</span>
      </div>
      <div className="scan-step-item">
        <div className="step-icon">
          <RiFlaskLine />
        </div>
        <span className="step-txt">Testing</span>
      </div>
      <div className="scan-step-item">
        <div className="step-icon">
          <MdOutlineSpeakerNotes />
        </div>
        <span className="step-txt">Validating</span>
      </div>
      <div className="scan-step-item">
        <div className="step-icon">
          <FaRegFileAlt />
        </div>
        <span className="step-txt">Reporting</span>
      </div>
    </div>
  );
}

export default ScanSteps;
