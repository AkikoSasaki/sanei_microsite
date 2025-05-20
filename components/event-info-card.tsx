import Link from "next/link"
import { CalendarDays, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShareButton from "@/components/share-button"

export default function EventInfoCard() {
  return (
    <div className="gradient-section p-6 rounded-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">東京オートサロン 2026</h2>
            <ShareButton
              title="東京オートサロン 2026 - SAN-EI"
              variant="ghost"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-zinc-300">
              <CalendarDays className="h-5 w-5 text-red-500" />
              <span>2026年1月12日〜14日</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <MapPin className="h-5 w-5 text-red-500" />
              <span>幕張メッセ、千葉</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Clock className="h-5 w-5 text-red-500" />
              <span>9:00〜19:00</span>
            </div>
          </div>
        </div>
        <Link href="https://ticket.san-ei-corp.co.jp/" target="_blank">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            チケット購入
          </Button>
        </Link>
      </div>
    </div>
  )
}
