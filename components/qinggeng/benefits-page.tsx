"use client"

import { useState } from "react"
import Image from "next/image"
import { HeartIcon, CommentIcon } from "./icons"

interface BenefitsPageProps {
  onNavigate?: (tab: string) => void
}

const practiceHistory = [
  {
    id: 1,
    title: "古村落短视频拍摄",
    location: "湖南桃源",
    date: "2024.09.15 - 2024.09.18",
    status: "已完成",
    points: 300,
  },
  {
    id: 2,
    title: "乡村品牌设计助推",
    location: "江西婺源",
    date: "2024.08.20 - 2024.08.25",
    status: "已完成",
    points: 500,
  },
  {
    id: 3,
    title: "助农直播策划执行",
    location: "贵州黔东南",
    date: "2024.07.10 - 2024.07.17",
    status: "已完成",
    points: 800,
  },
  {
    id: 4,
    title: "乡村摄影作品征集",
    location: "云南大理",
    date: "2024.06.05 - 2024.06.07",
    status: "已完成",
    points: 200,
  },
]

const creativeWorks = [
  {
    id: 1,
    title: "古村品牌Logo",
    image: "/images/logo-design.jpg",
    likes: 128,
    comments: 33,
    description: "为湖南桃源古村设计的品牌Logo，融合了山水元素与现代设计语言，体现了古村的文化底蕴与自然之美。",
    date: "2024.09.20",
  },
  {
    id: 2,
    title: "助农摄影集",
    image: "/images/photography.jpg",
    likes: 256,
    comments: 30,
    description: "记录贵州黔东南乡村劳作场景的摄影作品集，展现了农耕文化的魅力与乡村生活的质朴。",
    date: "2024.08.15",
  },
  {
    id: 3,
    title: "乡村风景明信片",
    image: "/images/product-postcards.jpg",
    likes: 89,
    comments: 18,
    description: "以江西婺源为灵感创作的手绘明信片系列，水彩风格描绘了四季变换中的乡村美景。",
    date: "2024.07.28",
  },
  {
    id: 4,
    title: "古村落纪实短片",
    image: "/images/village3.jpg",
    likes: 342,
    comments: 45,
    description: "一部5分钟的纪实短片，讲述了古村落中三代人守护家园的故事，获得了青耕动态最佳短片奖。",
    date: "2024.07.10",
  },
  {
    id: 5,
    title: "环保帆布袋设计",
    image: "/images/product-bag.jpg",
    likes: 167,
    comments: 22,
    description: "以乡村植物为灵感的环保帆布袋图案设计，已成功投入生产并在文创商城上架。",
    date: "2024.06.20",
  },
  {
    id: 6,
    title: "手工陶瓷杯设计",
    image: "/images/product-pottery.jpg",
    likes: 95,
    comments: 15,
    description: "与当地陶艺师傅合作设计的手工陶瓷杯系列，将传统工艺与现代审美相结合。",
    date: "2024.06.08",
  },
]

