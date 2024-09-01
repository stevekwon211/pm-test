import React from "react";

interface ScenarioHeaderProps {
    step: number;
    title: string;
}

const ScenarioHeader: React.FC<ScenarioHeaderProps> = ({ step, title }) => {
    return (
        <div className="scenario-header">
            <p className="step-indicator">시나리오 {step}/5</p>
            <h2 className="scenario-title">{title}</h2>
        </div>
    );
};

export default ScenarioHeader;
