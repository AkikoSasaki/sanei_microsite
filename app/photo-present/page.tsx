"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Download, Check, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// 写真データ
const photos = [
  {
    id: 1,
    title: "TAS 2026 レースクイーン",
    description: "東京オートサロン2026公式レースクイーン",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/messageImage_1747633317776.jpg-RFL8LppaP1mG8fzWPrPqcj2SJBDiRF.jpeg",
    alt: "東京オートサロン2026公式レースクイーン",
  },
  {
    id: 2,
    title: "TAS 2026 コンセプトカー",
    description: "東京オートサロン2026出展コンセプトカー",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/messageImage_1747632899876.jpg-C7az9JI5x9KTPbXotS9j0hBPr6Jq7p.jpeg",
    alt: "東京オートサロン2026出展コンセプトカー",
  },
  {
    id: 3,
    title: "TAS 2026 トヨタ新型車",
    description: "東京オートサロン2026トヨタ出展車両",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/messageImage_1747632876663.jpg-cIYzbxZRLBAo0I2vR3LMIWDh2jVxzn.jpeg",
    alt: "東京オートサロン2026トヨタ出展車両",
  },
]

export default function PhotoPresentPage() {
  const [code, setCode] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  // コード検証
  const handleVerify = () => {
    // 実際のアプリでは、APIでコードを検証します
    // ここでは簡易的に16桁であれば有効とします
    if (code.replace(/[^0-9a-zA-Z]/g, "").length === 16) {
      setIsVerified(true)
      toast({
        title: "コード認証成功",
        description: "写真をお選びください。",
        variant: "default",
      })
    } else {
      toast({
        title: "コード認証エラー",
        description: "16桁の有効なコードを入力してください。",
        variant: "destructive",
      })
    }
  }

  // ダウンロード処理
  const handleDownload = async () => {
    if (selectedPhoto === null) {
      toast({
        title: "エラー",
        description: "ダウンロードする写真を選択してください。",
        variant: "destructive",
      })
      return
    }

    setIsDownloading(true)

    try {
      const photo = photos.find((p) => p.id === selectedPhoto)
      if (!photo) throw new Error("写真が見つかりません")

      // 画像をフェッチ
      const response = await fetch(photo.image)
      const blob = await response.blob()

      // ダウンロードリンクを作成
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `tas2026_photo_${selectedPhoto}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast({
        title: "ダウンロード完了",
        description: "写真のダウンロードが完了しました。",
        variant: "default",
      })
    } catch (error) {
      console.error("ダウンロードエラー:", error)
      toast({
        title: "ダウンロードエラー",
        description: "写真のダウンロード中にエラーが発生しました。",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  // コードの形式を整える（4桁ごとにハイフンを挿入）
  const formatCode = (input: string) => {
    const cleaned = input.replace(/[^0-9a-zA-Z]/g, "").toUpperCase()
    const chunks = []

    for (let i = 0; i < cleaned.length; i += 4) {
      chunks.push(cleaned.slice(i, i + 4))
    }

    return chunks.join("-")
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCode(e.target.value)
    setCode(formatted)
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-foreground mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          ホームに戻る
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-red-600 to-red-500 h-6 w-1.5 rounded-full"></div>
          <h1 className="text-3xl font-bold tracking-tight">会員限定フォトプレゼント</h1>
        </div>

        <p className="mt-2 text-zinc-400 dark:text-zinc-400 mb-8">
          16桁のコードを入力して、東京オートサロン2026の限定写真をダウンロードしよう！
        </p>

        {!isVerified ? (
          <div className="gradient-card rounded-xl p-6 border">
            <div className="grid gap-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="code">16桁のコードを入力</Label>
                <Input
                  id="code"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  value={code}
                  onChange={handleCodeChange}
                  maxLength={19} // 16桁 + 3つのハイフン
                  className="bg-background border-input text-foreground"
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-400">※ハイフン（-）は自動的に挿入されます</p>
              </div>
              <Button
                onClick={handleVerify}
                disabled={code.replace(/[^0-9a-zA-Z]/g, "").length !== 16}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                コードを確認
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="gradient-card rounded-xl p-6 border">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                コード認証完了
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4">ダウンロードする写真を1枚お選びください。</p>

              <RadioGroup
                value={selectedPhoto?.toString()}
                onValueChange={(value) => setSelectedPhoto(Number.parseInt(value))}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {photos.map((photo) => (
                    <div key={photo.id} className="relative">
                      <RadioGroupItem value={photo.id.toString()} id={`photo-${photo.id}`} className="sr-only" />
                      <Label
                        htmlFor={`photo-${photo.id}`}
                        className={`block cursor-pointer overflow-hidden rounded-lg border-2 ${
                          selectedPhoto === photo.id
                            ? "border-red-500 ring-2 ring-red-500"
                            : "border-transparent hover:border-zinc-300 dark:hover:border-zinc-700"
                        } transition-all`}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={photo.image || "/placeholder.svg"}
                            alt={photo.alt}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-sm">{photo.title}</h3>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{photo.description}</p>
                        </div>
                        {selectedPhoto === photo.id && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              <div className="mt-6 flex justify-center">
                <Button
                  onClick={handleDownload}
                  disabled={selectedPhoto === null || isDownloading}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  {isDownloading ? (
                    <>ダウンロード中...</>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      選択した写真をダウンロード
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="gradient-section rounded-lg p-4 text-sm">
              <h3 className="font-medium flex items-center gap-2 mb-2">
                <Lock className="h-4 w-4 text-zinc-500" />
                ご利用上の注意
              </h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-500 dark:text-zinc-400">
                <li>ダウンロードした写真は個人利用のみ許可されています。</li>
                <li>商用利用、再配布は禁止されています。</li>
                <li>著作権は東京オートサロン実行委員会に帰属します。</li>
                <li>コードは1回のみ有効です。</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  )
}
