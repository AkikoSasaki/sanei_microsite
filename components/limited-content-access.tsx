import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LockIcon } from "lucide-react"

// SAN-EI IDログインURL
const loginUrl =
  "https://id.san-ei-corp.co.jp/users/login?dept_code=oas&redirect=https%3A%2F%2Fwww.tokyoautosalon.jp%2Fauth%2Fret%2F682abd3d7bcd67.84490433?token={token}"

export default function LimitedContentAccess() {
  return (
    <div className="bg-zinc-900/50 dark:bg-zinc-900/50 border border-zinc-800 dark:border-zinc-800 rounded-lg p-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 mb-4">
          <LockIcon className="h-6 w-6 text-red-500" />
        </div>
        <h3 className="text-lg font-medium mb-2">限定コンテンツにアクセス</h3>
        <p className="text-zinc-400 dark:text-zinc-400 mb-4 max-w-md mx-auto">
          SAN-EI IDでログインし、チケットを購入して全てのマガジンと限定コンテンツをお楽しみください。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href={loginUrl} target="_blank">
            <Button variant="outline" className="border-zinc-700 dark:border-zinc-700 w-full sm:w-auto">
              ログイン
            </Button>
          </Link>
          <Link href="https://ticket.san-ei-corp.co.jp/" target="_blank">
            <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">チケット購入</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
