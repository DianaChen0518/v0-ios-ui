import type { Metadata, Viewport } from 'next'
import { Noto_Sans_SC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-sc',
})

export const metadata: Metadata = {
  title: '青耕游 - 青年乡村旅游与志愿休平台',
  description: '青耕游 - 青年乡村旅游与志愿休平台，任务广场、文创商城、权益中心',
  generator: 'v0.app',
  icons: {
    icon: '/images/app-icon.jpg',
    apple: '/images/app-icon.jpg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#3DBBA0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSansSC.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
