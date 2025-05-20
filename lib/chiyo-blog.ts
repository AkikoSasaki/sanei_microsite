export interface ChiyoBlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  category: string
  isLocked: boolean
}

export const chiyoBlogPosts: ChiyoBlogPost[] = [
  {
    id: 1,
    title: "セパンでのテスト走行を終えて",
    excerpt:
      "先週末のセパンでのテスト走行について。新しいセットアップで大きな進歩がありました。チームの皆さんの努力に感謝します。",
    date: "2025-05-15",
    image: "/placeholder.svg?height=400&width=600",
    category: "レース準備",
    isLocked: true,
  },
  {
    id: 2,
    title: "富士スピードウェイでの勝利を振り返って",
    excerpt: "先日の富士スピードウェイでのレースで優勝することができました。レース展開や戦略について詳しく解説します。",
    date: "2025-05-10",
    image: "/placeholder.svg?height=400&width=600",
    category: "レースレポート",
    isLocked: true,
  },
  {
    id: 3,
    title: "新型マシンの開発秘話",
    excerpt:
      "今シーズン投入された新型マシンの開発秘話について。エンジニアとのミーティングや試作車両でのテストなど、裏側をお話しします。",
    date: "2025-05-05",
    image: "/placeholder.svg?height=400&width=600",
    category: "マシン開発",
    isLocked: true,
  },
]
