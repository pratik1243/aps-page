import React from "react";

const ScanParams = () => {
  return (
    <div className="scan-detail-params">
      <div className="scan-detail-param-card">
        <div className="txt-key">Scan Type</div>
        <div className="txt-value">Grey Box</div>
      </div>
      <div className="scan-detail-param-card">
        <div className="txt-key">Targets</div>
        <div className="txt-value">Google.com</div>
      </div>
      <div className="scan-detail-param-card">
        <div className="txt-key">Started At</div>
        <div className="txt-value">Nov 22, 9:00AM</div>
      </div>
      <div className="scan-detail-param-card">
        <div className="txt-key">Credentials</div>
        <div className="txt-value">2 Active</div>
      </div>
      <div className="scan-detail-param-card">
        <div className="txt-key">Files</div>
        <div className="txt-value">Control.pdf</div>
      </div>
      <div className="scan-detail-param-card">
        <div className="txt-key">Checklists</div>
        <div className="txt-value">40/350</div>
      </div>
    </div>
  );
};

export default ScanParams;
