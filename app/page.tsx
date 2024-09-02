"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import StepModal from "./components/StepModal";
import ScenarioHeader from "./components/ScenarioHeader";
import ScenarioDescription from "./components/ScenarioDescription";
import DecisionOptions from "./components/DecisionOptions";
import KpiDisplay from "./components/KpiDisplay";
import ProgressIndicator from "./components/ProgressIndicator";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const steps = [
    {
        title: "20대 여성 사용자층 이탈",
        question:
            "고객 참여 증대 전략\n\n합류 후 첫 한 달, 당신은 센드스타일의 현재 상황을 면밀히 분석했습니다. 데이터 팀과의 협업 결과, 20대 여성 사용자층의 이탈이 가장 심각한 문제임을 발견했습니다. 이는 전체 매출 하락의 주요 원인으로 지목되었습니다.\n\n마케팅 리드 민지는 인플루언서 마케팅을 통해 빠르게 사용자를 유치할 수 있다고 주장합니다. 반면, 개발팀 리드 성준은 AI 기반 개인화 추천 시스템이 장기적으로 더 효과적일 것이라고 말합니다.\n\n한편, 외부 그로스 해킹 컨설턴트 John은 푸시 알림과 할인 쿠폰으로 단기간에 매출을 올릴 수 있다고 제안합니다. 마지막으로, 당신의 전 직장 동료인 UX 디자이너 줄리가 찾아와 인앱 메시징 시스템을 통한 맞춤형 콘텐츠 제공이 사용자 경험을 크게 개선할 수 있다고 조언합니다.\n\n당신은 어떤 전략을 선택하시겠습니까?",
        options: [
            {
                text: "인플루언서 협업을 통한 소셜 미디어 마케팅 강화",
                kpi: { revenue: 10, cost: 15, retention: 5, nps: 0 },
            },
            {
                text: "개인화된 스타일 추천 AI 기능 도입",
                kpi: { revenue: 5, cost: 10, retention: 10, nps: 3 },
            },
            {
                text: "푸시 알림 빈도 증가 및 할인 쿠폰 제공",
                kpi: { revenue: 7, cost: 0, retention: -3, nps: -3 },
            },
            {
                text: "인앱 메시징 시스템을 통한 맞춤형 컨텐츠 제공",
                kpi: { revenue: 8, cost: -5, retention: 12, nps: 9 },
            },
        ],
    },
    {
        title: "신규 '스타일 커뮤니티' 기능 출시",
        question:
            "첫 번째 전략 실행 후 한 달이 지났습니다. 약간의 개선이 보이지만, 아직 충분하지 않습니다. 이때, 개발팀에서 새로운 '스타일 커뮤니티' 기능 개발을 완료했다는 소식이 들려옵니다. 이 기능은 사용자들이 자신의 스타일을 공유하고 다른 사용자들과 소통할 수 있는 플랫폼입니다.\n\n마케팅 리드 민지는 이 기능의 성공적인 런칭이 매우 중요하다고 강조합니다. 그러나 예산 문제로 인해 모든 홍보 방안을 동시에 실행하기는 어려운 상황입니다.\n\n마케팅 팀의 재훈은 비용 효율적인 이메일 마케팅을 제안합니다. UX 디자이너 줄리는 앱 내 팝업 공지와 튜토리얼 제공이 효과적일 것이라고 말합니다. John은 인앱 메시지와 카카오톡을 통한 개인화된 안내를 추천합니다. 마지막으로, PR 매니저 유진은 대규모 오프라인 런칭 파티와 언론 보도를 통해 큰 주목을 받을 수 있다고 주장합니다.\n\n각 방안의 장단점을 고려하여, 어떤 런칭 전략을 선택하시겠습니까?",
        options: [
            { text: "이메일 뉴스레터로 새 기능 소개", kpi: { revenue: 0, cost: -3, retention: 0, nps: 4 } },
            {
                text: "앱 내 팝업 공지 및 튜토리얼 제공",
                kpi: { revenue: 3, cost: -2, retention: 4, nps: 4 },
            },
            {
                text: "인앱 메시지와 카카오톡으로 개인화된 안내 발송",
                kpi: { revenue: 7, cost: -5, retention: 8, nps: 16 },
            },
            {
                text: "오프라인 런칭 파티 개최 및 언론 보도",
                kpi: { revenue: 5, cost: 20, retention: 6, nps: 8 },
            },
        ],
    },
    {
        title: "고객 지원 개선",
        question:
            "'스타일 커뮤니티' 기능 출시 이후, 예상치 못한 문제가 발생했습니다. 새로운 기능에 대한 문의가 폭주하면서 고객 지원팀이 과부하 상태에 빠진 것입니다. 응답 시간이 크게 늘어났고, 이로 인해 고객 불만도 증가하고 있습니다.\n\nCS팀 리더 스티브는 즉각적인 인력 충원이 필요하다고 주장합니다. 반면, AI 개발자 제이든은 챗봇 도입으로 기본적인 문의를 자동화할 수 있다고 제안합니다.\n\nIT 인프라 담당 진은 통합 메시징 플랫폼 도입으로 전체 채널 관리를 일원화하면 효율성이 크게 개선될 것이라고 말합니다. 마지막으로, 컨텐츠 제작자 윌리는 상세한 FAQ와 비디오 가이드를 제작하여 고객들의 자가 해결을 돕자고 제안합니다.\n\n급박한 상황 속에서, 당신은 어떤 방식으로 고객 지원을 개선하시겠습니까?",
        options: [
            { text: "CS 인력 충원", kpi: { revenue: 0, cost: 15, retention: 3, nps: 12 } },
            { text: "AI 챗봇 도입으로 기본적인 문의 자동화", kpi: { revenue: 0, cost: -10, retention: 0, nps: 4 } },
            {
                text: "통합 메시징 플랫폼 도입으로 전체 채널 관리 일원화",
                kpi: { revenue: 4, cost: -8, retention: 7, nps: 10 },
            },
            { text: "셀프 서비스 FAQ 및 비디오 가이드 확충", kpi: { revenue: 0, cost: -5, retention: 2, nps: 6 } },
        ],
    },
    {
        title: "여름 시즌 프로모션",
        question:
            "고객 지원 문제를 어느 정도 해결한 후, 이제 다가오는 여름 시즌을 위한 대규모 프로모션을 준비해야 합니다. 경쟁사들도 이미 여름 캠페인을 시작했다는 소식이 들려오고 있습니다.\n\n마케팅 리드 민지는 공격적인 할인 정책으로 빠르게 매출을 올리자고 제안합니다. 패션 MD 워니는 여름 스타일 큐레이션과 한정판 상품으로 차별화를 꾀하자고 말합니다.\n\n그로스 해킹 전문가 John은 개인화된 여름 스타일 제안을 인앱 메시지로 전송하는 캠페인을 추천합니다. 마지막으로, 제휴 마케팅 담당 쿼츠는 인기 여름 휴가지와 연계한 프로모션으로 주목도를 높이자고 제안합니다.\n\n각 프로모션 방식이 매출, 사용자 유입, 비용에 미치는 영향이 다른 가운데, 당신은 어떤 여름 프로모션을 선택하시겠습니까?",
        options: [
            { text: "전 상품 20% 할인 이벤트", kpi: { revenue: 15, cost: 18, retention: 6, nps: 4 } },
            {
                text: "여름 스타일 큐레이션 이벤트 및 한정판 상품 출시",
                kpi: { revenue: 8, cost: 0, retention: 9, nps: 9 },
            },
            {
                text: "개인화된 여름 스타일 제안 인앱 메시지 캠페인",
                kpi: { revenue: 12, cost: -3, retention: 10, nps: 12 },
            },
            {
                text: "인기 여름 휴가지 연계 프로모션",
                kpi: { revenue: 10, cost: 8, retention: 7, nps: 7 },
            },
        ],
    },
    {
        title: "제품 개선을 위한 고객 피드백 수집",
        question:
            "여름 프로모션이 마무리되고,  센드스타일안의 성과를 분석하고 앞으로의 방향을 설정해야 할 때입니다. CEO는 지속적인 제품 개선을 위해 사용자들의 의견을 적극적으로 수집하라고 지시했습니다.\n\n마케팅 팀 재훈은 간단한 이메일 설문 조사를 제안합니다. UX 디자이너 줄리는 앱 사용 후 팝업 설문으로 즉각적인 피드백을 받자고 말합니다.\n\n고객 성공팀의 지은은 인앱 메시징을 통한 실시간 피드백 수집과 1:1 대화를 추천합니다. 마지막으로, CPO 현우는 외부 UX 리서치 전문 업체를 고용하여 심층적인 분석을 하자고 제안합니다.\n\n각 방식의 장단점을 고려하여, 어떤 피드백 수집 방법을 선택하시겠습니까?",
        options: [
            { text: "이메일 설문 조사 실시", kpi: { revenue: 0, cost: -2, retention: 0, nps: 6 } },
            { text: "앱 사용 후 팝업 설문", kpi: { revenue: 0, cost: -3, retention: -2, nps: 4 } },
            {
                text: "인앱 메시징을 통한 실시간 피드백 수집 및 1:1 대화",
                kpi: { revenue: 5, cost: -5, retention: 8, nps: 10 },
            },
            { text: "외부 UX 리서치 전문 업체 고용", kpi: { revenue: 0, cost: 12, retention: 4, nps: 8 } },
        ],
    },
];

