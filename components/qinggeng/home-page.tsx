"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "./icons"

const travelItems = [
  { name: "XX古村落三日游", price: 199, image: "/images/village1.jpg" },
  { name: "XX古村落三日游", price: 199, image: "/images/village2.jpg" },
  { name: "XX古村落三日游", price: 199, image: "/images/village3.jpg" },
]

const activityItems = [
  { name: "助农直播体验", image: "/images/activity1.jpg" },
  { name: "助农直播体验", image: "/images/activity2.jpg" },
  { name: "助农直播体验", image: "/images/activity1.jpg" },
  { name: "助农直播体验", image: "/images/activity2.jpg" },
]

export default function HomePage() {
  const [bannerIndex] = useState(0)

  return (
    <div className="flex flex-col h-full bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#3DBBA0] px-4 pt-2 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/app-icon.jpg"
            alt="青耕游"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-[#fff] font-semibold text-lg">青耕游</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#fff]/30 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="6" r="3.5" />
            <path d="M3 16c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5" />
          </svg>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Banner */}
        <div className="px-4 -mt-0 pt-0">
          <div className="bg-[#fff] rounded-2xl overflow-hidden shadow-sm mt-0">
            <div className="relative h-44 bg-[#E8F8F5]">
              <Image
                src="/images/banner.jpg"
                alt="智能匹配任务"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3DBBA0]/60 to-transparent" />
              <div className="absolute top-6 left-5">
                <h2 className="text-[#fff] font-bold text-xl mb-1">智能匹配任务</h2>
                <p className="text-[#fff]/90 text-sm">你的专属助力：设计与新媒体</p>
              </div>
            </div>
            {/* Dots */}
            <div className="flex items-center justify-center gap-1.5 py-2.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all ${
                    i === bannerIndex
                      ? "w-4 h-1.5 bg-[#3DBBA0]"
                      : "w-1.5 h-1.5 bg-[#ddd]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Travel Section */}
        <div className="px-4 mt-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#333] font-bold text-base">特惠乡村游</h3>
            <button className="flex items-center gap-0.5 text-[#999] text-xs">
              更多 <ChevronRight />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {travelItems.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-36">
                <div className="relative h-24 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#333] text-xs mt-1.5 truncate">
                  {item.name} | <span className="text-[#E6A700] font-semibold">{"¥"}{item.price}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Section */}
        <div className="px-4 mt-5 pb-6">
          <h3 className="text-[#333] font-bold text-base mb-3">青耕动态</h3>
          <div className="grid grid-cols-3 gap-2.5">
            {activityItems.map((item, index) => (
              <div key={index}>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#333] text-xs mt-1 truncate">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
