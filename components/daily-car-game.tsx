"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Trophy, Clock, Calendar, Share2, RefreshCw, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import ShareButton from "@/components/share-button"
import RankingModal from "@/components/ranking-modal"
import { getCurrentUserRanking } from "@/lib/ranking-api"
import {
  getTodaysGame,
  canPlayToday,
  markAsPlayed,
  getNextPlayTime,
  type GameType,
  type PartGuessGame,
  type CarQuizGame,
  type CarHistoryGame,
  type RacingTriviaGame,
} from "@/lib/car-games"

export default function DailyCarGame() {
  const [gameState, setGameState] = useState<"loading" | "ready" | "playing" | "answered" | "completed">("loading")
  const [gameType, setGameType] = useState<GameType | null>(null)
  const [gameData, setGameData] = useState<PartGuessGame | CarQuizGame | CarHistoryGame | RacingTriviaGame | null>(null)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [streak, setStreak] = useState<number>(0)
  const [nextPlayTime, setNextPlayTime] = useState<string>("")
  const [canPlay, setCanPlay] = useState<boolean>(true)
  const [showRanking, setShowRanking] = useState<boolean>(false)
  const [userRanking, setUserRanking] = useState<{ rank: number; total: number } | null>(null)

  // ゲームデータの読み込み
  useEffect(() => {
    // ゲームデータを取得
    const { gameType, gameData } = getTodaysGame()
    setGameType(gameType)
    setGameData(gameData)

    // プレイ可能かチェック
    const playable = canPlayToday()
    setCanPlay(playable)

    // 次回プレイ可能時間を取得
    setNextPlayTime(getNextPlayTime())

    // ストリークを取得
    const savedStreak = localStorage.getItem("gameStreak")
    if (savedStreak) {
      const streakValue = Number.parseInt(savedStreak, 10)
      setStreak(streakValue)

      // ユーザーランキングを取得
      const ranking = getCurrentUserRanking(streakValue)
      setUserRanking(ranking)
    }

    setGameState(playable ? "ready" : "completed")
  }, [])

  // ゲーム開始
  const startGame = () => {
    setGameState("playing")
  }

  // 選択肢を選んだ時の処理
  const handleOptionSelect = (optionIndex: number) => {
    if (gameState !== "playing" || !gameData) return

    setSelectedOption(optionIndex)
    setGameState("answered")

    const correct = optionIndex === gameData.correctAnswer
    setIsCorrect(correct)

    // 正解の場合はストリークを更新
    if (correct) {
      const newStreak = streak + 1
      setStreak(newStreak)
      localStorage.setItem("gameStreak", newStreak.toString())

      // ユーザーランキングを更新
      const ranking = getCurrentUserRanking(newStreak)
      setUserRanking(ranking)
    } else {
      // 不正解の場合はストリークをリセット
      setStreak(0)
      localStorage.setItem("gameStreak", "0")

      // ユーザーランキングを更新
      const ranking = getCurrentUserRanking(0)
      setUserRanking(ranking)
    }

    // プレイ完了を記録
    markAsPlayed()
  }

  // 結果を確認
  const viewResult = () => {
    setGameState("completed")
  }

  // ランキングを表示
  const openRanking = () => {
    setShowRanking(true)
  }

  // ランキングを閉じる
  const closeRanking = () => {
    setShowRanking(false)
  }

  // ゲームタイプに応じたタイトルを取得
  const getGameTitle = () => {
    switch (gameType) {
      case "partGuess":
        return "パーツ当てゲーム"
      case "carQuiz":
        return "カーマニア検定"
      case "carHistory":
        return "車の歴史クイズ"
      case "racingTrivia":
        return "レーシングトリビア"
      default:
        return "デイリークイズ"
    }
  }

  // ゲームタイプに応じたアイコンを取得
  const getGameIcon = () => {
    switch (gameType) {
      case "partGuess":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-red-500"
          >
            <path d="M7 12a5 5 0 0 1 5-5c.273 0 .5.224.5.5S12.273 8 12 8a4 4 0 0 0-4 4c0 .273-.224.5-.5.5S7 12.273 7 12z" />
            <path d="M14 12a5 5 0 0 1 5-5c.273 0 .5.224.5.5S19.273 8 19 8a4 4 0 0 0-4 4c0 .273-.224.5-.5.5S14 12.273 14 12z" />
            <circle cx="12" cy="12" r="9" />
            <path d="M12 12v6" />
          </svg>
        )
      case "carQuiz":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-red-500"
          >
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4" y1="12" x2="2" y2="12" />
            <line x1="22" y1="12" x2="20" y2="12" />
          </svg>
        )
      case "carHistory":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-red-500"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        )
      case "racingTrivia":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-red-500"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        )
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-red-500"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        )
    }
  }

  if (gameState === "loading") {
    return (
      <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 text-center">
        <div className="animate-spin mb-4">
          <RefreshCw className="h-8 w-8 mx-auto text-red-500" />
        </div>
        <p>ゲームを読み込み中...</p>
      </div>
    )
  }

  return (
    <>
      <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
        {/* ヘッダー */}
        <div className="bg-zinc-950 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getGameIcon()}
            <h2 className="text-xl font-bold">毎日1問！{getGameTitle()}</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={openRanking}
              className="border-zinc-700 hover:bg-zinc-800 flex items-center gap-1"
            >
              <BarChart className="h-4 w-4 text-blue-400" />
              <span>ランキング</span>
              {userRanking && (
                <span className="ml-1 bg-zinc-700 text-xs px-1.5 py-0.5 rounded-full">
                  {userRanking.rank}/{userRanking.total}位
                </span>
              )}
            </Button>
            <div className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded text-sm">
              <Trophy className="h-4 w-4 text-yellow-500" />
              <span>{streak}連勝</span>
            </div>
            <div className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded text-sm">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span>デイリー</span>
            </div>
          </div>
        </div>

        {/* ゲームコンテンツ */}
        <div className="p-6">
          {gameState === "ready" && canPlay && (
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4">今日の{getGameTitle()}に挑戦しよう！</h3>
              <p className="text-zinc-400 mb-6">
                毎日更新される車の知識クイズで腕試し。連続正解でストリークを伸ばそう！
              </p>
              <Button onClick={startGame} className="bg-red-600 hover:bg-red-700">
                スタート
              </Button>
            </div>
          )}

          {gameState === "playing" && gameData && (
            <div>
              <h3 className="text-lg font-medium mb-4">{gameData.question}</h3>
              <div className="relative aspect-[16/9] mb-6 bg-zinc-950 rounded-lg overflow-hidden">
                <Image src={gameData.image || "/placeholder.svg"} alt="クイズ画像" fill className="object-contain" />
              </div>
              <div className="space-y-3">
                {gameData.options.map((option, index) => (
                  <button
                    key={index}
                    className="w-full text-left bg-zinc-800 hover:bg-zinc-700 p-4 rounded-lg flex items-center transition-colors"
                    onClick={() => handleOptionSelect(index)}
                  >
                    <div className="h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-lg">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {gameState === "answered" && gameData && (
            <div>
              <h3 className="text-lg font-medium mb-4">{gameData.question}</h3>
              <div className="relative aspect-[16/9] mb-6 bg-zinc-950 rounded-lg overflow-hidden">
                <Image src={gameData.image || "/placeholder.svg"} alt="クイズ画像" fill className="object-contain" />
              </div>
              <div className="space-y-3">
                {gameData.options.map((option, index) => (
                  <div
                    key={index}
                    className={`w-full text-left p-4 rounded-lg flex items-center ${
                      index === gameData.correctAnswer
                        ? "bg-green-900/30 border border-green-700"
                        : index === selectedOption
                          ? "bg-red-900/30 border border-red-700"
                          : "bg-zinc-800"
                    }`}
                  >
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                        index === gameData.correctAnswer
                          ? "bg-green-700"
                          : index === selectedOption
                            ? "bg-red-700"
                            : "bg-zinc-700"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="text-lg">{option}</span>
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 p-4 rounded-lg ${
                  isCorrect ? "bg-green-900/20 border border-green-900" : "bg-red-900/20 border border-red-900"
                }`}
              >
                <h4 className={`font-bold ${isCorrect ? "text-green-400" : "text-red-400"}`}>
                  {isCorrect ? "正解！" : "不正解..."}
                </h4>
                <p className="mt-2">{gameData.explanation}</p>

                {/* 車の歴史クイズの場合は年代を表示 */}
                {gameType === "carHistory" && "year" in gameData && gameData.year && (
                  <div className="mt-3 pt-3 border-t border-zinc-700">
                    <span className="text-zinc-400">年代: </span>
                    <span className="font-semibold text-yellow-400">{gameData.year}</span>
                  </div>
                )}

                {/* レーシングトリビアの場合はカテゴリを表示 */}
                {gameType === "racingTrivia" && "category" in gameData && gameData.category && (
                  <div className="mt-3 pt-3 border-t border-zinc-700">
                    <span className="text-zinc-400">カテゴリ: </span>
                    <span className="inline-block px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs font-semibold">
                      {gameData.category}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-center">
                <Button onClick={viewResult} className="bg-blue-600 hover:bg-blue-700">
                  結果を確認
                </Button>
              </div>
            </div>
          )}

          {(gameState === "completed" || !canPlay) && (
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">
                {canPlay ? "今日のチャレンジ完了！" : "今日はすでにプレイ済みです"}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span className="text-xl font-bold">{streak}連勝中</span>
                {userRanking && (
                  <span className="ml-2 bg-zinc-800 text-xs px-2 py-1 rounded-full">
                    ランキング: {userRanking.rank}/{userRanking.total}位
                  </span>
                )}
              </div>

              <div className="bg-zinc-800 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-400">次回のチャレンジまで</span>
                  <div className="flex items-center gap-1 text-blue-400">
                    <Clock className="h-4 w-4" />
                    <span>{nextPlayTime}</span>
                  </div>
                </div>
                <Progress value={100} className="h-2 bg-zinc-700" indicatorClassName="bg-blue-500" />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={openRanking}
                  variant="default"
                  size="default"
                  className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                >
                  <BarChart className="h-4 w-4 mr-2" />
                  ランキングを見る
                </Button>
                <ShareButton
                  title={`私は${getGameTitle()}で${streak}連勝中！ #SAN-EI #TAS2026 #カークイズ`}
                  variant="default"
                  size="default"
                  className="bg-red-600 hover:bg-red-700 w-full sm:w-auto"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  結果をシェア
                </ShareButton>
                <Button
                  variant="outline"
                  className="border-zinc-700 hover:bg-zinc-800 w-full sm:w-auto"
                  onClick={() => (window.location.href = "#magazine")}
                >
                  マガジンを読む
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ランキングモーダル */}
      <RankingModal isOpen={showRanking} onClose={closeRanking} userStreak={streak} />
    </>
  )
}
