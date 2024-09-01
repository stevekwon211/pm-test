import React from "react";

interface ScenarioDescriptionProps {
    description: string;
}

const ScenarioDescription: React.FC<ScenarioDescriptionProps> = ({ description }) => {
    return <p className="scenario-description">{description}</p>;
};

export default ScenarioDescription;
