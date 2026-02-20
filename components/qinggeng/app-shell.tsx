"use client"

import { useState } from "react"
import HomePage from "./home-page"
import TaskSquarePage from "./task-square-page"
import TaskDetailPage from "./task-detail-page"
import ShopPage from "./shop-page"
import BenefitsPage from "./benefits-page"
import { HomeIcon, TaskIcon, PointsIcon, ProfileIcon, ShopIcon } from "./icons"

type Tab = "home" | "tasks" | "points" | "shop" | "profile"

export default function AppShell() {
  const [activeTab, setActiveTab] = useState<Tab>("home")
  const [showTaskDetail, setShowTaskDetail] = useState(false)

  const handleTaskClick = () => {
    setShowTaskDetail(true)
  }

  const handleBack = () => {
    setShowTaskDetail(false)
  }

  const allTabs = [
    { icon: HomeIcon, label: "首页", tab: "home" as Tab },
    { icon: TaskIcon, label: "任务", tab: "tasks" as Tab },
    { icon: PointsIcon, label: "积分", tab: "points" as Tab },
    { icon: ShopIcon, label: "商城", tab: "shop" as Tab },
    { icon: ProfileIcon, label: "我助", tab: "profile" as Tab },
  ]

  const visibleTabs = activeTab === "shop"
    ? allTabs.filter(t => ["home", "tasks", "points", "shop"].includes(t.tab))
    : allTabs.filter(t => ["home", "tasks", "points", "profile"].includes(t.tab))

  return (
    <div className="flex flex-col h-dvh w-full max-w-md mx-auto bg-[#f5f5f5] relative">
      {/* Content Area */}
      <div className="flex-1 overflow-hidden relative">
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
        <div className="flex-shrink-0 bg-[#fff] border-t border-[#f0f0f0] flex items-center justify-around px-2 pb-[env(safe-area-inset-bottom)] h-16">
          {visibleTabs.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.tab
            return (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className="flex flex-col items-center gap-0.5 min-w-[56px] py-1.5"
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
    </div>
  )
}
