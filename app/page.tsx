import MagazineLinksSection from "@/components/MagazineLinksSection"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ShoppingCart, Gift, User, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroBanner from "@/components/hero-banner"
import EventInfoCard from "@/components/event-info-card"
import MagazineSection from "@/components/magazine-section"
import LanguageToggle from "@/components/language-toggle"
import ShareButton from "@/components/share-button"
import NewsSection from "@/components/news-section"
import DailyCarGame from "@/components/daily-car-game"
import PartnerBanners from "@/components/partner-banners"
import ChiyoBlogSection from "@/components/chiyo-blog-section"
import { ThemeToggle } from "@/components/theme-toggle"
import SaneiIdInfo from "@/components/sanei-id-info"

// SAN-EI IDログインURL
const loginUrl =
  "https://id.san-ei-corp.co.jp/users/login?dept_code=oas&redirect=https%3A%2F%2Fwww.tokyoautosalon.jp%2Fauth%2Fret%2F682abd3d7bcd67.84490433?token={token}"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 gradient-header border-b">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden border-zinc-700 dark:text-white text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">メニュー</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="SAN-EIロゴ"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-6 ml-8">
            <Link href="#event" className="text-sm font-medium hover:text-red-500 transition-colors">
              イベント
            </Link>
            <Link href="#news" className="text-sm font-medium hover:text-red-500 transition-colors">
              最新情報
            </Link>
            <Link href="#game" className="text-sm font-medium hover:text-red-500 transition-colors">
              デイリーゲーム
            </Link>
            <Link href="#magazine" className="text-sm font-medium hover:text-red-500 transition-colors">
              マガジン
            </Link>
            <Link href="#shop" className="text-sm font-medium hover:text-red-500 transition-colors">
              ショップ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
          <Link href="https://ticket.san-ei-corp.co.jp/" target="_blank">
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              チケット購入
            </Button>
          </Link>
          <div className="flex items-center gap-2 ml-2">
            <Button
              variant="ghost"
              size="icon"
              className="dark:text-white text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">カート</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="dark:text-white text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <Gift className="h-5 w-5" />
              <span className="sr-only">ギフト</span>
            </Button>
            <Link href={loginUrl} target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="dark:text-white text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">プロフィール</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main>
        {/* ヒーローバナー */}
        <section className="w-full">
          <HeroBanner />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
          {/* イベント情報カード */}
          <section id="event" className="pt-4">
            <EventInfoCard />
          </section>

          {/* 以下は変更なし */}
          {/* パートナーバナー */}
          <section id="partners" className="pt-8">
            <PartnerBanners />
          </section>

          {/* 最新情報セクション */}
          <section id="news" className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">最新情報</h2>
              <Button variant="link" className="text-red-500 hover:text-red-400">
                すべて見る <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <NewsSection />
          </section>

          {/* デイリーゲームセクション */}
          <section id="game" className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">デイリーゲーム</h2>
              <div className="flex items-center gap-2">
                <ShareButton
                  title="SAN-EI 東京オートサロン 2026 デイリーゲーム"
                  variant="ghost"
                  size="sm"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-800 dark:hover:bg-zinc-800"
                />
              </div>
            </div>
            <DailyCarGame />
          </section>

          {/* マガジンセクション */}
          <section id="magazine" className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">マガジン</h2>
              <div className="flex items-center gap-2">
                <ShareButton
                  title="SAN-EI 東京オートサロン 2026 マガジン"
                  variant="ghost"
                  size="sm"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-800 dark:hover:bg-zinc-800"
                />
                <Button variant="link" className="text-red-500 hover:text-red-400">
                  すべて見る <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
            <MagazineSection />
            <MagazineLinksSection />

            {/* 千代勝正ブログセクション */}
            <div className="mt-12">
              <ChiyoBlogSection />
            </div>
          </section>

          {/* フォトプレゼントセクション */}
          <section id="photo-present" className="pt-8">
            <div className="gradient-card rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-red-600 to-red-500 h-6 w-1.5 rounded-full"></div>
                      <h2 className="text-2xl font-bold tracking-tight">会員限定フォトプレゼント</h2>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      16桁のコードを入力して、東京オートサロン2026の限定写真をダウンロードしよう！
                    </p>
                  </div>
                  <Link href="/photo-present">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                      <Gift className="h-5 w-5 mr-2" />
                      写真をゲット
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 三栄ID情報セクション */}
          <section id="sanei-id" className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">SAN-EI ID会員登録のご案内</h2>
              <Link href="/sanei-benefits" className="text-red-500 hover:text-red-400 inline-flex items-center">
                特典詳細を見る <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="gradient-card rounded-xl p-6">
              <SaneiIdInfo />
            </div>
          </section>

          {/* ショップセクション */}
          <section id="shop" className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">ショップ</h2>
              <div className="flex items-center gap-2">
                <ShareButton
                  title="SAN-EI 東京オートサロン 2026 ショップ"
                  variant="ghost"
                  size="sm"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-800 dark:hover:bg-zinc-800"
                />
                <Button variant="link" className="text-red-500 hover:text-red-400">
                  すべて見る <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* ショップアイテム */}
              <div className="gradient-card rounded-lg overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="商品"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">新着</div>
                  <div className="absolute top-2 left-2">
                    <ShareButton
                      title="TAS 2026 公式Tシャツ"
                      url="/shop/official-tshirt"
                      variant="outline"
                      className="bg-black/50 border-zinc-700 text-white hover:bg-black/70 dark:bg-black/50 dark:border-zinc-700 dark:text-white dark:hover:bg-black/70"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">TAS 2026 公式Tシャツ</h3>
                  <p className="text-sm text-zinc-400 dark:text-zinc-400 mt-1">SAN-EI</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold">¥4,500</span>
                    <Button size="sm" className="bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                      カートに追加
                    </Button>
                  </div>
                </div>
              </div>

              {/* その他のショップアイテム */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="gradient-card rounded-lg overflow-hidden group">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="商品"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <ShareButton
                        title={`TAS 2026 商品 ${i + 2}`}
                        url={`/shop/product-${i + 2}`}
                        variant="outline"
                        className="bg-black/50 border-zinc-700 text-white hover:bg-black/70 dark:bg-black/50 dark:border-zinc-700 dark:text-white dark:hover:bg-black/70"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">TAS 2026 商品 {i + 2}</h3>
                    <p className="text-sm text-zinc-400 dark:text-zinc-400 mt-1">SAN-EI</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-bold">¥{3500 + i * 500}</span>
                      <Button
                        size="sm"
                        className="bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                      >
                        カートに追加
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* フッター */}
      <footer className="gradient-footer border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="SAN-EIロゴ"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">東京オートサロン2026公式マイクロサイト</p>
              <div className="flex items-center gap-2 mt-4">
                <ShareButton
                  title="SAN-EI 東京オートサロン 2026"
                  variant="outline"
                  className="border-zinc-300 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800"
                />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">クイックリンク</h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link href="#" className="hover:text-zinc-900 dark:hover:text-white">
                    イベント情報
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-900 dark:hover:text-white">
                    マガジン
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-zinc-900 dark:hover:text-white">
                    ショップ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">お問い合わせ</h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>メール: info@san-ei-corp.co.jp</li>
                <li>電話: 03-XXXX-XXXX</li>
                <li>住所: 東京都</li>
              </ul>
            </div>
          </div>
          <div className="border-t dark:border-zinc-900 border-zinc-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-500">Copyright © SAN-EI CORPORATION Co.,Ltd. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
