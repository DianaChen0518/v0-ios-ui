"use client"

import { useState } from "react"
import { BedIcon, CoinIcon } from "./icons"

const levels = ["全部", "基础级", "进阶级", "高阶级"]
const categories = ["新媒体", "设计", "摄影", "农学", "玩乐", "教育"]

const tasks = [
  {
    id: 1,
    title: "乡村品牌设计助推",
    tag: "设计",
    tagColor: "#3DBBA0",
    description: "需求：LOGO及包装设计",
    rewards: ["食宿", "积分"],
  },
  {
    id: 2,
    title: "古村落短视频拍摄",
    tag: "新媒体",
    tagColor: "#3DBBA0",
    description: "需求：3条抖音短视频",
    rewards: ["食宿", "积分"],
  },
  {
    id: 3,
    title: "乡村摄影作品征集",
    tag: "摄影",
    tagColor: "#3DBBA0",
    description: "需求：10张高质量乡村照片",
    rewards: ["食宿", "积分"],
  },
]

export default function TaskSquarePage({
  onTaskClick,
}: {
  onTaskClick?: (taskId: number) => void
}) {
  const [activeLevel, setActiveLevel] = useState("进阶级")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <div className="flex flex-col h-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#3DBBA0] px-4 pt-2 pb-6 rounded-b-3xl">
        <h1 className="text-[#fff] text-lg font-semibold text-center mb-4">
          任务广场
        </h1>

        {/* Level Tabs */}
        <div className="flex items-center justify-center gap-4 mb-3">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`text-sm px-3 py-1 rounded-full transition-all ${
                activeLevel === level
                  ? "bg-[#fff] text-[#3DBBA0] font-semibold"
                  : "text-[#fff]/80"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Category Tags */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`flex-shrink-0 text-sm px-4 py-1.5 rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-[#fff] text-[#3DBBA0] font-medium"
                  : "bg-[#fff]/20 text-[#fff]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Task List */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-[#fff] rounded-2xl p-4 shadow-sm"
              onClick={() => onTaskClick?.(task.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-[#333] font-bold text-base">
                      {task.title}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#E8F8F5] text-[#3DBBA0] font-medium">
                      {task.tag}
                    </span>
                  </div>
                  <p className="text-[#999] text-sm">{task.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  {task.rewards.includes("食宿") && (
                    <div className="flex flex-col items-center gap-0.5">
                      <BedIcon />
                      <span className="text-[#999] text-[10px]">食宿</span>
                    </div>
                  )}
                  {task.rewards.includes("积分") && (
                    <div className="flex flex-col items-center gap-0.5">
                      <CoinIcon />
                      <span className="text-[#999] text-[10px]">积分</span>
                    </div>
                  )}
                </div>
                <button className="bg-[#3DBBA0] text-[#fff] text-sm font-medium px-4 py-1.5 rounded-full">
                  立即报名
                </button>
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-1.5 bg-[#E8F8F5] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#3DBBA0] rounded-full"
                  style={{ width: `${30 + task.id * 20}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
