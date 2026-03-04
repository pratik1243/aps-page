import React, { useState } from "react";
import { MdOutlineTimer } from "react-icons/md";
import LogCard from "./LogCard";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const ConsoleSection = () => {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="console-log-accordion">
      <div
        className="console-log-header"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="log-scan-txt">
          <span className="live-scan-txt">Live Scan Console</span>

          <div className="running-txt">
            <MdOutlineTimer />
            &nbsp;Running...
          </div>
        </div>

        <div className="btn-sec">
          <IoIosArrowDown size={17} />
          <IoClose size={17} />
        </div>
      </div>
      <div className={`console-log-content ${open ? "open" : ""}`}>
        <div className="log-tab-sec">
          <div className="log-tab-btn-sec">
            <div
              className={`log-tab ${activeTab == 0 ? "active" : ""}`}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              Activity Log
            </div>
            <div
              className={`log-tab ${activeTab == 1 ? "active" : ""}`}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Verification Loops
            </div>
          </div>
          {activeTab == 0 && (
            <div className="log-tab-content">
              <p>
                [09:00:00] I'll begin a systematic penetration test on
                helpdesk.democorp.com. Let me start with reconnaissance and
                enumeration.
              </p>

              <p>
                [09:01:00] Good! target is online. Now let me perform port
                scanning to identify running services.
              </p>

              <p>[09:02:00] Excellent reconnaissance results:</p>
              <p>
                - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web
                server)
              </p>
              <p>
                Let me probe the web server on target first to understand its
                structure.
              </p>

              <p>
                [09:03:00] Great! I found a login page for a Help Desk Platform.
                I can see a useful comment: "TODO: Delete the testing account
                (test:test)". Let me test this credential. The login redirects
                to /password/test. Let me follow that path and explore it.
              </p>

              <p>
                [09:04:00] The POST method is not allowed on /password/test. Let
                me check what the JavaScript does - it posts to "#" which means
                the current page. Let me try a different approach.
              </p>

              <p>
                [09:05:00] It redirects back to /password/test. Let me check if
                there's an /api endpoint or look for other paths. Let me also
                try exploring with the test:test password directly on other
                endpoints.
              </p>

              <p>
                [09:06:00] Great! I can access the dashboard using the
                'X-UserId: 10032' header. The dashboard shows "Welcome, John
                Doe". This suggests an <strong>IDOR vulnerability</strong> - I
                can access any user's dashboard by just changing the X-UserId
                header. Let me explore more of the application...
              </p>
            </div>
          )}
          {activeTab == 1 && (
            <div className="log-tab-content">
              <p>No Verification Loops Found!</p>{" "}
            </div>
          )}
        </div>

        <div className="log-cards-section">
          <div className="log-heading">Finding log</div>
          <div className="log-inner-cards-sec">
            <LogCard
              severity="critical"
              title="SQL Injection in Authentication Endpoint"
              api="/api/users/profile"
              subtext="Time-based blind SQL injection confirmed on user-controlled input authentication flow. Exploration allows database-level access"
            />
            <LogCard
              severity="high"
              title="SQL Injection in Authentication Endpoint"
              api="/api/users/profile"
              subtext="Time-based blind SQL injection confirmed on user-controlled input authentication flow. Exploration allows database-level access"
            />
            <LogCard
              severity="medium"
              title="SQL Injection in Authentication Endpoint"
              api="/api/users/profile"
              subtext="Time-based blind SQL injection confirmed on user-controlled input authentication flow. Exploration allows database-level access"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsoleSection;
