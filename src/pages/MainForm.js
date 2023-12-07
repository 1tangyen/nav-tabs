import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import TabbedComponent from "../components/TabbedComponent";
import Summary from "../components/Summary";
import StartForm from "../components/StartForm";
import ProductForm from "../components/ProductForm";
import SourceDataForm from "../components/SourceDataForm";

const MainForm = () => {
  const [activeTab, setActiveTab] = useState("Step1");

  const progressValues = {
    Step1: 0,
    Step2: 25,
    Step3: 50,
    Summary: 75,
    Complete: 100,
  };
  const progress = progressValues[activeTab];

  const renderFormContent = () => {
    switch (activeTab) {
      case "Step1":
        return <StartForm />;
      case "Step2":
        return <ProductForm />;
      case "Step3":
        return <SourceDataForm />;
      case "Summary":
        return <Summary />;
      // Add a case for 'Complete' if you have a Complete component
      default:
        return null;
    }
  };

  return (
    <div className="main-form-container">
      <TabbedComponent activeKey={activeTab} onSelect={setActiveTab} />
      <div className="progress-bar-container">
        <ProgressBar now={progress} label={`${progress}%`} />
      </div>
      {renderFormContent()}
    </div>
  );
};

export default MainForm;
