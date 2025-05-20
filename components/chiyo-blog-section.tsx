import Image from "next/image"
import { LockIcon, Calendar } from "lucide-react"
import { chiyoBlogPosts } from "@/lib/chiyo-blog"

export default function ChiyoBlogSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-gradient-to-r from-red-600 to-red-500 h-5 w-1.5 rounded-full"></div>
        <h3 className="text-lg font-medium">会員限定！千代勝正さんBlog</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {chiyoBlogPosts.map((post) => (
          <div
            key={post.id}
            className="gradient-card rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute top-2 right-2 gradient-red text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <LockIcon className="h-3 w-3" />
                <span>会員限定</span>
              </div>
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                {post.category}
              </div>
            </div>
            <div className="p-4 relative">
              <div className="flex items-center gap-1 text-zinc-400 text-xs mb-2">
                <Calendar className="h-3 w-3" />
                <span>{post.date}</span>
              </div>
              <h4 className="font-medium line-clamp-2 h-12 group-hover:text-red-400 transition-colors">{post.title}</h4>
              <p className="text-sm text-zinc-400 mt-2 line-clamp-2">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