export default function BenefitsPage({ onNavigate }: BenefitsPageProps) {
  const [activeTab, setActiveTab] = useState<"practice" | "creative">("creative")
  const [selectedWork, setSelectedWork] = useState<typeof creativeWorks[0] | null>(null)
  const [likedWorks, setLikedWorks] = useState<Set<number>>(new Set())

  const toggleLike = (workId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setLikedWorks((prev) => {
      const next = new Set(prev)
      if (next.has(workId)) {
        next.delete(workId)
      } else {
        next.add(workId)
      }
      return next
    })
  }

  return (
    <div className="flex flex-col h-full bg-[#f5f5f5] relative">
      {/* Header */}
      <div className="bg-[#3DBBA0] px-4 pt-2 pb-6 rounded-b-3xl">
        <h1 className="text-[#fff] text-lg font-semibold text-center mb-4">
          我的
        </h1>

        {/* User Card */}
        <div className="bg-[#fff] rounded-2xl p-4 shadow-sm">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#E0F2F1] flex items-center justify-center overflow-hidden">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#3DBBA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="14" cy="10" r="5" />
                <path d="M5 24c0-5 4-8 9-8s9 3 9 8" />
              </svg>
            </div>
            <div>
              <h2 className="text-[#333] font-bold text-lg">李华</h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3DBBA0] text-[#fff] font-medium">
                  Lv.3
                </span>
                <span className="text-[#999] text-xs">乡村合伙人</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-around mb-4">
            <button onClick={() => onNavigate?.("points")} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FFF8E1] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" fill="#F5C94C" />
                  <circle cx="9" cy="9" r="4.5" fill="#FFD54F" />
                </svg>
              </div>
              <div>
                <p className="text-[#333] font-bold text-xl leading-tight">1280</p>
                <p className="text-[#999] text-[10px]">积分</p>
              </div>
            </button>
            <div className="w-px h-8 bg-[#f0f0f0]" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#E8F8F5] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#3DBBA0" strokeWidth="1.3" strokeLinecap="round">
                  <path d="M3 12v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  <rect x="3" y="11.5" width="12" height="2.5" rx="1" fill="#3DBBA0" />
                </svg>
              </div>
              <div>
                <p className="text-[#333] font-bold text-xl leading-tight">3</p>
                <p className="text-[#999] text-[10px]">张食宿兑换券</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onNavigate?.("points")}
            className="w-full bg-[#3DBBA0] text-[#fff] font-medium text-sm py-2.5 rounded-xl"
          >
            前往积分商城兑换
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-4">
        <h3 className="text-[#333] font-bold text-base mb-3">我的成就与作品</h3>

        {/* Tabs */}
        <div className="flex items-center gap-6 mb-4 border-b border-[#f0f0f0]">
          {([
            { key: "practice" as const, label: "实践履历" },
            { key: "creative" as const, label: "文创作品" },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-2.5 text-sm transition-all relative ${
                activeTab === tab.key
                  ? "text-[#333] font-semibold"
                  : "text-[#999]"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#333] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {activeTab === "creative" ? (
          /* Works Grid */
          <div className="grid grid-cols-2 gap-3 pb-4">
            {creativeWorks.map((work) => {
              const isLiked = likedWorks.has(work.id)
              return (
                <button
                  key={work.id}
                  className="bg-[#fff] rounded-2xl overflow-hidden shadow-sm text-left"
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="relative h-32">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2.5">
                    <p className="text-[#333] text-sm font-medium truncate">{work.title}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <button
                        className="flex items-center gap-1"
                        onClick={(e) => toggleLike(work.id, e)}
                      >
                        <HeartIcon active={isLiked} />
                        <span className="text-[#999] text-[10px]">
                          {isLiked ? work.likes + 1 : work.likes}
                        </span>
                      </button>
                      <div className="flex items-center gap-1">
                        <CommentIcon />
                        <span className="text-[#999] text-[10px]">{work.comments}</span>
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        ) : (
          /* Practice History */
          <div className="flex flex-col gap-3 pb-4">
            {practiceHistory.map((item) => (
              <div key={item.id} className="bg-[#fff] rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-[#333] font-bold text-sm">{item.title}</h4>
                    <p className="text-[#999] text-xs mt-1">{item.location}</p>
                    <p className="text-[#ccc] text-[10px] mt-0.5">{item.date}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8F8F5] text-[#3DBBA0] font-medium">
                      {item.status}
                    </span>
                    <span className="text-[#E6A700] text-xs font-semibold">+{item.points}积分</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Work Detail Modal */}
      {selectedWork && (
        <div className="absolute inset-0 bg-[#000]/50 z-50 flex items-end" onClick={() => setSelectedWork(null)}>
          <div
            className="bg-[#fff] w-full rounded-t-3xl overflow-hidden animate-in slide-in-from-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <Image src={selectedWork.image} alt={selectedWork.title} fill className="object-cover" />
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#000]/40 flex items-center justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>
            <div className="p-5 pb-8">
              <h3 className="text-[#333] font-bold text-lg">{selectedWork.title}</h3>
              <p className="text-[#ccc] text-xs mt-1">{selectedWork.date}</p>
              <p className="text-[#666] text-sm mt-3 leading-relaxed">{selectedWork.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <button
                  className="flex items-center gap-1.5"
                  onClick={(e) => toggleLike(selectedWork.id, e)}
                >
                  <HeartIcon active={likedWorks.has(selectedWork.id)} />
                  <span className="text-[#666] text-sm">
                    {likedWorks.has(selectedWork.id) ? selectedWork.likes + 1 : selectedWork.likes}
                  </span>
                </button>
                <div className="flex items-center gap-1.5">
                  <CommentIcon />
                  <span className="text-[#666] text-sm">{selectedWork.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
