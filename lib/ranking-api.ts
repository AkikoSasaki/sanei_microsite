// ランキングユーザーの型定義
export interface RankingUser {
  id: string
  name: string
  avatar: string
  streak: number
  lastPlayed: string
  badges?: string[]
}

// モックランキングデータ
const mockRankingData: RankingUser[] = [
  {
    id: "user-1",
    name: "カーマニア太郎",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 42,
    lastPlayed: "2025-12-01",
    badges: ["レーシングマスター", "歴史博士"],
  },
  {
    id: "user-2",
    name: "GT-R大好き",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 38,
    lastPlayed: "2025-12-01",
    badges: ["パーツマスター"],
  },
  {
    id: "user-3",
    name: "ドリフト王子",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 35,
    lastPlayed: "2025-12-01",
    badges: ["クイズ王"],
  },
  {
    id: "user-4",
    name: "F1ファン",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 29,
    lastPlayed: "2025-12-01",
  },
  {
    id: "user-5",
    name: "旧車愛好家",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 27,
    lastPlayed: "2025-12-01",
    badges: ["歴史博士"],
  },
  {
    id: "user-6",
    name: "メカニック職人",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 25,
    lastPlayed: "2025-12-01",
    badges: ["パーツマスター"],
  },
  {
    id: "user-7",
    name: "ラリーマニア",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 23,
    lastPlayed: "2025-12-01",
  },
  {
    id: "user-8",
    name: "サーキット常連",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 21,
    lastPlayed: "2025-12-01",
  },
  {
    id: "user-9",
    name: "峠の走り屋",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 19,
    lastPlayed: "2025-12-01",
  },
  {
    id: "user-10",
    name: "カスタム職人",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 18,
    lastPlayed: "2025-12-01",
  },
  {
    id: "user-11",
    name: "エンジンマニア",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 16,
    lastPlayed: "2025-12-01",
  },
  {
    id: "user-12",
    name: "ドライビングマスター",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 15,
    lastPlayed: "2025-12-01",
  },
  {
    id: "user-13",
    name: "スーパーカー愛好家",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 14,
    lastPlayed: "2025-12-01",
  },
  {
    id: "user-14",
    name: "ホットハッチ乗り",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 13,
    lastPlayed: "2025-12-01",
  },
  {
    id: "user-15",
    name: "クラシックカー収集家",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: 12,
    lastPlayed: "2025-12-01",
  },
]

// 現在のユーザーのランキングデータを取得（モック）
export function getCurrentUserRanking(streak: number): { rank: number; total: number } {
  // 現在のユーザーのストリークを基にランキングを計算
  const rank = mockRankingData.filter((user) => user.streak > streak).length + 1
  return {
    rank,
    total: mockRankingData.length + 1, // +1 は現在のユーザーを含む
  }
}

// ランキングデータを取得（モック）
export async function fetchRankingData(): Promise<RankingUser[]> {
  // 実際のAPIリクエストを模倣するために遅延を追加
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRankingData)
    }, 800)
  })
}

// 現在のユーザーのデータを取得（モック）
export function getCurrentUserData(streak: number): RankingUser {
  return {
    id: "current-user",
    name: "あなた",
    avatar: "/placeholder.svg?height=50&width=50",
    streak: streak,
    lastPlayed: new Date().toISOString().split("T")[0],
  }
}

// ランキングにユーザーデータを追加（モック）
export async function submitUserRanking(userData: RankingUser): Promise<boolean> {
  // 実際のAPIリクエストを模倣するために遅延を追加
  return new Promise((resolve) => {
    setTimeout(() => {
      // 実際のアプリでは、ここでAPIにデータを送信
      resolve(true)
    }, 500)
  })
}
