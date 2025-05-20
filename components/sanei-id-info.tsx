import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// SAN-EI IDログインURL
const loginUrl =
  "https://id.san-ei-corp.co.jp/users/login?dept_code=oas&redirect=https%3A%2F%2Fwww.tokyoautosalon.jp%2Fauth%2Fret%2F682abd3d7bcd67.84490433?token={token}"

export default function SaneiIdInfo() {
  return (
    <div className="space-y-6">
      <div className="bg-purple-400 dark:bg-purple-600 rounded-lg overflow-hidden">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <span className="text-white font-script text-xl">Online</span>
              <div className="text-white font-bold text-sm">AUTO SALON</div>
            </div>
            <h3 className="text-white font-medium text-lg">ユーザー登録はこちらから</h3>
          </div>
          <Link href={loginUrl} target="_blank">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/20 text-white hover:bg-white/30 h-8 w-8"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-1 text-white">
              <CheckCircle className="h-5 w-5" />
            </div>
          </div>
          <p className="text-foreground">登録無料（三栄ID取得が必要です）</p>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-1 text-white">
              <CheckCircle className="h-5 w-5" />
            </div>
          </div>
          <p className="text-foreground">公式発表と同じタイミングでメール配信なのでいち早く情報が入ります！</p>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-1 text-white">
              <CheckCircle className="h-5 w-5" />
            </div>
          </div>
          <p className="text-foreground">ユーザー登録者だけの特別なサービスが受けられます！</p>
        </div>
      </div>

      <div className="gradient-card rounded-lg p-6">
        <h4 className="font-bold mb-3">三栄IDとは</h4>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
          株式会社三栄が提供するサービスを便利にお使いいただくための共通IDです。情報配信やプレゼント応募、チケット購入といった様々なサービスを1つのIDでご利用になれます。登録は無料です。
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          東京オートサロンの入場チケットを購入された方は、ご登録済みの三栄IDを利用してオンラインオートサロンにログインすることができます。
        </p>
        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
          <Link
            href="/sanei-benefits"
            className="text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400 text-sm font-medium inline-flex items-center"
          >
            会員特典の詳細を見る
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* What's AUTO SALON? バナー */}
      <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
        <Link href="/about-auto-salon" className="block">
          <div className="relative">
            <div className="grid grid-cols-2 grid-rows-2 h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8phUxohvW2abjzkjFV4HEVqV1WdrUf.png"
                alt="東京オートサロンの様子"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-4 w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">What's AUTO SALON?</h3>
                  <div className="flex items-center text-white text-sm">
                    <span>詳しく見る</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </div>
                <p className="text-white/80 text-sm mt-1">東京オートサロンとは、日本最大級のカスタムカーイベント</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link href={loginUrl} target="_blank">
          <Button className="bg-red-600 hover:bg-red-700 text-white">三栄IDを登録する</Button>
        </Link>
      </div>
    </div>
  )
}