const calculateAllScenarios = (steps) => {
    const results = [];

    const helper = (stepIndex, currentKpi) => {
        if (stepIndex === steps.length) {
            results.push(currentKpi);
            return;
        }

        steps[stepIndex].options.forEach((option) => {
            const newKpi = {
                revenue: currentKpi.revenue + option.kpi.revenue,
                cost: currentKpi.cost + option.kpi.cost,
                retention: currentKpi.retention + option.kpi.retention,
                nps: currentKpi.nps + option.kpi.nps,
            };
            helper(stepIndex + 1, newKpi);
        });
    };

    helper(0, { revenue: 0, cost: 0, retention: 0, nps: 0 });
    return results;
};

const calculatePercentile = (kpi, allResults) => {
    const totalKpi = kpi.revenue - kpi.cost + kpi.retention + kpi.nps;
    const sortedResults = allResults
        .map((result) => result.revenue - result.cost + result.retention + result.nps)
        .sort((a, b) => b - a); // Sort in descending order
    const rank = sortedResults.findIndex((value) => value <= totalKpi) + 1;
    return Math.floor((rank / sortedResults.length) * 100);
};

export default function Home() {
    const [currentStep, setCurrentStep] = useState(0);
    const [kpi, setKpi] = useState({ revenue: 0, cost: 0, retention: 0, nps: 0 });
    const [allResults, setAllResults] = useState([]);

    useEffect(() => {
        setAllResults(calculateAllScenarios(steps));
    }, []);

    const handleOptionClick = (optionKpi: { revenue: number; cost: number; retention: number; nps: number }) => {
        setKpi({
            revenue: kpi.revenue + (optionKpi.revenue || 0),
            cost: kpi.cost + (optionKpi.cost || 0),
            retention: kpi.retention + (optionKpi.retention || 0),
            nps: kpi.nps + (optionKpi.nps || 0),
        });
        setCurrentStep(currentStep + 1);
    };

    if (currentStep >= steps.length + 1) {
        const percentile = calculatePercentile(kpi, allResults);
        return (
            <StepModal>
                <h1>최종 결과</h1>
                <KpiDisplay kpi={kpi} />
                <p>상위 {percentile}%</p>
            </StepModal>
        );
    }

    if (currentStep === 0) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <Modal>
                    <div className="header">
                        <Image src="/logo.png" alt="Sendbird Logo" width={80} height={80} className="logo" />
                        <p className="branding-text">Sponsored by Sendbird</p>
                    </div>
                    <div>
                        <h1 className="main-heading">위기에 빠진 패션 커머스 스타트업에 PM으로 합류해버렸다!</h1>
                    </div>
                    <div>
                        <p className="subtext">
                            당신은 한국의 시리즈B 규모의 패션 커머스 스타트업 &apos;센드스타일(SendStyle)&apos;의 신임
                            PM으로 합류했습니다. 회사는 현재 다음과 같은 도전에 직면해 있습니다.
                            <br />
                            <br />
                            - 최근 3개월간 매출 15% 하락
                            <br />
                            - 제품 개발 및 마케팅 비용 30% 증가
                            <br />
                            - 월간 활성 사용자(MAU) 5% 감소
                            <br />
                            - NPS 35로 유지 (업계 평균)
                            <br />
                            <br />
                            CEO는 당신에게 6개월 내에 비즈니스 성장을 이끌어내라는 임무를 부여했습니다. 당신의 선택이
                            회사의 미래를 좌우할 것입니다.
                            <br />
                            <br />
                        </p>
                    </div>

                    <button className="cta-button" onClick={() => setCurrentStep(1)}>
                        센드스타일 살려보자!
                    </button>
                </Modal>
            </main>
        );
    }

    const step = steps[currentStep - 1];

    return (
        <main className="">
            <StepModal>
                <div style={{ maxWidth: "632px", minHeight: "480px" }}>
                    <ScenarioHeader step={currentStep} title={step.title} />
                    <ScenarioDescription description={step.question} />
                    <DecisionOptions options={step.options} onOptionClick={handleOptionClick} />
                    <KpiDisplay kpi={kpi} />
                    <ProgressIndicator step={currentStep} totalSteps={steps.length} />
                    <Footer />
                </div>
            </StepModal>
        </main>
    );
}
