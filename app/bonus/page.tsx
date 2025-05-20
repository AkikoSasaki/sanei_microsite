"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Download, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BonusPage() {
  const [code, setCode] = useState("")
  const [isVerified, setIsVerified] = useState(false)

  const handleVerify = () => {
    // 実際のアプリでは、APIでコードを検証します
    if (code.length === 16) {
      setIsVerified(true)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          ホームに戻る
        </Link>

        <h1 className="text-3xl font-bold tracking-tight">特典を受け取る</h1>
        <p className="mt-2 text-zinc-400">16桁のコードを入力して、限定コンテンツや商品クーポンをゲット。</p>

        {!isVerified ? (
          <div className="mt-8 bg-zinc-900 rounded-xl p-6 border border-zinc-800">
            <div className="grid gap-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="code">16桁のコードを入力</Label>
                <Input
                  id="code"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="bg-zinc-950 border-zinc-800 text-white"
                />
              </div>
              <Button
                onClick={handleVerify}
                disabled={code.length !== 16}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                コードを確認
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <Tabs defaultValue="wallpaper">
              <TabsList className="bg-zinc-900 border border-zinc-800">
                <TabsTrigger value="wallpaper">壁紙</TabsTrigger>
                <TabsTrigger value="video">イベント動画</TabsTrigger>
                <TabsTrigger value="coupon">商品クーポン</TabsTrigger>
              </TabsList>

              <TabsContent value="wallpaper" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group">
                      <div className="relative aspect-[9/16]">
                        <Image
                          src={`/placeholder.svg?height=800&width=450`}
                          alt={`壁紙 ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">TAS 2026 壁紙 {i + 1}</h3>
                        <Button className="w-full mt-3 bg-zinc-800 hover:bg-zinc-700">
                          <Download className="h-4 w-4 mr-2" />
                          ダウンロード
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="video" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group">
                      <div className="relative aspect-video">
                        <Image
                          src={`/placeholder.svg?height=450&width=800`}
                          alt={`動画 ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button size="icon" className="rounded-full bg-red-600 hover:bg-red-700 h-12 w-12">
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">TAS 2026 限定動画 {i + 1}</h3>
                        <p className="text-sm text-zinc-400 mt-1">再生時間: 3:45</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="coupon" className="mt-6">
                <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold tracking-tight">20%割引クーポン</h2>
                      <p className="text-zinc-400">TAS 2026ショップでの全ての購入に使用できます。</p>
                      <div className="bg-zinc-950 border border-zinc-800 rounded p-3 font-mono text-lg mt-4">
                        TAS2026-SPECIAL20
                      </div>
                    </div>
                    <Link href="/shop">
                      <Button className="bg-red-600 hover:bg-red-700 text-white">ショップへ</Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  )
}
