"use client"

import { useState } from "react"
import { BedIcon, CoinIcon } from "./icons"

export interface TaskData {
  id: number
  title: string
  tag: string
  level: string
  description: string
  rewards: string[]
  progress: number
  deadline: string
  image: string
  requirements: string[]
  benefitDetails: { icon: string; label: string }[]
}

const allTasks: TaskData[] = [
  {
    id: 1,
    title: "乡村品牌设计助推",
    tag: "设计",
    level: "进阶级",
    description: "需求：LOGO及包装设计",
    rewards: ["食宿", "积分"],
    progress: 65,
    deadline: "2024.11.15",
    image: "/images/logo-design.jpg",
    requirements: ["设计1套完整的乡村品牌VI系统", "包含LOGO、包装、名片设计", "需提供源文件（AI/PSD格式）", "设计风格需体现乡村特色"],
    benefitDetails: [
      { icon: "bed", label: "免费食宿5天" },
      { icon: "coin", label: "获得500积分" },
      { icon: "video", label: "作品收录品牌库" },
    ],
  },
  {
    id: 2,
    title: "古村落短视频拍摄",
    tag: "新媒体",
    level: "进阶级",
    description: "需求：3条抖音短视频",
    rewards: ["食宿", "积分"],
    progress: 40,
    deadline: "2024.10.30",
    image: "/images/village1.jpg",
    requirements: ["拍摄3条1分钟短视频", "主题：古村落建筑与人文", "成果要求：清晰度1080P", "需配合背景音乐和字幕"],
    benefitDetails: [
      { icon: "bed", label: "免费食宿3天" },
      { icon: "coin", label: "获得300积分" },
      { icon: "video", label: "优秀作品展播" },
    ],
  },
  {
    id: 3,
    title: "乡村摄影作品征集",
    tag: "摄影",
    level: "基础级",
    description: "需求：10张高质量乡村照片",
    rewards: ["食宿", "积分"],
    progress: 80,
    deadline: "2024.10.20",
    image: "/images/photography.jpg",
    requirements: ["拍摄10张以上高质量乡村风景照", "分辨率不低于4000x3000", "主题涵盖自然、建筑、人文", "后期处理保持自然风格"],
    benefitDetails: [
      { icon: "bed", label: "免费食宿2天" },
      { icon: "coin", label: "获得200积分" },
      { icon: "video", label: "入选摄影展" },
    ],
  },
  {
    id: 4,
    title: "助农直播策划执行",
    tag: "新媒体",
    level: "高阶级",
    description: "需求：策划并执行3场助农直播",
    rewards: ["食宿", "积分"],
    progress: 20,
    deadline: "2024.12.01",
    image: "/images/activity1.jpg",
    requirements: ["策划3场不同主题的助农直播", "每场直播不少于2小时", "负责直播脚本与流程设计", "协调当地农户参与互动"],
    benefitDetails: [
      { icon: "bed", label: "免费食宿7天" },
      { icon: "coin", label: "获得800积分" },
      { icon: "video", label: "直播回放展示" },
    ],
  },
  {
    id: 5,
    title: "乡村文创产品开发",
    tag: "设计",
    level: "高阶级",
    description: "需求：设计3款文创产品",
    rewards: ["食宿", "积分"],
    progress: 15,
    deadline: "2024.12.15",
    image: "/images/product-bag.jpg",
    requirements: ["设计3款具有乡村特色的文创产品", "包含产品效果图与生产图纸", "产品类型：明信片/帆布包/陶瓷杯", "需进行市场调研与成本分析"],
    benefitDetails: [
      { icon: "bed", label: "免费食宿5天" },
      { icon: "coin", label: "获得600积分" },
      { icon: "video", label: "产品上架商城" },
    ],
  },
  {
    id: 6,
    title: "乡村自然教育课程",
    tag: "教育",
    level: "进阶级",
    description: "需求：开发2套自然教育课程",
    rewards: ["食宿", "积分"],
    progress: 50,
    deadline: "2024.11.20",
    image: "/images/village2.jpg",
    requirements: ["开发2套面向青少年的自然教育课程", "每套课程包含4个课时", "需制作课件与教具清单", "课程需结合当地生态特色"],
    benefitDetails: [
      { icon: "bed", label: "免费食宿4天" },
      { icon: "coin", label: "获得400积分" },
      { icon: "video", label: "课程平台上线" },
    ],
  },
  {
    id: 7,
    title: "农产品包装升级",
    tag: "设计",
    level: "基础级",
    description: "需求：3款农产品包装设计",
    rewards: ["积分"],
    progress: 70,
    deadline: "2024.10.25",
    image: "/images/product-pottery.jpg",
    requirements: ["为3款本地农产品设计新包装", "体现绿色有机的品牌调性", "需适配不同规格尺寸", "提供印刷级别的设计文件"],
    benefitDetails: [
      { icon: "coin", label: "获得250积分" },
      { icon: "video", label: "设计作品展示" },
    ],
  },
  {
    id: 8,
    title: "乡村民宿体验测评",
    tag: "新媒体",
    level: "基础级",
    description: "需求：撰写5篇民宿测评",
    rewards: ["食宿", "积分"],
    progress: 55,
    deadline: "2024.11.05",
    image: "/images/village3.jpg",
    requirements: ["入住并体验5家乡村民宿", "撰写详细图文测评报告", "每篇不少于800字配10张图", "在小红书/携程同步发布"],
    benefitDetails: [
      { icon: "bed", label: "免费食宿5晚" },
      { icon: "coin", label: "获得350积分" },
      { icon: "video", label: "测评精选推荐" },
    ],
  },
  {
    id: 9,
    title: "乡村音乐采风记录",
    tag: "摄影",
    level: "高阶级",
    description: "需求：录制5首乡村民谣",
    rewards: ["食宿", "积分"],
    progress: 10,
    deadline: "2024.12.20",
    image: "/images/activity2.jpg",
    requirements: ["采集并录制5首当地传统民谣", "录音质量不低于48kHz/24bit", "配合拍摄音乐纪录短片", "整理歌词与文化背景资料"],
    benefitDetails: [
      { icon: "bed", label: "免费食宿7天" },
      { icon: "coin", label: "获得700积分" },
      { icon: "video", label: "音乐专辑收录" },
    ],
  },
  {
    id: 10,
    title: "田园亲子活动策划",
    tag: "玩乐",
    level: "基础级",
    description: "需求：策划2场亲子体验活动",
    rewards: ["食宿", "积分"],
    progress: 35,
    deadline: "2024.11.10",
    image: "/images/banner.jpg",
    requirements: ["策划2场田园主题亲子活动", "每场活动时长3-4小时", "设计活动流程与互动环节", "准备活动物料与安全预案"],
    benefitDetails: [
      { icon: "bed", label: "免费食宿3天" },
      { icon: "coin", label: "获得300积分" },
      { icon: "video", label: "活动花絮展播" },
    ],
  },
  {
    id: 11,
    title: "古村落建筑测绘",
    tag: "农学",
    level: "高阶级",
    description: "需求：完成10栋古建筑测绘",
    rewards: ["食宿", "积分"],
    progress: 25,
    deadline: "2024.12.30",
    image: "/images/village1.jpg",
    requirements: ["测绘10栋传统古建筑", "绘制建筑平面图与立面图", "记录建筑材料与工艺特点", "整理成数字化档案"],
    benefitDetails: [
      { icon: "bed", label: "免费食宿10天" },
      { icon: "coin", label: "获得1000积分" },
      { icon: "video", label: "成果收录档案馆" },
    ],
  },
]

