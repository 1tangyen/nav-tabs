import React from "react";
import { Nav } from "react-bootstrap";

const TabbedComponent = ({ activeKey, onSelect }) => {
  const tabs = ["Step1", "Step2", "Step3", "Summary", "Complete"];

  return (
    <Nav
      variant="tabs"
      activeKey={activeKey}
      onSelect={onSelect}
      className="step-nav"
    >
      {tabs.map((tab, index) => (
        <Nav.Item
          key={tab}
          className={activeKey === tab ? "active step" : "step"}
        >
          <Nav.Link eventKey={tab}>{tab}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default TabbedComponent;
