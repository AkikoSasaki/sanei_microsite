import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MagazineNotFound() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">マガジンが見つかりません</h1>
        <p className="text-zinc-400 mb-8">お探しのマガジンは存在しないか、削除された可能性があります。</p>
        <Link href="/#magazine">
          <Button className="bg-red-600 hover:bg-red-700">マガジン一覧に戻る</Button>
        </Link>
      </div>
    </div>
  )
}