const levels = ["全部", "基础级", "进阶级", "高阶级"]
const categories = ["新媒体", "设计", "摄影", "农学", "玩乐", "教育"]

export default function TaskSquarePage({
  onTaskClick,
}: {
  onTaskClick?: (task: TaskData) => void
}) {
  const [activeLevel, setActiveLevel] = useState("全部")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredTasks = allTasks.filter((task) => {
    const levelMatch = activeLevel === "全部" || task.level === activeLevel
    const catMatch = !activeCategory || task.tag === activeCategory
    return levelMatch && catMatch
  })

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
        {filteredTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-[#ccc]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="8" y="6" width="32" height="36" rx="4" />
              <line x1="16" y1="16" x2="32" y2="16" />
              <line x1="16" y1="24" x2="28" y2="24" />
            </svg>
            <p className="text-sm mt-3">暂无符合条件的任务</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredTasks.map((task) => (
              <button
                key={task.id}
                className="bg-[#fff] rounded-2xl p-4 shadow-sm text-left w-full"
                onClick={() => onTaskClick?.(task)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h3 className="text-[#333] font-bold text-base">
                        {task.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded bg-[#E8F8F5] text-[#3DBBA0] font-medium">
                        {task.tag}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FFF8E1] text-[#E6A700]">
                        {task.level}
                      </span>
                    </div>
                    <p className="text-[#999] text-sm">{task.description}</p>
                    <p className="text-[#ccc] text-[10px] mt-1">{"截止："}{task.deadline}</p>
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
                  <span className="bg-[#3DBBA0] text-[#fff] text-sm font-medium px-4 py-1.5 rounded-full">
                    立即报名
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#ccc] text-[10px]">报名进度</span>
                    <span className="text-[#3DBBA0] text-[10px] font-medium">{task.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-[#E8F8F5] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#3DBBA0] rounded-full transition-all"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
