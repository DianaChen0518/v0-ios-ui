"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronRight } from "./icons"

const banners = [
  {
    id: 1,
    image: "/images/banner.jpg",
    title: "智能匹配任务",
    subtitle: "你的专属助力：设计与新媒体",
    action: "tasks",
  },
  {
    id: 2,
    image: "/images/village1.jpg",
    title: "特惠乡村游上新",
    subtitle: "古村落三日游，低至199元",
    action: "travel",
  },
  {
    id: 3,
    image: "/images/photography.jpg",
    title: "摄影大赛征稿中",
    subtitle: "用镜头记录最美乡村",
    action: "tasks",
  },
]

const travelItems = [
  { id: 1, name: "桃源古村三日游", price: 199, image: "/images/village1.jpg", location: "湖南桃源" },
  { id: 2, name: "婺源写生五日游", price: 299, image: "/images/village2.jpg", location: "江西婺源" },
  { id: 3, name: "黔东南民俗游", price: 259, image: "/images/village3.jpg", location: "贵州黔东南" },
]

const activityItems = [
  { id: 1, name: "助农直播体验", image: "/images/activity1.jpg", views: 2380 },
  { id: 2, name: "乡村摄影采风", image: "/images/activity2.jpg", views: 1850 },
  { id: 3, name: "古村品牌设计", image: "/images/logo-design.jpg", views: 3200 },
  { id: 4, name: "陶艺手作体验", image: "/images/product-pottery.jpg", views: 1560 },
  { id: 5, name: "文创产品开发", image: "/images/product-bag.jpg", views: 2100 },
  { id: 6, name: "田园教育课堂", image: "/images/product-postcards.jpg", views: 980 },
]

interface HomePageProps {
  onNavigate?: (tab: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [bannerIndex, setBannerIndex] = useState(0)
  const [travelDetail, setTravelDetail] = useState<typeof travelItems[0] | null>(null)
  const [activityDetail, setActivityDetail] = useState<typeof activityItems[0] | null>(null)

  // Auto-rotate banner
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const handleBannerClick = useCallback(() => {
    const banner = banners[bannerIndex]
    if (banner.action === "tasks" && onNavigate) {
      onNavigate("tasks")
    }
  }, [bannerIndex, onNavigate])

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
        <button
          onClick={() => onNavigate?.("profile")}
          className="w-8 h-8 rounded-full bg-[#fff]/30 flex items-center justify-center"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="6" r="3.5" />
            <path d="M3 16c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5" />
          </svg>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Banner Carousel */}
        <div className="px-4 pt-0">
          <button
            className="bg-[#fff] rounded-2xl overflow-hidden shadow-sm mt-0 w-full text-left"
            onClick={handleBannerClick}
          >
            <div className="relative h-44 bg-[#E8F8F5] overflow-hidden">
              {banners.map((banner, i) => (
                <div
                  key={banner.id}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: i === bannerIndex ? 1 : 0 }}
                >
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#000]/50 to-transparent" />
                  <div className="absolute top-6 left-5">
                    <h2 className="text-[#fff] font-bold text-xl mb-1">{banner.title}</h2>
                    <p className="text-[#fff]/90 text-sm">{banner.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Dots */}
            <div className="flex items-center justify-center gap-1.5 py-2.5">
              {banners.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${
                    i === bannerIndex
                      ? "w-4 h-1.5 bg-[#3DBBA0]"
                      : "w-1.5 h-1.5 bg-[#ddd]"
                  }`}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Travel Section */}
        <div className="px-4 mt-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#333] font-bold text-base">特惠乡村游</h3>
            <button
              onClick={() => onNavigate?.("shop")}
              className="flex items-center gap-0.5 text-[#999] text-xs"
            >
              更多 <ChevronRight />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {travelItems.map((item) => (
              <button
                key={item.id}
                className="flex-shrink-0 w-36 text-left"
                onClick={() => setTravelDetail(item)}
              >
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
                <p className="text-[#ccc] text-[10px]">{item.location}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Activity Section */}
        <div className="px-4 mt-5 pb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#333] font-bold text-base">青耕动态</h3>
            <button
              onClick={() => onNavigate?.("tasks")}
              className="flex items-center gap-0.5 text-[#999] text-xs"
            >
              更多 <ChevronRight />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {activityItems.map((item) => (
              <button
                key={item.id}
                className="text-left"
                onClick={() => setActivityDetail(item)}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#333] text-xs mt-1 truncate">{item.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Travel Detail Modal */}
      {travelDetail && (
        <div className="absolute inset-0 bg-[#000]/50 z-50 flex items-end" onClick={() => setTravelDetail(null)}>
          <div
            className="bg-[#fff] w-full rounded-t-3xl p-5 pb-8 animate-in slide-in-from-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-[#ddd] rounded-full mx-auto mb-4" />
            <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
              <Image src={travelDetail.image} alt={travelDetail.name} fill className="object-cover" />
            </div>
            <h3 className="text-[#333] font-bold text-lg">{travelDetail.name}</h3>
            <p className="text-[#999] text-sm mt-1">{travelDetail.location}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#E6A700] font-bold text-2xl">{"¥"}{travelDetail.price}</span>
              <span className="text-[#ccc] text-xs line-through">{"¥"}{travelDetail.price + 100}</span>
            </div>
            <p className="text-[#666] text-sm mt-3 leading-relaxed">
              体验原汁原味的乡村生活，探访古老村落，品尝地道农家美食，参与田园劳作，感受自然之美。包含住宿、餐饮和专业导览服务。
            </p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setTravelDetail(null)}
                className="flex-1 border border-[#3DBBA0] text-[#3DBBA0] font-medium py-2.5 rounded-xl"
              >
                收藏
              </button>
              <button className="flex-1 bg-[#3DBBA0] text-[#fff] font-medium py-2.5 rounded-xl">
                立即预订
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Activity Detail Modal */}
      {activityDetail && (
        <div className="absolute inset-0 bg-[#000]/50 z-50 flex items-end" onClick={() => setActivityDetail(null)}>
          <div
            className="bg-[#fff] w-full rounded-t-3xl p-5 pb-8 animate-in slide-in-from-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-[#ddd] rounded-full mx-auto mb-4" />
            <div className="relative h-52 rounded-2xl overflow-hidden mb-4">
              <Image src={activityDetail.image} alt={activityDetail.name} fill className="object-cover" />
            </div>
            <h3 className="text-[#333] font-bold text-lg">{activityDetail.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#999] text-xs">{activityDetail.views} 次浏览</span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#E8F8F5] text-[#3DBBA0]">进行中</span>
            </div>
            <p className="text-[#666] text-sm mt-3 leading-relaxed">
              加入青耕游志愿者行列，用你的专业技能助力乡村振兴。在这里你将获得独特的乡村体验，结识志同道合的伙伴，同时积累宝贵的实践经验。
            </p>
            <button
              onClick={() => {
                setActivityDetail(null)
                onNavigate?.("tasks")
              }}
              className="w-full bg-[#3DBBA0] text-[#fff] font-medium py-2.5 rounded-xl mt-4"
            >
              查看相关任务
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
