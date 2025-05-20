"use client"
import Image from "next/image"
import Link from "next/link"
import { LockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShareButton from "@/components/share-button"
import { magazines } from "@/lib/magazines"
import LimitedContentAccess from "@/components/limited-content-access"

// これは認証システムから取得する情報
const isLoggedIn = false
const isTicketHolder = false

export default function MagazineSection() {
  // ユーザーステータスに基づいてマガジンをフィルタリング
  const visibleMagazines = isLoggedIn && isTicketHolder ? magazines : magazines.filter((mag) => !mag.isTicketHolderOnly)

  // 最初の行（3アイテム）と2行目（3アイテム）に分ける
  const firstRow = magazines.slice(0, 3)
  const secondRow = magazines.slice(3, 6)

  // ベースURLを取得（クライアントサイドでのみ実行）
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""

  return (
    <div className="space-y-8">
      {/* 最初の行 - チケット所有者限定 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-zinc-300 flex items-center">
          <LockIcon className="h-4 w-4 mr-2 text-red-500" />
          チケット所有者限定
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstRow.map((magazine) => (
            <div key={magazine.id} className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group">
              <Link href={`/magazine/${magazine.slug}`} className="block relative aspect-[4/3]">
                <Image
                  src={magazine.image || "/placeholder.svg"}
                  alt={magazine.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <LockIcon className="h-3 w-3" />
                  <span>限定</span>
                </div>
                <div className="absolute top-2 left-2">
                  <ShareButton
                    title={magazine.title}
                    url={`${baseUrl}/magazine/${magazine.slug}`}
                    variant="outline"
                    className="bg-black/50 border-zinc-700 text-white hover:bg-black/70"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/magazine/${magazine.slug}`}>
                  <h3 className="font-medium line-clamp-2 h-12 group-hover:text-red-500 transition-colors">
                    {magazine.title}
                  </h3>
                </Link>
                <div className="mt-3">
                  {magazine.isTicketHolderOnly && !isTicketHolder ? (
                    <Button variant="outline" className="w-full border-zinc-700 text-zinc-300">
                      <LockIcon className="h-4 w-4 mr-2" />
                      チケット所有者限定
                    </Button>
                  ) : (
                    <Link href={`/magazine/${magazine.slug}`} className="w-full block">
                      <Button className="w-full bg-zinc-800 hover:bg-zinc-700">読む</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2行目 - 一般公開 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-zinc-300">一般公開</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondRow.map((magazine) => (
            <div key={magazine.id} className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 group">
              <Link href={`/magazine/${magazine.slug}`} className="block relative aspect-[4/3]">
                <Image
                  src={magazine.image || "/placeholder.svg"}
                  alt={magazine.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <ShareButton
                    title={magazine.title}
                    url={`${baseUrl}/magazine/${magazine.slug}`}
                    variant="outline"
                    className="bg-black/50 border-zinc-700 text-white hover:bg-black/70"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/magazine/${magazine.slug}`}>
                  <h3 className="font-medium line-clamp-2 h-12 group-hover:text-red-500 transition-colors">
                    {magazine.title}
                  </h3>
                </Link>
                <div className="mt-3">
                  <Link href={`/magazine/${magazine.slug}`} className="w-full block">
                    <Button className="w-full bg-zinc-800 hover:bg-zinc-700">読む</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 限定コンテンツアクセスセクション - 非ログインユーザーにのみ表示 */}
      {!isLoggedIn && <LimitedContentAccess />}
    </div>
  )
}
