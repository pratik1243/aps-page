import React from "react";
import ConsoleSection from "../commonComponents/ConsoleSection";
import ScanSteps from "../commonComponents/ScanSteps";
import ScanParams from "../commonComponents/ScanParams";

const ScanDetail = () => {
  return (
    <div className="scan-detail-sec">
      <div className="scan-analytics-sec">
        <div className="scan-progress-sec">
          <div className="progress-sec">
            <div>
              <h3>0%</h3>
              <span>In Progress</span>
            </div>
          </div>
        </div>
        <div>
          <ScanSteps />
          <ScanParams />
        </div>
      </div>
      <ConsoleSection />
    </div>
  );
};

export default ScanDetail;
