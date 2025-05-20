"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { ja } from "date-fns/locale"
import { Heart, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { type Comment, getCommentsByMagazineId, addComment, addReply, toggleLike } from "@/lib/comments"

// SAN-EI IDログインURL
const loginUrl =
  "https://id.san-ei-corp.co.jp/users/login?dept_code=oas&redirect=https%3A%2F%2Fwww.tokyoautosalon.jp%2Fauth%2Fret%2F682abd3d7bcd67.84490433?token={token}"

interface CommentSectionProps {
  magazineId: number
  isLoggedIn: boolean
}

export default function CommentSection({ magazineId, isLoggedIn }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const replyInputRef = useRef<HTMLTextAreaElement>(null)

  // コメントを取得
  useEffect(() => {
    const fetchedComments = getCommentsByMagazineId(magazineId)
    setComments(fetchedComments)
  }, [magazineId])

  // 返信入力欄にフォーカス
  useEffect(() => {
    if (replyingTo && replyInputRef.current) {
      replyInputRef.current.focus()
    }
  }, [replyingTo])

  // コメント投稿
  const handleSubmitComment = () => {
    if (!isLoggedIn) return

    if (newComment.trim()) {
      const comment = addComment(
        magazineId,
        "current-user",
        "ゲストユーザー",
        "/placeholder.svg?height=40&width=40",
        newComment,
      )
      setComments([comment, ...comments])
      setNewComment("")
    }
  }

  // 返信投稿
  const handleSubmitReply = (commentId: string) => {
    if (!isLoggedIn) return

    if (replyContent.trim()) {
      const reply = addReply(
        magazineId,
        commentId,
        "current-user",
        "ゲストユーザー",
        "/placeholder.svg?height=40&width=40",
        replyContent,
      )

      if (reply) {
        // コメントを更新
        const updatedComments = comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), reply],
            }
          }
          return comment
        })
        setComments(updatedComments)
        setReplyContent("")
        setReplyingTo(null)
      }
    }
  }

  // いいね機能
  const handleLike = (commentId: string) => {
    if (!isLoggedIn) return

    const isLiked = toggleLike(magazineId, commentId, "current-user")

    // コメントを更新
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          isLiked,
          likes: isLiked ? comment.likes + 1 : comment.likes - 1,
        }
      }

      // 返信コメントを更新
      if (comment.replies) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === commentId) {
            return {
              ...reply,
              isLiked,
              likes: isLiked ? reply.likes + 1 : reply.likes - 1,
            }
          }
          return reply
        })
        return { ...comment, replies: updatedReplies }
      }

      return comment
    })

    setComments(updatedComments)
  }

  // 日付フォーマット
  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true, locale: ja })
    } catch (error) {
      return "日付不明"
    }
  }

  return (
    <div className="mt-16 pt-8 border-t border-zinc-800">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageSquare className="h-5 w-5" />
        コメント
        <span className="text-sm font-normal text-zinc-400 ml-2">({comments.length})</span>
      </h2>

      {/* コメント投稿フォーム */}
      <div className="mb-8">
        {isLoggedIn ? (
          <div className="flex flex-col space-y-3">
            <Textarea
              placeholder="コメントを入力..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="bg-zinc-900 border-zinc-800 focus:border-zinc-700 min-h-[100px]"
            />
            <div className="flex justify-end">
              <Button
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="bg-red-600 hover:bg-red-700"
              >
                <Send className="h-4 w-4 mr-2" />
                投稿する
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-zinc-900 rounded-lg p-6 text-center border border-zinc-800">
            <p className="text-zinc-400 mb-4">コメントを投稿するにはログインしてください。</p>
            <Link href={loginUrl} target="_blank">
              <Button className="bg-red-600 hover:bg-red-700">ログイン</Button>
            </Link>
          </div>
        )}
      </div>

      {/* コメント一覧 */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="space-y-4">
              {/* 親コメント */}
              <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                <div className="flex items-start gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={comment.userAvatar || "/placeholder.svg"}
                      alt={comment.userName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{comment.userName}</h4>
                        <p className="text-xs text-zinc-500">{formatDate(comment.createdAt)}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLike(comment.id)}
                        className={`text-zinc-400 hover:text-red-500 hover:bg-transparent ${
                          comment.isLiked ? "text-red-500" : ""
                        }`}
                        disabled={!isLoggedIn}
                      >
                        <Heart className={`h-4 w-4 mr-1 ${comment.isLiked ? "fill-red-500" : ""}`} />
                        {comment.likes}
                      </Button>
                    </div>
                    <p className="mt-2 text-zinc-300">{comment.content}</p>
                    <div className="mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                        className="text-zinc-400 hover:text-white p-0 h-auto"
                        disabled={!isLoggedIn}
                      >
                        返信する
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 返信フォーム */}
                {replyingTo === comment.id && isLoggedIn && (
                  <div className="mt-3 ml-12 space-y-3">
                    <Textarea
                      ref={replyInputRef}
                      placeholder="返信を入力..."
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      className="bg-zinc-950 border-zinc-800 focus:border-zinc-700 min-h-[80px]"
                    />
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setReplyingTo(null)}
                        className="border-zinc-700"
                      >
                        キャンセル
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleSubmitReply(comment.id)}
                        disabled={!replyContent.trim()}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        返信
                      </Button>
                    </div>
                  </div>
                )}

                {/* 返信コメント */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 ml-12 space-y-3">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-zinc-950 rounded-lg p-3 border border-zinc-800">
                        <div className="flex items-start gap-3">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={reply.userAvatar || "/placeholder.svg"}
                              alt={reply.userName}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-sm">{reply.userName}</h4>
                                <p className="text-xs text-zinc-500">{formatDate(reply.createdAt)}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleLike(reply.id)}
                                className={`text-zinc-400 hover:text-red-500 hover:bg-transparent ${
                                  reply.isLiked ? "text-red-500" : ""
                                }`}
                                disabled={!isLoggedIn}
                              >
                                <Heart className={`h-4 w-4 mr-1 ${reply.isLiked ? "fill-red-500" : ""}`} />
                                {reply.likes}
                              </Button>
                            </div>
                            <p className="mt-1 text-zinc-300 text-sm">{reply.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-zinc-500">
            まだコメントはありません。最初のコメントを投稿しましょう！
          </div>
        )}
      </div>
    </div>
  )
}
