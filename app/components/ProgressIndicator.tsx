import React from "react";

interface ProgressIndicatorProps {
    step: number;
    totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ step, totalSteps }) => {
    const progress = (step / totalSteps) * 100;
    return (
        <div className="progress-indicator">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressIndicator;
