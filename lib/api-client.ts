// 東京オートサロンの最新ツイートデータの型定義
export interface NewsItem {
  id: string
  content: string
  date: string
  image?: string
  likes: number
  retweets: number
  link: string
  isNew?: boolean
}

// モックAPIレスポンス（実際の実装ではX APIを使用）
const mockNewsItems: NewsItem[] = [
  {
    id: "tweet-1",
    content:
      "【出展者募集開始】東京オートサロン2026の出展者募集を開始しました！今年も多くの企業様のご参加をお待ちしております。詳細は公式サイトをご確認ください。 #TAS2026 #東京オートサロン",
    date: "2025-07-15T10:00:00",
    image: "/placeholder.svg?height=400&width=600",
    likes: 245,
    retweets: 89,
    link: "https://x.com/tokyoautosalon/status/1234567890",
  },
  {
    id: "tweet-2",
    content:
      "【チケット先行販売】東京オートサロン2026のチケット先行販売が8月1日より開始！SAN-EI IDをお持ちの方は特別割引価格でご購入いただけます。 #TAS2026 #東京オートサロン",
    date: "2025-07-20T14:30:00",
    image: "/placeholder.svg?height=400&width=600",
    likes: 378,
    retweets: 156,
    link: "https://x.com/tokyoautosalon/status/1234567891",
  },
  {
    id: "tweet-3",
    content:
      "【特別ゲスト発表】東京オートサロン2026に世界的レーシングドライバーのマックス・シュミット氏が来場決定！1月13日にはトークショーも開催予定です。 #TAS2026 #東京オートサロン #マックスシュミット",
    date: "2025-07-25T09:15:00",
    image: "/placeholder.svg?height=400&width=600",
    likes: 521,
    retweets: 203,
    link: "https://x.com/tokyoautosalon/status/1234567892",
  },
  {
    id: "tweet-4",
    content:
      "【コンセプトカー初公開】SAN-EI特別協賛の次世代電動スポーツカー「VISION-E」が東京オートサロン2026で世界初公開されます！未来のモビリティをぜひご体感ください。 #TAS2026 #VISION-E #電動スポーツカー",
    date: "2025-07-30T16:45:00",
    image: "/placeholder.svg?height=400&width=600",
    likes: 612,
    retweets: 245,
    link: "https://x.com/tokyoautosalon/status/1234567893",
  },
]

// 新しいモックデータ（更新時に追加されるデータ）
const newMockNewsItems: NewsItem[] = [
  {
    id: "tweet-5",
    content:
      "【イベントスケジュール公開】東京オートサロン2026の詳細スケジュールを公開しました！各ステージイベントやデモンストレーションの時間をチェックして、お見逃しなく！ #TAS2026 #スケジュール",
    date: new Date().toISOString(),
    image: "/placeholder.svg?height=400&width=600",
    likes: 189,
    retweets: 76,
    link: "https://x.com/tokyoautosalon/status/1234567894",
    isNew: true,
  },
  {
    id: "tweet-6",
    content:
      "【コラボレーション発表】東京オートサロン2026×人気アニメ「ハイスピードドリフト」とのコラボレーションが決定！限定グッズや特別展示をお楽しみに！ #TAS2026 #ハイスピードドリフト #コラボ",
    date: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30分前
    image: "/placeholder.svg?height=400&width=600",
    likes: 423,
    retweets: 187,
    link: "https://x.com/tokyoautosalon/status/1234567895",
    isNew: true,
  },
]

// 最新情報を取得する関数
export async function fetchLatestNews(): Promise<NewsItem[]> {
  // 実際の実装ではX APIを使用してデータを取得
  // ここではモックデータを返す
  return new Promise((resolve) => {
    // 実際のAPIリクエストを模倣するために遅延を追加
    setTimeout(() => {
      resolve(mockNewsItems)
    }, 800)
  })
}

// 新しい最新情報を取得する関数（更新用）
export async function fetchNewUpdates(): Promise<NewsItem[]> {
  // 実際の実装ではX APIを使用して最新データを取得
  // ここでは50%の確率で新しいデータを返す
  return new Promise((resolve) => {
    setTimeout(() => {
      // ランダムに新しいデータを返すか既存データを返す
      const hasNewData = Math.random() > 0.5
      if (hasNewData) {
        resolve([...newMockNewsItems, ...mockNewsItems])
      } else {
        resolve(mockNewsItems)
      }
    }, 800)
  })
}
