"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, X, Calendar, ExternalLink, RefreshCw, Bell, BellOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ShareButton from "@/components/share-button"
import { fetchLatestNews, fetchNewUpdates, type NewsItem } from "@/lib/api-client"
import { cn } from "@/lib/utils"

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [visibleCount, setVisibleCount] = useState(3)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [newItemsCount, setNewItemsCount] = useState(0)
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // 初回データ取得
  useEffect(() => {
    fetchInitialData()
  }, [])

  // 自動更新タイマー
  useEffect(() => {
    if (autoRefreshEnabled) {
      startAutoRefreshTimer()
    } else {
      stopAutoRefreshTimer()
    }

    return () => {
      stopAutoRefreshTimer()
    }
  }, [autoRefreshEnabled])

  // 初期データ取得
  const fetchInitialData = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchLatestNews()
      setNewsItems(data)
      setLastUpdated(new Date())
    } catch (err) {
      setError("最新情報の取得に失敗しました。後でもう一度お試しください。")
      console.error("Failed to fetch news:", err)
    } finally {
      setLoading(false)
    }
  }

  // 最新データ取得
  const fetchUpdates = useCallback(async () => {
    if (updating) return

    try {
      setUpdating(true)
      setError(null)
      const data = await fetchNewUpdates()

      // 新しいアイテムを検出
      const newItems = data.filter((item) => !newsItems.some((existing) => existing.id === item.id))
      setNewItemsCount(newItems.length)

      if (newItems.length > 0) {
        // 新しいアイテムをマーク
        const updatedData = data.map((item) => {
          if (newItems.some((newItem) => newItem.id === item.id)) {
            return { ...item, isNew: true }
          }
          return item
        })
        setNewsItems(updatedData)
      }

      setLastUpdated(new Date())
    } catch (err) {
      setError("更新の取得に失敗しました。後でもう一度お試しください。")
      console.error("Failed to fetch updates:", err)
    } finally {
      setUpdating(false)
    }
  }, [newsItems, updating])

  // 自動更新タイマーを開始
  const startAutoRefreshTimer = () => {
    stopAutoRefreshTimer() // 既存のタイマーをクリア
    timerRef.current = setInterval(() => {
      fetchUpdates()
    }, 60000) // 1分ごとに更新
  }

  // 自動更新タイマーを停止
  const stopAutoRefreshTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  // 手動更新
  const handleManualRefresh = () => {
    fetchUpdates()
  }

  // 自動更新の切り替え
  const toggleAutoRefresh = () => {
    setAutoRefreshEnabled(!autoRefreshEnabled)
  }

  // もっと見るボタンのハンドラー
  const handleShowMore = () => {
    setVisibleCount(newsItems.length)
  }

  // 日付をフォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  // 最終更新時間をフォーマット
  const formatLastUpdated = () => {
    if (!lastUpdated) return "未更新"

    const now = new Date()
    const diff = now.getTime() - lastUpdated.getTime()
    const minutes = Math.floor(diff / 60000)

    if (minutes < 1) return "たった今更新"
    if (minutes < 60) return `${minutes}分前に更新`

    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}時間前に更新`

    return new Intl.DateTimeFormat("ja-JP", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(lastUpdated)
  }

  // 新着アイテムの表示をリセット
  const resetNewItemsIndicator = () => {
    setNewsItems((prev) =>
      prev.map((item) => ({
        ...item,
        isNew: false,
      })),
    )
    setNewItemsCount(0)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <X className="h-5 w-5 text-red-500" />
          <h2 className="text-2xl font-bold tracking-tight">最新情報</h2>
          {newItemsCount > 0 && (
            <Badge className="bg-red-600 hover:bg-red-700 ml-2" onClick={resetNewItemsIndicator}>
              新着 {newItemsCount}件
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-zinc-500">{formatLastUpdated()}</div>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800",
              updating && "animate-spin",
            )}
            onClick={handleManualRefresh}
            disabled={updating || loading}
            title="手動更新"
          >
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">更新</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn("border-zinc-800 hover:bg-zinc-800", autoRefreshEnabled ? "text-green-500" : "text-zinc-400")}
            onClick={toggleAutoRefresh}
            title={autoRefreshEnabled ? "自動更新オン" : "自動更新オフ"}
          >
            {autoRefreshEnabled ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
            <span className="sr-only">自動更新</span>
          </Button>
          <ShareButton
            title="SAN-EI 東京オートサロン 2026 最新情報"
            variant="ghost"
            size="sm"
            className="text-zinc-400 hover:text-white hover:bg-zinc-800"
          />
          <Link href="https://x.com/tokyoautosalon" target="_blank">
            <Button variant="link" className="text-red-500 hover:text-red-400">
              公式Xアカウント <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* エラーメッセージ */}
      {error && (
        <div className="bg-red-900/20 border border-red-900 text-red-200 rounded-md p-3 text-sm flex items-center justify-between">
          <span>{error}</span>
          <Button variant="ghost" size="sm" className="text-red-200 hover:text-white" onClick={fetchInitialData}>
            再試行
          </Button>
        </div>
      )}

      {/* ローディング状態 */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 p-4">
              <div className="animate-pulse space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-zinc-800 rounded w-1/3"></div>
                  <div className="h-4 bg-zinc-800 rounded w-8"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-zinc-800 rounded w-full"></div>
                  <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
                  <div className="h-4 bg-zinc-800 rounded w-4/6"></div>
                </div>
                <div className="h-48 bg-zinc-800 rounded"></div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="h-4 bg-zinc-800 rounded w-12"></div>
                    <div className="h-4 bg-zinc-800 rounded w-12"></div>
                  </div>
                  <div className="h-8 bg-zinc-800 rounded w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* ニュースアイテム */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                className={cn(
                  "bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group transition-all duration-300",
                  item.isNew && "border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.3)]",
                )}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{formatDate(item.date)}</span>
                      {item.isNew && <Badge className="bg-red-600 hover:bg-red-700 ml-1 animate-pulse">NEW</Badge>}
                    </div>
                    <ShareButton
                      title={item.content.substring(0, 50) + "..."}
                      url={item.link}
                      variant="ghost"
                      size="sm"
                      className="text-zinc-400 hover:text-white hover:bg-zinc-800"
                    />
                  </div>
                  <p className="text-zinc-200 mb-4">{item.content}</p>
                  {item.image && (
                    <div className="relative aspect-[16/9] rounded-md overflow-hidden mb-4">
                      <Image src={item.image || "/placeholder.svg"} alt="投稿画像" fill className="object-cover" />
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-zinc-400 text-sm">
                      <span>♥ {item.likes}</span>
                      <span>↺ {item.retweets}</span>
                    </div>
                    <Link href={item.link} target="_blank">
                      <Button variant="outline" size="sm" className="border-zinc-700 hover:bg-zinc-800">
                        <X className="h-3 w-3 mr-1" />
                        投稿を見る
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* もっと見るボタン */}
          {visibleCount < newsItems.length && (
            <div className="flex justify-center mt-6">
              <Button
                onClick={handleShowMore}
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-800 text-zinc-300"
              >
                もっと見る <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
