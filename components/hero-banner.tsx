"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// バナーアイテムの定義
const bannerItems = [
  {
    id: 1,
    title: "東京オートサロン 2026",
    subtitle: "究極の自動車フェスティバル",
    description: "日本最大級のカスタムカーイベント、東京オートサロン2026が幕張メッセで開催",
    image: "/placeholder.svg?height=1080&width=1920",
    buttonText: "詳細を見る",
    buttonLink: "#event",
    position: "center",
  },
  {
    id: 2,
    title: "限定モデル公開",
    subtitle: "SUPER GT 2026",
    description: "次世代マシンが東京オートサロンで世界初公開",
    image: "/placeholder.svg?height=1080&width=1920",
    buttonText: "モデルを見る",
    buttonLink: "#magazine",
    position: "right",
  },
  {
    id: 3,
    title: "千代勝正 オフィシャルファンクラブ",
    subtitle: "レジェンドドライバー",
    description: "あの伝説のドライバーが語る舞台裏をお楽しみに！",
    image: "chiyo_image.jpg",
    buttonText: "詳細を見る",
    buttonLink: "#partners",
    position: "left",
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  // 自動スライド切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        setCurrent((prev) => (prev + 1) % bannerItems.length)
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [isAnimating])

  // アニメーション完了時のハンドラ
  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  // スクロールダウンハンドラ
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  // テキスト位置のスタイル
  const getTextPosition = (position: string) => {
    switch (position) {
      case "left":
        return "items-start text-left"
      case "right":
        return "items-end text-right"
      default:
        return "items-center text-center"
    }
  }

  return (
    <motion.div ref={containerRef} className="relative w-full h-screen overflow-hidden" style={{ opacity, scale }}>
      {/* バナーアイテム */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bannerItems[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          onAnimationComplete={handleAnimationComplete}
        >
          {/* 背景画像 */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          >
            <Image
              src={bannerItems[current].image || "/placeholder.svg"}
              alt={bannerItems[current].title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>

          {/* テキストコンテンツ */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl w-full px-6 mx-auto h-full flex flex-col justify-center">
              <div className={`flex flex-col ${getTextPosition(bannerItems[current].position)} gap-4 max-w-2xl`}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-red-600 text-white px-4 py-1 text-sm font-medium inline-block rounded-sm"
                >
                  {bannerItems[current].subtitle}
                </motion.div>

                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
                >
                 {bannerItems[current].title.split(" ").map((word, index) => (
                   <React.Fragment key={index}>
                      {word}
                     {index === 0 && <br />}
                   </React.Fragment>
                 ))}
                </motion.h1>


                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-lg md:text-xl text-zinc-200 max-w-lg"
                >
                  {bannerItems[current].description}
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Link href={bannerItems[current].buttonLink}>
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white mt-4">
                      {bannerItems[current].buttonText}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* インジケーター */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrent(index)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-red-600 w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>

      {/* スクロールダウンボタン */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        style={{ y }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-xs mb-2 opacity-80">スクロール</span>
          <ChevronDown className="h-6 w-6 text-white opacity-80" />
        </div>
      </motion.div>
    </motion.div>
  )
}
