import React from "react";

interface Option {
    text: string;
    kpi: {
        revenue: number;
        cost: number;
        retention: number;
        nps: number;
    };
}

interface DecisionOptionsProps {
    options: Option[];
    onOptionClick: (optionKpi: Option["kpi"]) => void;
}

const DecisionOptions: React.FC<DecisionOptionsProps> = ({ options, onOptionClick }) => {
    return (
        <div className="decision-options">
            {options.map((option, index) => (
                <button key={index} onClick={() => onOptionClick(option.kpi)}>
                    {option.text}
                </button>
            ))}
        </div>
    );
};

export default DecisionOptions;
