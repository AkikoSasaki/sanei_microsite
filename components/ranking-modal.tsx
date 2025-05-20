"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Trophy, Medal, Award, Crown, Search, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fetchRankingData, getCurrentUserData, type RankingUser } from "@/lib/ranking-api"

interface RankingModalProps {
  isOpen: boolean
  onClose: () => void
  userStreak: number
}

export default function RankingModal({ isOpen, onClose, userStreak }: RankingModalProps) {
  const [rankings, setRankings] = useState<RankingUser[]>([])
  const [currentUser, setCurrentUser] = useState<RankingUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState<"all" | "friends">("all")

  // ランキングデータの取得
  useEffect(() => {
    if (isOpen) {
      setLoading(true)
      fetchRankingData()
        .then((data) => {
          setRankings(data)
          // 現在のユーザーデータを取得
          const userData = getCurrentUserData(userStreak)
          setCurrentUser(userData)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [isOpen, userStreak])

  // 検索フィルター
  const filteredRankings = rankings.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // ユーザーのランキング位置を取得
  const getUserRank = (userId: string): number => {
    const index = [...rankings, ...(currentUser ? [currentUser] : [])]
      .sort((a, b) => b.streak - a.streak)
      .findIndex((user) => user.id === userId)
    return index + 1
  }

  // 現在のユーザーのランキング
  const currentUserRank = currentUser ? getUserRank(currentUser.id) : 0

  // ランキングアイコンを取得
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-400" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-sm text-zinc-400">{rank}</span>
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-zinc-900 rounded-xl w-full max-w-2xl max-h-[80vh] overflow-hidden border border-zinc-800">
        {/* ヘッダー */}
        <div className="bg-zinc-950 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <h2 className="text-xl font-bold">連勝ランキング</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-zinc-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* コンテンツ */}
        <div className="p-4">
          <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as "all" | "friends")}>
            <TabsList className="bg-zinc-800 border border-zinc-700 mb-4">
              <TabsTrigger value="all" className="data-[state=active]:bg-zinc-700">
                全体ランキング
              </TabsTrigger>
              <TabsTrigger value="friends" className="data-[state=active]:bg-zinc-700">
                フレンドランキング
              </TabsTrigger>
            </TabsList>

            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                  placeholder="ユーザーを検索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-zinc-800 border-zinc-700"
                />
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <RefreshCw className="h-8 w-8 animate-spin text-zinc-500 mb-2" />
                  <p className="text-zinc-500">ランキングを読み込み中...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* 現在のユーザーのランキング */}
                  {currentUser && (
                    <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 flex justify-center">{getRankIcon(currentUserRank)}</div>
                          <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <Image
                              src={currentUser.avatar || "/placeholder.svg"}
                              alt={currentUser.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium flex items-center gap-1">
                              {currentUser.name}
                              <span className="text-xs bg-blue-900/50 text-blue-300 px-1.5 py-0.5 rounded">あなた</span>
                            </div>
                            <div className="text-xs text-zinc-400">最終プレイ: 今日</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-zinc-900 px-3 py-1 rounded">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          <span className="font-bold">{currentUser.streak}連勝</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ランキングリスト */}
                  <div className="bg-zinc-800 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 p-3 bg-zinc-900 text-xs text-zinc-400 font-medium">
                      <div className="w-8 text-center">順位</div>
                      <div>ユーザー</div>
                      <div>連勝数</div>
                    </div>

                    <div className="max-h-[40vh] overflow-y-auto">
                      {filteredRankings.length > 0 ? (
                        filteredRankings.map((user, index) => (
                          <div
                            key={user.id}
                            className={`grid grid-cols-[auto_1fr_auto] items-center gap-2 p-3 ${
                              index % 2 === 0 ? "bg-zinc-800" : "bg-zinc-800/50"
                            } hover:bg-zinc-700/50 transition-colors`}
                          >
                            <div className="w-8 flex justify-center">{getRankIcon(index + 1)}</div>
                            <div className="flex items-center gap-3">
                              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                                <Image
                                  src={user.avatar || "/placeholder.svg"}
                                  alt={user.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-xs text-zinc-400">最終プレイ: {user.lastPlayed}</div>
                              </div>
                              {user.badges && user.badges.length > 0 && (
                                <div className="flex gap-1">
                                  {user.badges.map((badge) => (
                                    <span
                                      key={badge}
                                      className="text-xs bg-zinc-700 text-zinc-300 px-1.5 py-0.5 rounded"
                                    >
                                      {badge}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-1 bg-zinc-900 px-3 py-1 rounded">
                              <Trophy className="h-4 w-4 text-yellow-500" />
                              <span className="font-bold">{user.streak}連勝</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-6 text-center text-zinc-500">
                          {searchTerm
                            ? "検索条件に一致するユーザーが見つかりませんでした"
                            : "ランキングデータがありません"}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="friends" className="mt-0">
              <div className="bg-zinc-800 rounded-lg p-6 text-center">
                <Award className="h-12 w-12 mx-auto text-zinc-600 mb-3" />
                <h3 className="text-lg font-medium mb-2">フレンド機能は準備中です</h3>
                <p className="text-zinc-400 mb-4">
                  フレンド機能は近日公開予定です。公開されるとフレンド同士でランキングを競うことができます。
                </p>
                <Button variant="outline" className="border-zinc-700 hover:bg-zinc-700">
                  お知らせを受け取る
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* フッター */}
        <div className="bg-zinc-950 p-4 border-t border-zinc-800">
          <div className="text-xs text-zinc-500 text-center">
            ランキングは毎日更新されます。連続正解でランキング上位を目指しましょう！
          </div>
        </div>
      </div>
    </div>
  )
}
