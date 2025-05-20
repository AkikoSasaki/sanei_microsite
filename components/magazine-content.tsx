"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Calendar, User, Tag } from "lucide-react"
import type { Magazine } from "@/lib/magazines"
import ShareButton from "@/components/share-button"
import CommentSection from "@/components/comment-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// SAN-EI IDログインURL
const loginUrl =
  "https://id.san-ei-corp.co.jp/users/login?dept_code=oas&redirect=https%3A%2F%2Fwww.tokyoautosalon.jp%2Fauth%2Fret%2F682abd3d7bcd67.84490433?token={token}"

interface MagazineContentProps {
  magazine: Magazine
  relatedMagazines: Magazine[]
  nextMagazine?: Magazine
  previousMagazine?: Magazine
  isLoggedIn?: boolean
  isTicketHolder?: boolean
}

export default function MagazineContent({
  magazine,
  relatedMagazines,
  nextMagazine,
  previousMagazine,
  isLoggedIn = false,
  isTicketHolder = false,
}: MagazineContentProps) {
  const [formattedDate, setFormattedDate] = useState("")

  useEffect(() => {
    // 日付をフォーマット
    const date = new Date(magazine.publishedAt)
    setFormattedDate(
      new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date),
    )
  }, [magazine.publishedAt])

  // マークダウンコンテンツをHTMLに変換する簡易関数
  const renderMarkdown = (content: string) => {
    // 見出し
    const html = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
      // 段落
      .replace(/^(?!<h[1-6]|<ul|<ol|<li|<p|<img|<div)(.+$)/gm, '<p class="my-4">$1</p>')
      // 画像
      .replace(/!\[(.*?)\]$$(.*?)$$/g, '<div class="my-6"><img src="$2" alt="$1" class="w-full rounded-lg" /></div>')
      // 改行
      .replace(/\n\n/g, '<div class="my-4"></div>')

    return html
  }

  // チケット所有者限定コンテンツのアクセス制限
  const showContent = !magazine.isTicketHolderOnly || (isLoggedIn && isTicketHolder)

  return (
    <div className="max-w-4xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-8">
        <div className="relative aspect-[16/9] mb-6">
          <Image
            src={magazine.image || "/placeholder.svg"}
            alt={magazine.title}
            fill
            className="object-cover rounded-xl"
            priority
          />
          {magazine.isTicketHolderOnly && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              チケット所有者限定
            </div>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold">{magazine.title}</h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-zinc-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{magazine.author}</span>
          </div>
          <div className="flex-grow"></div>
          <ShareButton
            title={magazine.title}
            variant="outline"
            className="border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {magazine.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-zinc-900 hover:bg-zinc-800 border-zinc-800">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* コンテンツ */}
      {showContent ? (
        magazine.content ? (
          <div
            className="prose prose-invert prose-zinc max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(magazine.content) }}
          />
        ) : (
          <div className="bg-zinc-900 rounded-xl p-8 text-center border border-zinc-800">
            <h2 className="text-xl font-medium mb-2">コンテンツ準備中</h2>
            <p className="text-zinc-400 mb-8">このマガジンの詳細コンテンツは現在準備中です。</p>
          </div>
        )
      ) : (
        <div className="bg-zinc-900 rounded-xl p-8 text-center border border-zinc-800">
          <h2 className="text-xl font-medium mb-2">チケット所有者限定コンテンツ</h2>
          <p className="text-zinc-400 mb-8">
            このコンテンツはチケット所有者のみがアクセスできます。SAN-EI IDでログインし、チケットを購入してください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href={loginUrl} target="_blank">
              <Button variant="outline" className="border-zinc-700 w-full sm:w-auto">
                ログイン
              </Button>
            </Link>
            <Link href="https://ticket.san-ei-corp.co.jp/" target="_blank">
              <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">チケット購入</Button>
            </Link>
          </div>
        </div>
      )}

      {/* コメントセクション */}
      <CommentSection magazineId={magazine.id} isLoggedIn={isLoggedIn} />

      {/* ナビゲーション */}
      <div className="flex justify-between mt-12 pt-8 border-t border-zinc-800">
        {previousMagazine ? (
          <Link href={`/magazine/${previousMagazine.slug}`}>
            <Button variant="outline" className="border-zinc-800 hover:bg-zinc-800">
              <ChevronLeft className="h-4 w-4 mr-2" />
              前の記事
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
        {nextMagazine ? (
          <Link href={`/magazine/${nextMagazine.slug}`}>
            <Button variant="outline" className="border-zinc-800 hover:bg-zinc-800">
              次の記事
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      {/* 関連マガジン */}
      {relatedMagazines.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">関連マガジン</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedMagazines.map((relatedMagazine) => (
              <Link
                key={relatedMagazine.id}
                href={`/magazine/${relatedMagazine.slug}`}
                className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group hover:border-zinc-700 transition-colors"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={relatedMagazine.image || "/placeholder.svg"}
                    alt={relatedMagazine.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {relatedMagazine.isTicketHolderOnly && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <span>限定</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-2 group-hover:text-red-500 transition-colors">
                    {relatedMagazine.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 line-clamp-2">{relatedMagazine.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
