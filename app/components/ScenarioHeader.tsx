import React from "react";

const ScenarioHeader = ({ step, title }) => {
    return (
        <div className="scenario-header">
            <p className="step-indicator">시나리오 {step}/5</p>
            <h2 className="scenario-title">{title}</h2>
        </div>
    );
};

export default ScenarioHeader;
