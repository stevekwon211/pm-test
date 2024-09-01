import React from "react";

const KpiDisplay = ({ kpi }) => {
    return (
        <div className="kpi-display">
            <div className="kpi-item">
                <div className="kpi-label">매출</div>
                <div className="kpi-value">{kpi.revenue}%</div>
            </div>
            <div className="kpi-item">
                <div className="kpi-label">비용</div>
                <div className="kpi-value">{kpi.cost}%</div>
            </div>
            <div className="kpi-item">
                <div className="kpi-label">리텐션</div>
                <div className="kpi-value">{kpi.retention}%</div>
            </div>
            <div className="kpi-item">
                <div className="kpi-label">NPS</div>
                <div className="kpi-value">{kpi.nps}</div>
            </div>
        </div>
    );
};

export default KpiDisplay;
