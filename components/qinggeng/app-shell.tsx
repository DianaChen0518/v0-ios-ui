"use client"

import { useState } from "react"
import HomePage from "./home-page"
import TaskSquarePage from "./task-square-page"
import type { TaskData } from "./task-square-page"
import TaskDetailPage from "./task-detail-page"
import ShopPage from "./shop-page"
import PointsPage from "./points-page"
import BenefitsPage from "./benefits-page"
import { HomeIcon, TaskIcon, PointsIcon, ProfileIcon, ShopIcon } from "./icons"

type Tab = "home" | "tasks" | "points" | "shop" | "profile"

export default function AppShell() {
  const [activeTab, setActiveTab] = useState<Tab>("home")
  const [showTaskDetail, setShowTaskDetail] = useState(false)
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null)

  const handleTaskClick = (task: TaskData) => {
    setSelectedTask(task)
    setShowTaskDetail(true)
  }

  const handleBack = () => {
    setShowTaskDetail(false)
    setSelectedTask(null)
  }

  const handleNavigate = (tab: string) => {
    if (["home", "tasks", "points", "shop", "profile"].includes(tab)) {
      setActiveTab(tab as Tab)
      setShowTaskDetail(false)
      setSelectedTask(null)
    }
  }

  const allTabs = [
    { icon: HomeIcon, label: "首页", tab: "home" as Tab },
    { icon: TaskIcon, label: "任务", tab: "tasks" as Tab },
    { icon: PointsIcon, label: "积分", tab: "points" as Tab },
    { icon: ShopIcon, label: "商城", tab: "shop" as Tab },
    { icon: ProfileIcon, label: "我的", tab: "profile" as Tab },
  ]

  return (
    <div className="flex flex-col h-dvh w-full max-w-md mx-auto bg-[#f5f5f5] relative overflow-hidden">
      {/* Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {showTaskDetail ? (
          <TaskDetailPage onBack={handleBack} task={selectedTask} />
        ) : (
          <>
            <div className={activeTab === "home" ? "h-full" : "hidden"}>
              <HomePage onNavigate={handleNavigate} />
            </div>
            <div className={activeTab === "tasks" ? "h-full" : "hidden"}>
              <TaskSquarePage onTaskClick={handleTaskClick} />
            </div>
            <div className={activeTab === "points" ? "h-full" : "hidden"}>
              <PointsPage />
            </div>
            <div className={activeTab === "shop" ? "h-full" : "hidden"}>
              <ShopPage />
            </div>
            <div className={activeTab === "profile" ? "h-full" : "hidden"}>
              <BenefitsPage onNavigate={handleNavigate} />
            </div>
          </>
        )}
      </div>

      {/* Tab Bar */}
      {!showTaskDetail && (
        <div className="flex-shrink-0 bg-[#fff] border-t border-[#f0f0f0] flex items-center justify-around px-2 pb-[env(safe-area-inset-bottom)] h-16">
          {allTabs.map((item) => {
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
