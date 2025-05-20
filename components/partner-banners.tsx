import Image from "next/image"
import Link from "next/link"

export default function PartnerBanners() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight mb-4">公式パートナー</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="https://supergt-square.com/"
          target="_blank"
          className="block relative overflow-hidden rounded-lg gradient-card transition-all duration-300 transform hover:scale-[1.02]"
        >
          <div className="relative aspect-[21/9]">
            <Image src="/images/supergt-banner.png" alt="SUPER GT公式サイト" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="text-lg font-bold text-white">SUPER GT公式サイト</div>
            <div className="text-sm text-zinc-300 flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              supergt-square.com
            </div>
          </div>
        </Link>
        <Link
          href="https://chiyo-katsumasa.com/"
          target="_blank"
          className="block relative overflow-hidden rounded-lg gradient-card transition-all duration-300 transform hover:scale-[1.02]"
        >
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/chiyo-banner.png"
              alt="千代勝正オフィシャルファンクラブ"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="text-lg font-bold text-white">千代勝正オフィシャルファンクラブ</div>
            <div className="text-sm text-zinc-300 flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              chiyo-katsumasa.com
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
