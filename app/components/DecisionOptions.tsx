import React from "react";

const DecisionOptions = ({ options, onOptionClick }) => {
    return (
        <div className="decision-options">
            {options.map((option, index) => (
                <button key={index} className="option-button" onClick={() => onOptionClick(option.kpi)}>
                    {option.text}
                </button>
            ))}
        </div>
    );
};

export default DecisionOptions;
