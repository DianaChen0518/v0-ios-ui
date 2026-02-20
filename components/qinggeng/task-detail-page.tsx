"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft } from "./icons"
import type { TaskData } from "./task-square-page"

const flowSteps = [
  { icon: "clipboard", label: "报名" },
  { icon: "review", label: "审核" },
  { icon: "execute", label: "执行" },
  { icon: "submit", label: "提交" },
  { icon: "check", label: "验收" },
]

function StepIcon({ type }: { type: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    clipboard: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="3" width="10" height="14" rx="1.5" />
        <line x1="8" y1="7" x2="12" y2="7" />
        <line x1="8" y1="10" x2="12" y2="10" />
      </svg>
    ),
    review: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="12" height="14" rx="1.5" />
        <path d="M7 9l2 2 4-4" />
      </svg>
    ),
    execute: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="14" height="8" rx="1.5" />
        <circle cx="7" cy="12" r="1.5" />
        <circle cx="13" cy="12" r="1.5" />
      </svg>
    ),
    submit: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="3" width="10" height="14" rx="1.5" />
        <path d="M10 8v4M8 10h4" />
      </svg>
    ),
    check: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="6" />
        <path d="M7 10l2 2 4-4" />
      </svg>
    ),
  }
  return <>{iconMap[type]}</>
}

function BenefitIcon({ type }: { type: string }) {
  if (type === "bed") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 18v-4a4 4 0 014-4h8a4 4 0 014 4v4" stroke="#3DBBA0" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="6" y="17" width="16" height="3" rx="1" fill="#3DBBA0" />
        <circle cx="10" cy="12" r="2" fill="#3DBBA0" />
      </svg>
    )
  }
  if (type === "coin") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" fill="#F5C94C" />
        <circle cx="14" cy="14" r="6.5" fill="#FFD54F" />
        <text x="14" y="17.5" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#E6A700">{"¥"}</text>
      </svg>
    )
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="8" width="18" height="12" rx="2" stroke="#5B8DEF" strokeWidth="1.5" />
      <path d="M12 12l3 2-3 2z" fill="#5B8DEF" />
    </svg>
  )
}

export default function TaskDetailPage({
  onBack,
  task,
}: {
  onBack?: () => void
  task?: TaskData | null
}) {
  const [enrolled, setEnrolled] = useState(false)

  // Fallback data if no task provided
  const title = task?.title ?? "古村落短视频拍摄"
  const image = task?.image ?? "/images/village1.jpg"
  const level = task?.level ?? "进阶级"
  const tag = task?.tag ?? "新媒体"
  const deadline = task?.deadline ?? "2024.10.30"
  const requirements = task?.requirements ?? [
    "拍摄3条1分钟短视频",
    "主题：古村落建筑与人文",
    "成果要求：清晰度1080P",
  ]
  const benefitDetails = task?.benefitDetails ?? [
    { icon: "bed", label: "免费食宿3天" },
    { icon: "coin", label: "获得300积分" },
    { icon: "video", label: "优秀作品展播" },
  ]

  return (
    <div className="flex flex-col h-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#3DBBA0] px-4 pt-2 pb-4 flex items-center">
        <button onClick={onBack} className="mr-3">
          <ChevronLeft />
        </button>
        <h1 className="text-[#fff] text-lg font-semibold flex-1 text-center pr-8">
          任务详情
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Task Banner */}
        <div className="px-4 mt-4">
          <div className="relative h-48 rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-[#fff] font-bold text-xl mb-2">
                {title}
              </h2>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs px-2 py-0.5 rounded bg-[#3DBBA0] text-[#fff]">
                  {level}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#3DBBA0] text-[#fff]">
                  {tag}
                </span>
              </div>
              <p className="text-[#fff]/80 text-xs">{"截止时间："}{deadline}</p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="px-4 mt-5">
          <h3 className="text-[#333] font-bold text-base mb-2">任务需求</h3>
          <div className="text-[#666] text-sm leading-relaxed">
            {requirements.map((req, i) => (
              <p key={i}>{req}</p>
            ))}
          </div>
        </div>

        {/* Flow */}
        <div className="px-4 mt-5">
          <h3 className="text-[#333] font-bold text-base mb-4">任务流程</h3>
          <div className="flex items-center justify-between px-2">
            {flowSteps.map((step, index) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#3DBBA0] flex items-center justify-center">
                    <StepIcon type={step.icon} />
                  </div>
                  <span className="text-[#666] text-xs mt-1.5">{step.label}</span>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="w-4 h-px bg-[#3DBBA0] mx-0.5 -mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="px-4 mt-5 pb-24">
          <h3 className="text-[#333] font-bold text-base mb-4">参与权益</h3>
          <div className="flex items-start justify-around">
            {benefitDetails.map((benefit) => (
              <div key={benefit.label} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: benefit.icon === "bed" ? "#E8F8F515" : benefit.icon === "coin" ? "#FFF8E1" : "#EEF2FF",
                  }}
                >
                  <BenefitIcon type={benefit.icon} />
                </div>
                <span className="text-[#666] text-xs text-center">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-3 bg-[#fff] border-t border-[#f0f0f0]">
        <button
          onClick={() => setEnrolled(!enrolled)}
          className={`w-full font-semibold text-base py-3 rounded-xl transition-all ${
            enrolled
              ? "bg-[#f0f0f0] text-[#999]"
              : "bg-[#3DBBA0] text-[#fff]"
          }`}
        >
          {enrolled ? "已报名，取消报名" : "立即报名"}
        </button>
      </div>
    </div>
  )
}
