// 車のパーツ当てゲーム用データ
export interface PartGuessGame {
  id: number
  question: string
  image: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

// 車種当てクイズ用データ
export interface CarQuizGame {
  id: number
  question: string
  image: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

// 車の歴史クイズ用データ
export interface CarHistoryGame {
  id: number
  question: string
  image: string
  options: string[]
  correctAnswer: number
  explanation?: string
  year?: string
}

// レーシングトリビア用データ
export interface RacingTriviaGame {
  id: number
  question: string
  image: string
  options: string[]
  correctAnswer: number
  explanation?: string
  category?: "F1" | "Rally" | "GT" | "NASCAR" | "Other"
}

// 日替わりゲームの種類
export type GameType = "partGuess" | "carQuiz" | "carHistory" | "racingTrivia"

// 日替わりゲームのデータ
export interface DailyGame {
  date: string
  gameType: GameType
  gameId: number
}

// パーツ当てゲームのデータ
export const partGuessGames: PartGuessGame[] = [
  {
    id: 1,
    question: "シルエットの車のパーツは何？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["スポイラー", "マフラー", "バンパー"],
    correctAnswer: 0,
    explanation: "このシルエットはリアスポイラーです。空気抵抗を減らし、高速走行時の安定性を向上させる役割があります。",
  },
  {
    id: 2,
    question: "この拡大写真のパーツは何？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["インタークーラー", "ラジエーター", "オイルクーラー"],
    correctAnswer: 1,
    explanation: "これはラジエーターです。エンジンの冷却水を冷やし、エンジンの温度を適切に保つ重要な役割を果たします。",
  },
  {
    id: 3,
    question: "このパーツの名前は？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["キャリパー", "ショックアブソーバー", "ナックル"],
    correctAnswer: 0,
    explanation:
      "これはブレーキキャリパーです。ブレーキパッドを保持し、ディスクを挟み込むことでブレーキをかける部品です。",
  },
  {
    id: 4,
    question: "この内装パーツは何？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["パドルシフト", "ステアリングスイッチ", "クルーズコントロール"],
    correctAnswer: 1,
    explanation:
      "これはステアリングスイッチです。ハンドルから手を離さずにオーディオやクルーズコントロールなどを操作できます。",
  },
  {
    id: 5,
    question: "このエンジンパーツの名前は？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["スロットルボディ", "インジェクター", "ターボチャージャー"],
    correctAnswer: 2,
    explanation:
      "これはターボチャージャーです。排気ガスの圧力を利用してタービンを回し、エンジンに送り込む空気を圧縮して出力を向上させます。",
  },
]

// 車種当てクイズのデータ
export const carQuizGames: CarQuizGame[] = [
  {
    id: 1,
    question: "この車の車種は？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["フェアレディZ", "スカイライン", "セリカ"],
    correctAnswer: 0,
    explanation:
      "これは日産フェアレディZ（S30型）です。1969年から1978年まで生産された、日本を代表するスポーツカーです。",
  },
  {
    id: 2,
    question: "この車の車種は？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["スープラ", "RX-7", "NSX"],
    correctAnswer: 1,
    explanation:
      "これはマツダRX-7（FD3S型）です。1991年から2002年まで生産された、ロータリーエンジンを搭載したスポーツカーです。",
  },
  {
    id: 3,
    question: "この車の車種は？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["インプレッサ", "ランサーエボリューション", "インテグラ"],
    correctAnswer: 1,
    explanation:
      "これは三菱ランサーエボリューションです。ラリー競技をベースに開発された高性能セダンで、多くのモータースポーツファンに愛されています。",
  },
  {
    id: 4,
    question: "この車の車種は？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["シビックタイプR", "ゴルフGTI", "フォーカスST"],
    correctAnswer: 0,
    explanation:
      "これはホンダシビックタイプRです。FFながら高い運動性能を持ち、ニュルブルクリンクでの速さでも知られています。",
  },
  {
    id: 5,
    question: "この車の車種は？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["GT-R", "LFA", "LC500"],
    correctAnswer: 0,
    explanation:
      "これは日産GT-R（R35型）です。2007年に登場し、そのパフォーマンスから「ゴジラ」の愛称で親しまれています。",
  },
]

// 車の歴史クイズのデータ
export const carHistoryGames: CarHistoryGame[] = [
  {
    id: 1,
    question: "フォード・モデルTが初めて生産されたのは何年？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["1908年", "1913年", "1927年"],
    correctAnswer: 0,
    explanation:
      "フォード・モデルTは1908年に生産が開始され、大量生産方式の先駆けとなりました。1927年まで生産され、合計で1,500万台以上が製造されました。",
    year: "1908年",
  },
  {
    id: 2,
    question: "日本初の量産乗用車は？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["トヨダAA型", "ダットサン", "三菱A型"],
    correctAnswer: 0,
    explanation:
      "トヨダAA型は1936年に発売された日本初の量産乗用車です。現在のトヨタ自動車の前身であるトヨダ自動織機製作所自動車部によって製造されました。",
    year: "1936年",
  },
  {
    id: 3,
    question: "ロータリーエンジンを初めて量産車に搭載したメーカーは？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["マツダ", "スズキ", "ホンダ"],
    correctAnswer: 0,
    explanation:
      "マツダは1967年に発売されたコスモスポーツにロータリーエンジンを搭載し、世界で初めてロータリーエンジンの量産化に成功しました。",
    year: "1967年",
  },
  {
    id: 4,
    question: "日産GT-R（R35）が初めて発表されたのは何年？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["2005年", "2007年", "2009年"],
    correctAnswer: 1,
    explanation:
      "日産GT-R（R35）は2007年の東京モーターショーで発表され、2008年から販売が開始されました。それまでのスカイラインGT-Rとは異なり、スカイラインの名を外した初めてのGT-Rとなりました。",
    year: "2007年",
  },
  {
    id: 5,
    question: "トヨタ2000GTが映画「007は二度死ぬ」に登場したのは何年？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["1965年", "1967年", "1969年"],
    correctAnswer: 1,
    explanation:
      "トヨタ2000GTは1967年公開の映画「007は二度死ぬ」に登場し、日本車として初めてボンドカーとなりました。映画用に特別にオープンカー仕様が製作されました。",
    year: "1967年",
  },
]

// レーシングトリビアのデータ
export const racingTriviaGames: RacingTriviaGame[] = [
  {
    id: 1,
    question: "F1史上最多のワールドチャンピオン獲得数を持つドライバーは？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["ミハエル・シューマッハ", "ルイス・ハミルトン", "アイルトン・セナ"],
    correctAnswer: 1,
    explanation:
      "ルイス・ハミルトンは7回のF1ワールドチャンピオンを獲得しており、ミハエル・シューマッハと並んでF1史上最多のチャンピオン獲得数を持っています。",
    category: "F1",
  },
  {
    id: 2,
    question: "WRC（世界ラリー選手権）で最多の優勝回数を誇るドライバーは？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["セバスチャン・ローブ", "トミ・マキネン", "カルロス・サインツ"],
    correctAnswer: 0,
    explanation:
      "セバスチャン・ローブは2004年から2012年まで9年連続でWRCチャンピオンを獲得し、通算80勝という記録を持っています。",
    category: "Rally",
  },
  {
    id: 3,
    question: "ル・マン24時間レースで日本車として初めて総合優勝したのは？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["トヨタTS050 HYBRID", "マツダ787B", "日産R390 GT1"],
    correctAnswer: 1,
    explanation:
      "マツダ787Bは1991年のル・マン24時間レースで総合優勝し、日本車として初めての栄冠を手にしました。また、ロータリーエンジン搭載車としても唯一の優勝車となっています。",
    category: "GT",
  },
  {
    id: 4,
    question: "F1日本GPが初めて開催されたサーキットは？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["富士スピードウェイ", "鈴鹿サーキット", "筑波サーキット"],
    correctAnswer: 0,
    explanation:
      "F1日本GPは1976年に富士スピードウェイで初めて開催されました。その後1987年からは主に鈴鹿サーキットで開催されています。",
    category: "F1",
  },
  {
    id: 5,
    question: "「グループB」と呼ばれる伝説のラリーカテゴリーが廃止されたのは何年？",
    image: "/placeholder.svg?height=400&width=600",
    options: ["1982年", "1986年", "1990年"],
    correctAnswer: 1,
    explanation:
      "グループBは1982年に始まり、高出力と軽量化による危険なマシンが多く登場しました。1986年に複数の致命的な事故が発生したため、同年をもって廃止されました。",
    category: "Rally",
  },
]

// 今日のゲームを取得する関数
export function getTodaysGame(): {
  gameType: GameType
  gameData: PartGuessGame | CarQuizGame | CarHistoryGame | RacingTriviaGame
} {
  const today = new Date().toISOString().split("T")[0]
  const seed = hashString(today)

  // 日付に基づいてゲームタイプを決定（4種類のゲームをローテーション）
  const gameTypeIndex = seed % 4
  let gameType: GameType

  switch (gameTypeIndex) {
    case 0:
      gameType = "partGuess"
      break
    case 1:
      gameType = "carQuiz"
      break
    case 2:
      gameType = "carHistory"
      break
    case 3:
      gameType = "racingTrivia"
      break
    default:
      gameType = "partGuess"
  }

  // ゲームIDを決定
  let gameData
  switch (gameType) {
    case "partGuess":
      gameData = partGuessGames[seed % partGuessGames.length]
      break
    case "carQuiz":
      gameData = carQuizGames[seed % carQuizGames.length]
      break
    case "carHistory":
      gameData = carHistoryGames[seed % carHistoryGames.length]
      break
    case "racingTrivia":
      gameData = racingTriviaGames[seed % racingTriviaGames.length]
      break
    default:
      gameData = partGuessGames[seed % partGuessGames.length]
  }

  return { gameType, gameData }
}

// 文字列からハッシュ値を生成する関数
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // 32bit整数に変換
  }
  return Math.abs(hash)
}

// ユーザーのゲームプレイ状態を確認
export function canPlayToday(): boolean {
  // ローカルストレージから最後にプレイした日付を取得
  if (typeof window === "undefined") return true

  const lastPlayed = localStorage.getItem("lastPlayedDate")
  const today = new Date().toISOString().split("T")[0]

  // 今日まだプレイしていなければtrue
  return lastPlayed !== today
}

// プレイ完了を記録
export function markAsPlayed(): void {
  if (typeof window === "undefined") return

  const today = new Date().toISOString().split("T")[0]
  localStorage.setItem("lastPlayedDate", today)
}

// 次回プレイ可能時間を取得
export function getNextPlayTime(): string {
  const now = new Date()
  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)

  const diffMs = tomorrow.getTime() - now.getTime()
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

  return `${diffHrs}時間${diffMins}分`
}
