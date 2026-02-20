"use client"

import { useState } from "react"
import HomePage from "./home-page"
import TaskSquarePage from "./task-square-page"
import TaskDetailPage from "./task-detail-page"
import ShopPage from "./shop-page"
import BenefitsPage from "./benefits-page"
import { HomeIcon, TaskIcon, PointsIcon, ProfileIcon, ShopIcon } from "./icons"

type Tab = "home" | "tasks" | "points" | "shop" | "profile"

const TAB_CONFIG: Record<string, { icon: typeof HomeIcon; label: string; tab: Tab }[]> = {
  default: [
    { icon: HomeIcon, label: "首页", tab: "home" },
    { icon: TaskIcon, label: "任务", tab: "tasks" },
    { icon: PointsIcon, label: "积分", tab: "points" },
    { icon: ProfileIcon, label: "我助", tab: "profile" },
  ],
  shop: [
    { icon: HomeIcon, label: "首页", tab: "home" },
    { icon: TaskIcon, label: "任务", tab: "tasks" },
    { icon: PointsIcon, label: "积分", tab: "points" },
    { icon: ShopIcon, label: "商城", tab: "shop" },
  ],
}

export default function AppShell() {
  const [activeTab, setActiveTab] = useState<Tab>("home")
  const [showTaskDetail, setShowTaskDetail] = useState(false)

  const handleTaskClick = () => {
    setShowTaskDetail(true)
  }

  const handleBack = () => {
    setShowTaskDetail(false)
  }

  // Determine which tab config to use
  const tabs = activeTab === "shop" ? TAB_CONFIG.shop : TAB_CONFIG.default

  // If showing shop tab, ensure the shop icon is visible
  const allTabs = [
    { icon: HomeIcon, label: "首页", tab: "home" as Tab },
    { icon: TaskIcon, label: "任务", tab: "tasks" as Tab },
    { icon: PointsIcon, label: "积分", tab: "points" as Tab },
    { icon: ShopIcon, label: "商城", tab: "shop" as Tab },
    { icon: ProfileIcon, label: "我助", tab: "profile" as Tab },
  ]

  // Show 4 tabs based on current state - include shop when on shop/profile
  const visibleTabs = activeTab === "shop"
    ? allTabs.filter(t => ["home", "tasks", "points", "shop"].includes(t.tab))
    : allTabs.filter(t => ["home", "tasks", "points", "profile"].includes(t.tab))

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f4f3] p-4">
      {/* Phone Frame */}
      <div className="relative w-[375px] h-[812px] bg-[#fff] rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-[#1a1a1a]">
        {/* Status Bar */}
        <div className="h-11 bg-[#3DBBA0] flex items-center justify-between px-6 pt-1">
          <span className="text-[#fff] text-xs font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="#fff">
              <rect x="0" y="6" width="3" height="6" rx="0.5" />
              <rect x="4.5" y="4" width="3" height="8" rx="0.5" />
              <rect x="9" y="1" width="3" height="11" rx="0.5" />
              <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Dynamic Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1a1a] rounded-b-2xl z-10" />

        {/* Content Area */}
        <div className="h-[calc(100%-44px-64px)] relative">
          {showTaskDetail ? (
            <TaskDetailPage onBack={handleBack} />
          ) : (
            <>
              <div className={activeTab === "home" ? "h-full" : "hidden"}>
                <HomePage />
              </div>
              <div className={activeTab === "tasks" ? "h-full" : "hidden"}>
                <TaskSquarePage onTaskClick={handleTaskClick} />
              </div>
              <div className={activeTab === "points" ? "h-full" : "hidden"}>
                <BenefitsPage />
              </div>
              <div className={activeTab === "shop" ? "h-full" : "hidden"}>
                <ShopPage />
              </div>
              <div className={activeTab === "profile" ? "h-full" : "hidden"}>
                <BenefitsPage />
              </div>
            </>
          )}
        </div>

        {/* Tab Bar */}
        {!showTaskDetail && (
          <div className="h-16 bg-[#fff] border-t border-[#f0f0f0] flex items-center justify-around px-2">
            {visibleTabs.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.tab
              return (
                <button
                  key={item.tab}
                  onClick={() => setActiveTab(item.tab)}
                  className="flex flex-col items-center gap-0.5 min-w-[56px]"
                >
                  <Icon active={isActive} />
                  <span
                    className={`text-[10px] ${
                      isActive ? "text-[#3DBBA0] font-medium" : "text-[#999]"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        )}

        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#1a1a1a] rounded-full" />
      </div>

      {/* Page switcher for demonstration */}
      <div className="ml-6 flex flex-col gap-2">
        <p className="text-[#666] text-sm font-medium mb-2">快速导航</p>
        {[
          { label: "首页", tab: "home" as Tab },
          { label: "任务广场", tab: "tasks" as Tab },
          { label: "任务详情", tab: "tasks" as Tab, detail: true },
          { label: "文创商城", tab: "shop" as Tab },
          { label: "权益中心", tab: "points" as Tab },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => {
              if (item.detail) {
                setActiveTab("tasks")
                setShowTaskDetail(true)
              } else {
                setShowTaskDetail(false)
                setActiveTab(item.tab)
              }
            }}
            className={`px-4 py-2 rounded-lg text-sm text-left transition-all ${
              (activeTab === item.tab && !item.detail && !showTaskDetail) ||
              (item.detail && showTaskDetail)
                ? "bg-[#3DBBA0] text-[#fff] font-medium"
                : "bg-[#fff] text-[#666] hover:bg-[#E8F8F5]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
