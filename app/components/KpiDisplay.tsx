import React from "react";

interface Kpi {
    revenue: number;
    cost: number;
    retention: number;
    nps: number;
}

interface KpiDisplayProps {
    kpi: Kpi;
}

const KpiDisplay: React.FC<KpiDisplayProps> = ({ kpi }) => {
    return (
        <div className="kpi-display">
            <div className="kpi-item">Revenue: {kpi.revenue}</div>
            <div className="kpi-item">Cost: {kpi.cost}</div>
            <div className="kpi-item">Retention: {kpi.retention}</div>
            <div className="kpi-item">NPS: {kpi.nps}</div>
        </div>
    );
};

export default KpiDisplay;
