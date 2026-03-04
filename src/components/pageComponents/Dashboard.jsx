import React from "react";
import { IoBan, IoSearchSharp } from "react-icons/io5";
import DashboardCard from "../commonComponents/DashboardCard";
import { PiWarningBold } from "react-icons/pi";
import { GrFormSearch } from "react-icons/gr";
import Table from "../commonComponents/Table";

const Dashboard = () => {
  const tableData = {
    columns: [
      {
        header: "Scan Name",
        accessor: "scan_name",
      },
      {
        header: "Type",
        accessor: "type",
      },
      {
        header: "Status",
        accessor: "status",
      },
      {
        header: "Progress",
        accessor: "progress",
      },
      {
        header: "Vulnerability",
        accessor: "vulnerability",
      },
      {
        header: "Last Scan",
        accessor: "last_scan",
      },
    ],
    rows: [
      {
        scan_name: "web app servers",
        type: "greybox",
        status: "completed",
        progress: 100,
        vulnerability: [5, 12, 23, 18],
        last_scan: "4d ago",
      },
      {
        scan_name: "web app servers",
        type: "greybox",
        status: "completed",
        progress: 100,
        vulnerability: [5, 12, 23, 18],
        last_scan: "4d ago",
      },
      {
        scan_name: "web app servers",
        type: "greybox",
        status: "completed",
        progress: 100,
        vulnerability: [5, 12, 23, 18],
        last_scan: "4d ago",
      },
      {
        scan_name: "web app servers",
        type: "greybox",
        status: "scheduled",
        progress: 70,
        vulnerability: [5, 12, 23, 18],
        last_scan: "4d ago",
      },
      {
        scan_name: "web app servers",
        type: "greybox",
        status: "failed",
        progress: 10,
        vulnerability: [5, 12],
        last_scan: "4d ago",
      },
      {
        scan_name: "web app servers",
        type: "greybox",
        status: "completed",
        progress: 100,
        vulnerability: [5, 12, 23, 18],
        last_scan: "4d ago",
      },
    ],
  };

  return (
    <div>
      <div className="dashboard-params">
        <div className="dashboard-param-card">
          <span className="txt-key">Org: </span>
          <span className="txt-value">Project X</span>
        </div>
        <div className="dashboard-param-card">
          <span className="txt-key">Owner: </span>
          <span className="txt-value">Nammagiri</span>
        </div>
        <div className="dashboard-param-card">
          <span className="txt-key">Total Scans: </span>
          <span className="txt-value">100</span>
        </div>
        <div className="dashboard-param-card">
          <span className="txt-key">Scheduled: </span>
          <span className="txt-value">100</span>
        </div>
        <div className="dashboard-param-card">
          <span className="txt-key">Rescans: </span>
          <span className="txt-value">100</span>
        </div>
        <div className="dashboard-param-card">
          <span className="txt-key">Failed Scans: </span>
          <span className="txt-value">100</span>
        </div>
      </div>
      <div className="scan-anlytics-cards-sec">
        <DashboardCard
          title={"Critical Severity"}
          iconColor={"error"}
          icon={<IoBan size={17} />}
          percent={86}
          status={"error"}
          countType={"UP"}
          subtext={"+2% increase than yesterday"}
        />
        <DashboardCard
          title={"High Severity"}
          iconColor={"warning"}
          icon={<PiWarningBold size={18} />}
          percent={86}
          countType={"DOWN"}
          status={"success"}
          subtext={"+2% increase than yesterday"}
        />
        <DashboardCard
          title={"Medium Severity"}
          iconColor={"warning"}
          icon={<PiWarningBold size={18} />}
          percent={86}
          status={"error"}
          countType={"UP"}
          subtext={"+2% increase than yesterday"}
        />
        <DashboardCard
          title={"Low Severity"}
          icon={<IoSearchSharp size={18} />}
          iconColor={"info"}
          percent={86}
          status={"error"}
          countType={"UP"}
          subtext={"+2% increase than yesterday"}
        />
      </div>

      <div className="dashboard-table">
        <Table tableData={tableData} />
      </div>
    </div>
  );
};

export default Dashboard;
