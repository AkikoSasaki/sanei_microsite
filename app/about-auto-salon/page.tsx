import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

export default function AboutAutoSalonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-foreground mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          ホームに戻る
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-red-600 to-red-500 h-6 w-1.5 rounded-full"></div>
          <h1 className="text-3xl font-bold tracking-tight">What's AUTO SALON?</h1>
        </div>

        <div className="relative aspect-[21/9] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8phUxohvW2abjzkjFV4HEVqV1WdrUf.png"
            alt="東京オートサロンの様子"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>東京オートサロンとは</h2>
          <p>
            東京オートサロンは、日本最大級のカスタムカーイベントです。1983年に「東京エキゾチックカーショー」として始まり、現在では世界中から注目を集める自動車文化の祭典へと成長しました。
          </p>

          <p>
            毎年1月に幕張メッセ（千葉県）で開催され、カスタムカー、チューニングパーツ、関連グッズなどが展示されます。自動車メーカーやアフターパーツメーカー、チューニングショップなど、多数の企業が最新の製品やコンセプトカーを発表する場としても重要な役割を果たしています。
          </p>

          <h2>オンラインオートサロンの魅力</h2>
          <p>
            オンラインオートサロンは、実際の東京オートサロンの魅力をデジタル空間で体験できるプラットフォームです。会場に足を運べない方や、イベント後も情報をチェックしたい方に向けて、様々なコンテンツを提供しています。
          </p>

          <ul>
            <li>限定写真や動画コンテンツ</li>
            <li>出展車両の詳細情報</li>
            <li>ステージイベントのアーカイブ</li>
            <li>出展者へのインタビュー</li>
            <li>オンライン限定のプレゼント企画</li>
          </ul>

          <h2>三栄IDでさらに充実したコンテンツを</h2>
          <p>
            三栄IDに登録することで、オンラインオートサロンのすべての機能を利用できるようになります。チケット購入者限定のプレミアムコンテンツや、メールでのイベント最新情報など、カーファンにとって見逃せない特典が満載です。
          </p>

          <p>
            東京オートサロン2026では、さらに充実したオンラインコンテンツを予定しています。ぜひ三栄IDに登録して、カーカルチャーの最先端をお楽しみください。
          </p>
        </div>
      </div>
    </div>
  )
}
