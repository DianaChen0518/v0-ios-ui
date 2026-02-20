export function AppLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="#3DBBA0" />
      <path
        d="M24 12c-2 4-6 8-6 12a6 6 0 0 0 12 0c0-4-4-8-6-12z"
        fill="#F5C94C"
      />
      <path
        d="M18 28c-3-1-5-3-5-6 2 0 4 2 5 6zM30 28c3-1 5-3 5-6-2 0-4 2-5 6z"
        fill="#fff"
      />
      <path
        d="M20 22c-4-2-8-2-10 0 2 2 6 2 10 0zM28 22c4-2 8-2 10 0-2 2-6 2-10 0z"
        fill="#fff"
        opacity="0.8"
      />
    </svg>
  )
}

export function HomeIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#3DBBA0" : "#999"
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  )
}

export function TaskIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#3DBBA0" : "#999"
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="12" y2="16" />
    </svg>
  )
}

export function PointsIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#3DBBA0" : "#999"
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function ProfileIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#3DBBA0" : "#999"
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20c0-4 3.5-7 7-7s7 3 7 7" />
    </svg>
  )
}

export function ShopIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#3DBBA0" : "#999"
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}

export function BedIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#E8F8F5" />
      <path d="M8 20v-4a4 4 0 014-4h8a4 4 0 014 4v4" stroke="#3DBBA0" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="8" y="19" width="16" height="3" rx="1" fill="#3DBBA0" />
      <circle cx="12" cy="14" r="2" fill="#3DBBA0" />
    </svg>
  )
}

export function CoinIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#FFF8E1" />
      <circle cx="16" cy="16" r="8" fill="#F5C94C" />
      <circle cx="16" cy="16" r="5" fill="#FFD54F" />
      <text x="16" y="19" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#E6A700">{"$"}</text>
    </svg>
  )
}

export function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4l4 4-4 4" />
    </svg>
  )
}

export function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 4l-6 6 6 6" />
    </svg>
  )
}

export function HeartIcon({ active = false }: { active?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill={active ? "#EF4444" : "none"} stroke={active ? "#EF4444" : "#999"} strokeWidth="1.2">
      <path d="M7 12.5s-5.5-3.5-5.5-7A3 3 0 017 3.5a3 3 0 015.5 2c0 3.5-5.5 7-5.5 7z" />
    </svg>
  )
}

export function CommentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 10V3a1 1 0 011-1h10a1 1 0 011 1v5a1 1 0 01-1 1H4l-3 3z" />
    </svg>
  )
}
