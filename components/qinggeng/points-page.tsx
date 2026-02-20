"use client"

import { useState } from "react"
import Image from "next/image"

const pointsHistory = [
  { id: 1, title: "完成「乡村品牌设计助推」任务", points: "+300", date: "2024.10.15", type: "earn" },
  { id: 2, title: "完成「古村落短视频拍摄」任务", points: "+200", date: "2024.09.28", type: "earn" },
  { id: 3, title: "兑换食宿券1张", points: "-500", date: "2024.09.20", type: "spend" },
  { id: 4, title: "完成「乡村摄影作品征集」任务", points: "+150", date: "2024.09.10", type: "earn" },
  { id: 5, title: "完成「助农直播策划」任务", points: "+280", date: "2024.08.25", type: "earn" },
  { id: 6, title: "兑换环保乡村包袋", points: "-120", date: "2024.08.18", type: "spend" },
  { id: 7, title: "完成「乡村教育支持」任务", points: "+350", date: "2024.08.05", type: "earn" },
]

const redeemItems = [
  { id: 1, name: "食宿兑换券（3天）", points: 500, image: "/images/village1.jpg", stock: 12 },
  { id: 2, name: "环保乡村包袋", points: 120, image: "/images/product-bag.jpg", stock: 28 },
  { id: 3, name: "手工陶瓷杯", points: 200, image: "/images/product-pottery.jpg", stock: 15 },
  { id: 4, name: "古村明信片套装", points: 80, image: "/images/product-postcards.jpg", stock: 50 },
  { id: 5, name: "乡村摄影集", points: 300, image: "/images/photography.jpg", stock: 8 },
  { id: 6, name: "定制品牌Logo设计", points: 600, image: "/images/logo-design.jpg", stock: 5 },
]

export default function PointsPage() {
  const [activeTab, setActiveTab] = useState<"history" | "redeem">("redeem")
  const totalPoints = 1280

  return (
    <div className="flex flex-col h-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#3DBBA0] px-4 pt-2 pb-6 rounded-b-3xl">
        <h1 className="text-[#fff] text-lg font-semibold text-center mb-4">
          积分中心
        </h1>

        {/* Points Card */}
        <div className="bg-[#fff] rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[#999] text-xs mb-1">我的积分</p>
              <p className="text-[#333] font-bold text-3xl">{totalPoints}</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#FFF8E1] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" fill="#F5C94C" />
                <circle cx="16" cy="16" r="8" fill="#FFD54F" />
                <text x="16" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E6A700">{"¥"}</text>
              </svg>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 bg-[#E8F8F5] rounded-xl p-3 text-center">
              <p className="text-[#3DBBA0] font-bold text-lg">1780</p>
              <p className="text-[#999] text-[10px] mt-0.5">累计获得</p>
            </div>
            <div className="flex-1 bg-[#FFF8E1] rounded-xl p-3 text-center">
              <p className="text-[#E6A700] font-bold text-lg">500</p>
              <p className="text-[#999] text-[10px] mt-0.5">累计消耗</p>
            </div>
            <div className="flex-1 bg-[#F0F0FF] rounded-xl p-3 text-center">
              <p className="text-[#5B8DEF] font-bold text-lg">7</p>
              <p className="text-[#999] text-[10px] mt-0.5">完成任务</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Switch */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-0 bg-[#fff] rounded-xl p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("redeem")}
            className={`flex-1 text-sm py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "redeem"
                ? "bg-[#3DBBA0] text-[#fff]"
                : "text-[#999]"
            }`}
          >
            积分兑换
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 text-sm py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "history"
                ? "bg-[#3DBBA0] text-[#fff]"
                : "text-[#999]"
            }`}
          >
            积分明细
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
        {activeTab === "redeem" ? (
          <div className="grid grid-cols-2 gap-3">
            {redeemItems.map((item) => (
              <div key={item.id} className="bg-[#fff] rounded-2xl overflow-hidden shadow-sm">
                <div className="relative h-28">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-[#000]/50 text-[#fff] text-[10px] px-1.5 py-0.5 rounded-full">
                    {"库存 "}{item.stock}
                  </div>
                </div>
                <div className="p-2.5">
                  <p className="text-[#333] text-xs font-medium leading-tight line-clamp-2 min-h-[2rem]">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" fill="#F5C94C" />
                        <circle cx="7" cy="7" r="4" fill="#FFD54F" />
                      </svg>
                      <span className="text-[#E6A700] font-bold text-sm">{item.points}</span>
                    </div>
                    <button
                      className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${
                        totalPoints >= item.points
                          ? "bg-[#3DBBA0] text-[#fff]"
                          : "bg-[#f0f0f0] text-[#ccc]"
                      }`}
                    >
                      兑换
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {pointsHistory.map((item) => (
              <div key={item.id} className="bg-[#fff] rounded-xl p-3.5 flex items-center justify-between shadow-sm">
                <div className="flex-1 mr-3">
                  <p className="text-[#333] text-sm font-medium">{item.title}</p>
                  <p className="text-[#ccc] text-[10px] mt-1">{item.date}</p>
                </div>
                <span className={`font-bold text-base ${
                  item.type === "earn" ? "text-[#3DBBA0]" : "text-[#EF4444]"
                }`}>
                  {item.points}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
