import React from "react";

const ProgressIndicator = ({ step, totalSteps }) => {
    const progress = (step / totalSteps) * 100;
    return (
        <div className="progress-indicator">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressIndicator;
