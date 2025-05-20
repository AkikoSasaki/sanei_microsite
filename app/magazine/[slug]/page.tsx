import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { getMagazine, getRelatedMagazines, getNextMagazine, getPreviousMagazine } from "@/lib/magazines"
import MagazineContent from "@/components/magazine-content"
import { notFound } from "next/navigation"

// SAN-EI IDログインURL
const loginUrl =
  "https://id.san-ei-corp.co.jp/users/login?dept_code=oas&redirect=https%3A%2F%2Fwww.tokyoautosalon.jp%2Fauth%2Fret%2F682abd3d7bcd67.84490433?token={token}"

interface MagazinePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: MagazinePageProps): Promise<Metadata> {
  const magazine = getMagazine(params.slug)

  if (!magazine) {
    return {
      title: "マガジンが見つかりません - SAN-EI 東京オートサロン 2026",
    }
  }

  return {
    title: `${magazine.title} - SAN-EI 東京オートサロン 2026`,
    description: magazine.excerpt,
  }
}

export default function MagazinePage({ params }: MagazinePageProps) {
  const magazine = getMagazine(params.slug)

  if (!magazine) {
    notFound()
  }

  const relatedMagazines = getRelatedMagazines(magazine)
  const nextMagazine = getNextMagazine(magazine.id)
  const previousMagazine = getPreviousMagazine(magazine.id)

  // 認証状態（実際のアプリではAPIから取得）
  const isLoggedIn = false
  const isTicketHolder = false

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/#magazine" className="inline-flex items-center text-zinc-400 hover:text-white mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          マガジン一覧に戻る
        </Link>

        <MagazineContent
          magazine={magazine}
          relatedMagazines={relatedMagazines}
          nextMagazine={nextMagazine}
          previousMagazine={previousMagazine}
          isLoggedIn={isLoggedIn}
          isTicketHolder={isTicketHolder}
        />
      </div>
    </div>
  )
}
