"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1600",
    title: "東京オートサロン 2026",
    subtitle: "究極の自動車フェスティバル",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1600",
    title: "限定モデル公開",
    subtitle: "新型モデルを一足先に見る",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1600",
    title: "特別パフォーマンス",
    subtitle: "ライブデモンストレーションとショー",
  },
]

export default function MainCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % carouselItems.length)
  }

  const prev = () => {
    setCurrent((current - 1 + carouselItems.length) % carouselItems.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{item.title}</h1>
              <p className="mt-2 text-lg md:text-xl text-zinc-300">{item.subtitle}</p>
              <Button className="mt-6 bg-red-600 hover:bg-red-700">詳細を見る</Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 border-zinc-700 text-white hover:bg-black/70"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">前のスライド</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 border-zinc-700 text-white hover:bg-black/70"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">次のスライド</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">スライド {index + 1} に移動</span>
          </button>
        ))}
      </div>
    </div>
  )
}
