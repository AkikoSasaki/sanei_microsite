export interface Magazine {
  id: number
  title: string
  slug: string
  image: string
  isTicketHolderOnly: boolean
  publishedAt: string
  author: string
  excerpt: string
  content?: string
  tags: string[]
  relatedIds?: number[]
}

export const magazines: Magazine[] = [
  {
    id: 1,
    title: "TAS 2026プレビュー：限定モデル",
    slug: "tas-2026-preview-exclusive-models",
    image: "/placeholder.svg?height=800&width=1200",
    isTicketHolderOnly: true,
    publishedAt: "2025-12-01",
    author: "佐藤 健太",
    excerpt: "東京オートサロン2026で公開される限定モデルの先行プレビュー。業界関係者だけが知る最新情報を独占公開。",
    content: `
# TAS 2026プレビュー：限定モデル

![限定モデル](/placeholder.svg?height=600&width=1200)

## はじめに

東京オートサロン2026が近づくにつれ、自動車メーカー各社は最新の限定モデルの準備を進めています。このマガジンでは、業界関係者から得た独占情報をもとに、会場で公開される予定の限定モデルをいち早くご紹介します。

## 注目の限定モデル

### 1. ニッサン GT-R 特別仕様車「NISMO 2026 Edition」

![NISMO 2026 Edition](/placeholder.svg?height=400&width=800)

ニッサンは東京オートサロン2026で、GT-R NISMO の特別限定モデル「NISMO 2026 Edition」を世界初公開します。カーボンファイバーを贅沢に使用したボディパネルと、新開発の3.8リッターV6ツインターボエンジンを搭載し、最高出力は従来モデルから30PS向上しています。

世界限定50台の生産となり、日本国内では30台のみの販売となる予定です。

### 2. トヨタ GR スープラ「Racing Concept」

![GR スープラ Racing Concept](/placeholder.svg?height=400&width=800)

トヨタGAZOO Racingは、GRスープラをベースにした新しいレーシングコンセプトを発表します。このモデルは、来年のスーパーGTに参戦予定のマシンのプロトタイプとなっており、空力パッケージが完全に刷新されています。

市販モデルへの技術移転も計画されており、限定モデルとして2026年後半に発売される可能性があります。

### 3. ホンダ シビック Type R「30th Anniversary Edition」

![シビック Type R 30th Anniversary Edition](/placeholder.svg?height=400&width=800)

シビック Type Rの誕生30周年を記念した特別限定モデルが登場します。歴代Type Rのデザイン要素を取り入れたレトロモダンなスタイリングと、チューニングされたエンジンを搭載。0-100km/h加速は5.0秒を切る性能を実現しています。

## 会場での展示について

これらの限定モデルは、東京オートサロン2026の各メーカーブースで展示される予定です。特に「NISMO 2026 Edition」については、会期中に予約受付が開始される見込みで、早期完売が予想されています。

## まとめ

東京オートサロン2026では、これらの限定モデル以外にも多くの注目車種が発表される予定です。次回のマガジンでは、コンセプトカーに焦点を当てた情報をお届けします。

チケットをお持ちの方は、ぜひ会場で実車をご覧ください。
    `,
    tags: ["限定モデル", "新型車", "NISMO", "GRスープラ", "シビックTypeR"],
    relatedIds: [2, 3, 5],
  },
  {
    id: 2,
    title: "舞台裏：コンセプトカー",
    slug: "behind-the-scenes-concept-cars",
    image: "/placeholder.svg?height=800&width=1200",
    isTicketHolderOnly: true,
    publishedAt: "2025-12-10",
    author: "田中 美咲",
    excerpt:
      "東京オートサロン2026に出展されるコンセプトカーの開発秘話。デザイナーへの独占インタビューを交えてお届けします。",
    content: `
# 舞台裏：コンセプトカー

![コンセプトカー](/placeholder.svg?height=600&width=1200)

## コンセプトカーの世界

東京オートサロン2026では、各メーカーが未来のビジョンを示すコンセプトカーを多数出展します。このマガジンでは、それらのコンセプトカーがどのように生まれたのか、その舞台裏に迫ります。

## 主要コンセプトカー紹介

### 1. マツダ「VISION ELECTRO」

![VISION ELECTRO](/placeholder.svg?height=400&width=800)

マツダが提案する次世代電気自動車のビジョン。流麗なボディラインと革新的なインテリアデザインが特徴です。マツダデザイン本部の山田誠氏へのインタビューによると、「日本の伝統的な美意識と最先端技術の融合」をテーマに開発されたとのこと。

### 2. スバル「WILDERNESS EXPLORER」

![WILDERNESS EXPLORER](/placeholder.svg?height=400&width=800)

アウトドア愛好家向けの次世代SUVコンセプト。完全電動化と高い走破性を両立させた革新的なプラットフォームを採用しています。開発責任者の鈴木健一氏によれば、「どんな環境でも活躍できる究極のアドベンチャービークル」を目指したそうです。

## デザイナーインタビュー

### マツダ デザイン本部 山田誠氏

「VISION ELECTROは、単なる電気自動車ではなく、人と車の新しい関係性を提案するものです。内装には日本の伝統工芸の技法を取り入れ、ミニマリズムと機能性を追求しました。」

### スバル デザイン部 鈴木健一氏

「WILDERNESS EXPLORERのデザインプロセスでは、実際のアウトドア愛好家からのフィードバックを重視しました。特に注力したのは、悪路での走行性能と車内での快適性の両立です。」

## コンセプトから量産へ

これらのコンセプトカーは、そのまま量産されることはありませんが、デザイン要素や技術的なアイデアは今後の市販モデルに反映される予定です。マツダのVISION ELECTROは2027年に発売予定の電気自動車のデザイン方向性を示しており、スバルのWILDERNESS EXPLORERは次世代フォレスターに一部機能が採用される見込みです。

## まとめ

東京オートサロン2026で展示されるコンセプトカーは、各メーカーの未来への挑戦を象徴しています。会場では、これらのコンセプトカーを間近で見ることができるだけでなく、一部モデルでは実際に車内に乗り込むことも可能です。
    `,
    tags: ["コンセプトカー", "デザイン", "電気自動車", "マツダ", "スバル"],
    relatedIds: [1, 3, 6],
  },
  {
    id: 3,
    title: "トップデザイナーインタビュー",
    slug: "top-designer-interviews",
    image: "/placeholder.svg?height=800&width=1200",
    isTicketHolderOnly: true,
    publishedAt: "2025-12-15",
    author: "鈴木 大輔",
    excerpt: "自動車業界をリードするトップデザイナーたちに、未来のモビリティデザインについて語ってもらいました。",
    tags: ["デザイン", "インタビュー", "モビリティ", "未来"],
    relatedIds: [1, 2, 6],
  },
  {
    id: 4,
    title: "東京オートサロンの歴史",
    slug: "history-of-tokyo-auto-salon",
    image: "/placeholder.svg?height=800&width=1200",
    isTicketHolderOnly: false,
    publishedAt: "2025-11-20",
    author: "高橋 誠",
    excerpt:
      "東京オートサロンの誕生から現在までの歴史を振り返り、日本のカーカルチャーにどのような影響を与えてきたかを探ります。",
    content: `
# 東京オートサロンの歴史

![東京オートサロンの歴史](/placeholder.svg?height=600&width=1200)

## 誕生と発展

東京オートサロンは、1983年に「東京エキゾチックカーショー」として始まりました。当初は小規模なイベントでしたが、日本のカスタムカー文化の発展とともに成長し、1987年に現在の「東京オートサロン」という名称に変更されました。

### 初期の東京オートサロン（1983-1990）

最初の数年間は、主に輸入車のチューニングモデルが中心でした。会場も小さく、出展者数も限られていましたが、日本のモータースポーツファンやカスタムカー愛好家の間で徐々に注目を集めるようになりました。

![初期の東京オートサロン](/placeholder.svg?height=400&width=800)

### 成長期（1990-2000）

1990年代に入ると、日本車のチューニングブームが到来。特に、スカイラインGT-R、スープラ、NSXなどの日本のスポーツカーをベースにしたカスタムカーが多数出展されるようになりました。この時期に、現在も活躍する多くのチューニングショップが台頭しました。

### 国際化（2000-2010）

2000年代には、東京オートサロンは国際的なイベントへと成長。海外からの来場者や出展者も増加し、日本のカスタムカー文化が世界に発信されるようになりました。また、自動車メーカーも公式に参加するようになり、コンセプトカーやチューニングモデルを発表する場としても注目されるようになりました。

### 現代の東京オートサロン（2010-現在）

近年の東京オートサロンは、単なるカスタムカーショーを超えて、自動車産業の最新トレンドや技術を発信する総合的なモーターショーへと進化しています。電気自動車やハイブリッドカーのカスタムモデル、自動運転技術を取り入れたコンセプトカーなども登場し、時代の変化を反映しています。

## 東京オートサロンの影響

### 日本のカーカルチャーへの影響

東京オートサロンは、日本のカスタムカー文化の発展に大きく貢献してきました。多くのチューニングショップやパーツメーカーがこのイベントを通じて成長し、日本独自のカスタムスタイルが確立されました。

### 自動車産業への影響

当初はアフターマーケット中心のイベントでしたが、現在では自動車メーカーも積極的に参加し、市販車の開発にもその影響が見られます。特に、スポーツモデルやパフォーマンスパッケージの開発において、東京オートサロンで得られたフィードバックが活かされることも少なくありません。

### 国際的な影響

東京オートサロンは、日本のカーカルチャーを世界に発信する窓口となっています。SEMAショー（アメリカ）やエッセンモーターショー（ドイツ）などの国際的なカスタムカーイベントとも連携し、グローバルなカーカルチャーの発展に貢献しています。

## 東京オートサロン2026に向けて

東京オートサロン2026は、イベント誕生から43年目を迎える記念すべき開催となります。過去の歴史を振り返りながらも、未来のモビリティ社会を見据えた新しい取り組みが期待されています。特に、電動化やデジタル技術を活用した次世代カスタマイズの提案が注目されています。

## まとめ

東京オートサロンは、単なる展示会を超えて、日本のカーカルチャーを象徴するイベントへと成長してきました。その歴史は、日本の自動車産業の変遷とも深く結びついており、これからも自動車文化の発展に重要な役割を果たしていくことでしょう。
    `,
    tags: ["歴史", "カーカルチャー", "イベント", "チューニング"],
    relatedIds: [5, 6],
  },
  {
    id: 5,
    title: "TAS 2026ガイド",
    slug: "tas-2026-guide",
    image: "/placeholder.svg?height=800&width=1200",
    isTicketHolderOnly: false,
    publishedAt: "2025-11-25",
    author: "山本 直子",
    excerpt:
      "東京オートサロン2026を最大限に楽しむための完全ガイド。会場マップ、注目ブース、イベントスケジュールをご紹介します。",
    tags: ["ガイド", "会場案内", "スケジュール", "チケット情報"],
    relatedIds: [1, 4, 6],
  },
  {
    id: 6,
    title: "モータースポーツ最新トレンド",
    slug: "motorsport-latest-trends",
    image: "/placeholder.svg?height=800&width=1200",
    isTicketHolderOnly: false,
    publishedAt: "2025-12-05",
    author: "中村 健太郎",
    excerpt: "2026年のモータースポーツシーンを席巻する最新トレンドを分析。新技術や注目レースについて詳しく解説します。",
    tags: ["モータースポーツ", "レース", "技術", "トレンド"],
    relatedIds: [1, 3, 5],
  },
]

export function getMagazine(slug: string): Magazine | undefined {
  return magazines.find((magazine) => magazine.slug === slug)
}

export function getRelatedMagazines(magazine: Magazine): Magazine[] {
  if (!magazine.relatedIds) return []
  return magazines.filter((m) => magazine.relatedIds?.includes(m.id))
}

export function getNextMagazine(currentId: number): Magazine | undefined {
  const currentIndex = magazines.findIndex((m) => m.id === currentId)
  if (currentIndex === -1 || currentIndex === magazines.length - 1) return undefined
  return magazines[currentIndex + 1]
}

export function getPreviousMagazine(currentId: number): Magazine | undefined {
  const currentIndex = magazines.findIndex((m) => m.id === currentId)
  if (currentIndex <= 0) return undefined
  return magazines[currentIndex - 1]
}
