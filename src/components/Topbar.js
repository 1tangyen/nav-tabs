import { useRef } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutline";

import "./Topbar.css";

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <Tabs
          defaultActiveKey="/home"
          id="navbar-tabs"
          onSelect={(key) => navigate(key)}
        >
          <Tab eventKey="/home" title={<>Home</>}>
            {/* Content for Home tab if needed */}
          </Tab>
          <Tab
            eventKey="/profile"
            title={
              <>
                <PersonOutlinedIcon style={{ marginRight: "5px" }} />
                My work
              </>
            }
          >
            {/* Content for My work tab if needed */}
          </Tab>
          <Tab
            eventKey="/report"
            title={
              <>
                <CalendarTodayOutlinedIcon style={{ marginRight: "5px" }} />
                Report
              </>
            }
          >
            {/* Content for Blog tab if needed */}
          </Tab>
          <Tab
            eventKey="/about"
            title={
              <>
                <HelpOutlineOutlinedIcon style={{ marginRight: "5px" }} />
                About me
              </>
            }
          >
            {/* Content for About me tab if needed */}
          </Tab>
        </Tabs>
      </nav>
    </header>
  );
}

export default Navbar;
