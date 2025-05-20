"use client"

import { useState } from "react"
import { Facebook, Copy, Share2, X, CheckCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ShareButtonProps {
  title: string
  url?: string
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export default function ShareButton({ title, url, className, variant = "outline", size = "icon" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  // 共有するURLを取得（指定がなければ現在のURL）
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")

  // Twitterで共有
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title,
    )}&url=${encodeURIComponent(shareUrl)}`
    window.open(twitterUrl, "_blank")
  }

  // Facebookで共有
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    window.open(facebookUrl, "_blank")
  }

  // LINEで共有
  const shareOnLine = () => {
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`
    window.open(lineUrl, "_blank")
  }

  // URLをコピー
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("クリップボードへのコピーに失敗しました:", err)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <Share2 className="h-4 w-4" />
          <span className="sr-only">共有</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
        <DropdownMenuItem onClick={shareOnTwitter} className="flex items-center gap-2 cursor-pointer hover:bg-zinc-800">
          <X className="h-4 w-4" />
          <span>X (Twitter)で共有</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={shareOnFacebook}
          className="flex items-center gap-2 cursor-pointer hover:bg-zinc-800"
        >
          <Facebook className="h-4 w-4" />
          <span>Facebookで共有</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnLine} className="flex items-center gap-2 cursor-pointer hover:bg-zinc-800">
          <div className="h-4 w-4 flex items-center justify-center text-[10px] font-bold bg-[#06C755] text-white rounded-sm">
            L
          </div>
          <span>LINEで共有</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={copyToClipboard}
          className="flex items-center gap-2 cursor-pointer hover:bg-zinc-800"
        >
          {copied ? <CheckCheck className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          <span>{copied ? "コピーしました" : "URLをコピー"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
