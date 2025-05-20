import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CheckCircle, Gift, Film, Newspaper, Bell, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

// SAN-EI IDログインURL
const loginUrl =
  "https://id.san-ei-corp.co.jp/users/login?dept_code=oas&redirect=https%3A%2F%2Fwww.tokyoautosalon.jp%2Fauth%2Fret%2F682abd3d7bcd67.84490433?token={token}"

export default function SaneiBenefitsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-foreground mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          ホームに戻る
        </Link>

        {/* ヘッダーセクション */}
        <div className="gradient-card rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-red-600 to-red-500 h-6 w-1.5 rounded-full"></div>
                <h1 className="text-3xl font-bold tracking-tight">三栄ID会員特典</h1>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                三栄IDに登録して、東京オートサロン2026の特別な体験をお楽しみください。
                会員限定のプレミアムコンテンツや特典が盛りだくさん！
              </p>
              <Link href={loginUrl} target="_blank">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  今すぐ無料登録
                </Button>
              </Link>
            </div>
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="三栄ID会員特典"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 特典一覧 */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-10">会員特典一覧</h2>

          {/* 特典1: 限定マガジン */}
          <div className="gradient-section rounded-xl overflow-hidden border">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-500 dark:bg-blue-400/20 dark:text-blue-400">
                      <Newspaper className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">限定マガジンアクセス</h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    チケット所有者限定の特別なマガジンコンテンツにアクセスできます。業界の最新情報から裏話まで、
                    ここでしか読めない特別記事をお楽しみいただけます。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>TAS 2026プレビュー：限定モデルの先行情報</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>舞台裏：コンセプトカー開発秘話</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>トップデザイナーへの独占インタビュー</span>
                    </li>
                  </ul>
                  <Link href="/magazine">
                    <Button variant="outline" className="border-zinc-300 dark:border-zinc-700">
                      マガジンを見る
                    </Button>
                  </Link>
                </div>
                <div className="relative aspect-video md:w-1/3 rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=600&width=800" alt="限定マガジン" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs rounded">会員限定</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 特典2: 千代勝正ブログ */}
          <div className="gradient-section rounded-xl overflow-hidden border">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative aspect-video md:w-1/3 rounded-lg overflow-hidden order-2 md:order-1">
                  <Image src="/images/chiyo-banner.png" alt="千代勝正ブログ" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs rounded">会員限定</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-yellow-500/20 text-yellow-500 dark:bg-yellow-400/20 dark:text-yellow-400">
                      <Newspaper className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">千代勝正ブログ完全アクセス</h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    人気レーシングドライバー千代勝正氏の独占ブログへの完全アクセス権。レース裏話や日常、
                    テスト走行の貴重な情報など、ファン必見のコンテンツです。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>最新レース結果とドライバー視点の分析</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>セパンでのテスト走行など裏側情報</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>新型マシン開発秘話と独占写真</span>
                    </li>
                  </ul>
                  <Link href="/#magazine">
                    <Button variant="outline" className="border-zinc-300 dark:border-zinc-700">
                      ブログを見る
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 特典3: 限定フォトプレゼント */}
          <div className="gradient-section rounded-xl overflow-hidden border">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-purple-500/20 text-purple-500 dark:bg-purple-400/20 dark:text-purple-400">
                      <Gift className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">限定フォトプレゼント</h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    会員限定で特別な高解像度写真をダウンロードできます。レースクイーン、コンセプトカー、
                    新型車両など様々な写真を期間限定でプレゼント。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>高解像度写真の無料ダウンロード</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>毎月更新される新しいコンテンツ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>個人使用可能な写真素材</span>
                    </li>
                  </ul>
                  <Link href="/photo-present">
                    <Button variant="outline" className="border-zinc-300 dark:border-zinc-700">
                      フォトプレゼントを見る
                    </Button>
                  </Link>
                </div>
                <div className="relative aspect-video md:w-1/3 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/messageImage_1747633317776.jpg-RFL8LppaP1mG8fzWPrPqcj2SJBDiRF.jpeg"
                    alt="限定フォトプレゼント"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs rounded">会員限定</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 特典4: 限定動画コンテンツ */}
          <div className="gradient-section rounded-xl overflow-hidden border">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative aspect-video md:w-1/3 rounded-lg overflow-hidden order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="限定動画コンテンツ"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center">
                    <div className="p-4 flex items-center justify-center w-full">
                      <span className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-red-500/20 text-red-500 dark:bg-red-400/20 dark:text-red-400">
                      <Film className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">限定動画コンテンツ</h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    会員限定の動画コンテンツにアクセスできます。会場の様子から、各ブースの詳細なツアー、
                    ステージイベントのフル映像など、オートサロンの魅力を余すところなくお届けします。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>会場の詳細ツアー動画</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>ステージイベント完全版</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>出展者インタビュー特別版</span>
                    </li>
                  </ul>
                  <Link href="#">
                    <Button variant="outline" className="border-zinc-300 dark:border-zinc-700">
                      動画を見る (準備中)
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 特典5: 割引特典 */}
          <div className="gradient-section rounded-xl overflow-hidden border">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-green-500/20 text-green-500 dark:bg-green-400/20 dark:text-green-400">
                      <Tag className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">会員限定割引</h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    三栄IDをお持ちの方には、東京オートサロン関連商品や次回のチケットを特別価格でご提供。
                    さらに会員限定セールや先行購入も実施しています。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>公式グッズ10%OFF</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>次回チケットの先行割引販売</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>会員限定タイムセール</span>
                    </li>
                  </ul>
                  <Link href="/shop">
                    <Button variant="outline" className="border-zinc-300 dark:border-zinc-700">
                      ショップを見る
                    </Button>
                  </Link>
                </div>
                <div className="relative aspect-video md:w-1/3 rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=600&width=800" alt="会員限定割引" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center">
                    <div className="p-4 w-full">
                      <div className="bg-green-600 text-white text-center py-2 px-4 rounded-full transform -rotate-12">
                        <span className="text-2xl font-bold">10% OFF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 特典6: 優先情報配信 */}
          <div className="gradient-section rounded-xl overflow-hidden border">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative aspect-video md:w-1/3 rounded-lg overflow-hidden order-2 md:order-1">
                  <Image src="/placeholder.svg?height=600&width=800" alt="優先情報配信" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs rounded">優先配信</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-500 dark:bg-blue-400/20 dark:text-blue-400">
                      <Bell className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">優先情報配信</h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    会員の方には、東京オートサロンに関する最新情報をいち早くお届けします。
                    出展者情報、チケット販売開始、特別イベントなど、重要な情報を優先的にメールでお知らせします。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>最新情報の優先メール配信</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>チケット販売開始の事前通知</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>特別イベントの案内</span>
                    </li>
                  </ul>
                  <Link href="#news">
                    <Button variant="outline" className="border-zinc-300 dark:border-zinc-700">
                      最新情報を見る
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 登録ステップ */}
        <div className="gradient-card rounded-xl p-8 mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8">三栄IDの登録方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-medium mb-2">情報入力</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                必要な情報を入力して無料アカウントを作成します。メールアドレスと基本情報のみで完了します。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-medium mb-2">メール確認</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                登録したメールアドレスに確認メールが送信されます。リンクをクリックして登録を完了してください。
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-medium mb-2">特典を楽しむ</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                登録完了後、すぐに会員特典をお楽しみいただけます。チケット購入で更に多くの特典が解放されます。
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold tracking-tight mb-4">今すぐ無料で三栄IDに登録しよう！</h2>
          <p className="text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
            登録は完全無料。わずか2分で完了し、すぐに特典をお楽しみいただけます。
            さらにチケットを購入すれば、より多くの限定コンテンツにアクセスできるようになります。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={loginUrl} target="_blank">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
                今すぐ無料登録
              </Button>
            </Link>
            <Link href="/#magazine">
              <Button variant="outline" size="lg" className="border-zinc-300 dark:border-zinc-700 w-full sm:w-auto">
                限定コンテンツを見る
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
