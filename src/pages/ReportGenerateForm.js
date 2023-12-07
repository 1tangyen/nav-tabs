import React from "react";
import "../css/MultiStepForm.css"; // Import the CSS file
import MainForm from "./MainForm";

const ReportGenerateForm = () => {
  return (
    <div className="report-generate-form-container">
      <div className="report-generate-form-wrapper">
        <MainForm />
      </div>
    </div>
  );
};

export default ReportGenerateForm;
