"use client"

import { useState } from "react"
import Image from "next/image"
import { HeartIcon, CommentIcon } from "./icons"

const works = [
  {
    title: "古村品牌Logo",
    image: "/images/logo-design.jpg",
    likes: "喜欢",
    comments: 33,
  },
  {
    title: "助农摄影集",
    image: "/images/photography.jpg",
    likes: "评论",
    comments: 30,
  },
  {
    title: "乡村风景集",
    image: "/images/village2.jpg",
    likes: "喜欢",
    comments: 18,
  },
  {
    title: "古村落纪实",
    image: "/images/village3.jpg",
    likes: "评论",
    comments: 25,
  },
]

export default function BenefitsPage() {
  const [activeTab, setActiveTab] = useState<"实践履历" | "文创作品">("文创作品")

  return (
    <div className="flex flex-col h-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#3DBBA0] px-4 pt-2 pb-6 rounded-b-3xl">
        <h1 className="text-[#fff] text-lg font-semibold text-center mb-4">
          权益中心
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
            <div className="flex items-center gap-2">
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
            </div>
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
          <button className="w-full bg-[#3DBBA0] text-[#fff] font-medium text-sm py-2.5 rounded-xl">
            前往积分商城兑换
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-4">
        <h3 className="text-[#333] font-bold text-base mb-3">我的成就与作品</h3>

        {/* Tabs */}
        <div className="flex items-center gap-6 mb-4 border-b border-[#f0f0f0]">
          {(["实践履历", "文创作品"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2.5 text-sm transition-all relative ${
                activeTab === tab
                  ? "text-[#333] font-semibold"
                  : "text-[#999]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#333] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-2 gap-3 pb-4">
          {works.map((work, index) => (
            <div key={index} className="bg-[#fff] rounded-2xl overflow-hidden shadow-sm">
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
                  <div className="flex items-center gap-1">
                    <HeartIcon />
                    <span className="text-[#999] text-[10px]">{work.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CommentIcon />
                    <span className="text-[#999] text-[10px]">{work.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
