"use client"

import Image from "next/image"
import Link from "next/link"

const MagazineLinksSection = () => {
  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">電子書店で雑誌を読む</h2>
      <div className="flex justify-center items-center flex-wrap gap-6">
        <Link href="https://www.as-books.jp/" target="_blank">
          <Image src="/AUTOSPORTSBOOKS.jpg" alt="AUTO SPORT BOOKS" width={200} height={60} />
        </Link>
        <Link href="https://ebooks.sun-a.com/" target="_blank">
          <Image src="/sanei-ebooks.jpg" alt="三栄 ebooks" width={200} height={60} />
        </Link>
        <Link href="https://asb-dl.as-books.jp/" target="_blank">
          <Image src="/ASBdigitallibrary.jpg" alt="ASBデジタルライブラリ" width={200} height={60} />
        </Link>
      </div>

      <p className="mt-8 text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed">
        自動車やレース、ライフスタイル誌を中心に人気の雑誌を取り揃えています。<br />
        バックナンバーは創刊時からすべてラインアップを目指しています。<br />
        これまでに「ニューモデル速報国産車すべてシリーズ」「ニューモデル速報国産車インポートシリーズ」
        「MotorFan illustrated」「F1速報（GP号）」「日本の名レース100選」「Racing on」をコンプリートしています。
      </p>
    </section>
  )
}

export default MagazineLinksSection
