export interface Comment {
  id: string
  magazineId: number
  userId: string
  userName: string
  userAvatar: string
  content: string
  createdAt: string
  likes: number
  isLiked?: boolean
  replies?: Comment[]
}

// ダミーコメントデータ
const dummyComments: Record<number, Comment[]> = {
  1: [
    {
      id: "comment-1",
      magazineId: 1,
      userId: "user-1",
      userName: "田中 太郎",
      userAvatar: "/placeholder.svg?height=40&width=40",
      content: "NISMO 2026 Editionは本当に楽しみです！限定50台とのことですが、予約方法についての詳細情報はありますか？",
      createdAt: "2025-12-02T09:30:00",
      likes: 12,
      replies: [
        {
          id: "comment-1-reply-1",
          magazineId: 1,
          userId: "user-2",
          userName: "佐藤 健太",
          userAvatar: "/placeholder.svg?height=40&width=40",
          content:
            "公式発表によると、東京オートサロン会場での先行予約が可能とのことです。また、オンライン予約も会期中に開始される予定です。",
          createdAt: "2025-12-02T10:15:00",
          likes: 5,
        },
        {
          id: "comment-1-reply-2",
          magazineId: 1,
          userId: "user-3",
          userName: "SAN-EI スタッフ",
          userAvatar: "/placeholder.svg?height=40&width=40",
          content:
            "NISMO 2026 Editionの予約に関する詳細は、イベント開始1週間前に公式サイトで発表される予定です。お見逃しなく！",
          createdAt: "2025-12-02T11:05:00",
          likes: 8,
        },
      ],
    },
    {
      id: "comment-2",
      magazineId: 1,
      userId: "user-4",
      userName: "山田 花子",
      userAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "GRスープラのレーシングコンセプトが市販化されるのは素晴らしいですね。スペックについてもっと詳しく知りたいです。",
      createdAt: "2025-12-02T14:20:00",
      likes: 7,
    },
    {
      id: "comment-3",
      magazineId: 1,
      userId: "user-5",
      userName: "鈴木 一郎",
      userAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "シビック Type Rの30周年記念モデルは、歴代モデルのどの要素を取り入れているのでしょうか？初代のデザイン要素も含まれていますか？",
      createdAt: "2025-12-03T08:45:00",
      likes: 4,
      replies: [
        {
          id: "comment-3-reply-1",
          magazineId: 1,
          userId: "user-6",
          userName: "高橋 実",
          userAvatar: "/placeholder.svg?height=40&width=40",
          content: "私も気になっています。特にEK9のデザイン要素が取り入れられていると嬉しいですね。",
          createdAt: "2025-12-03T09:30:00",
          likes: 2,
        },
      ],
    },
  ],
  2: [
    {
      id: "comment-4",
      magazineId: 2,
      userId: "user-7",
      userName: "伊藤 直樹",
      userAvatar: "/placeholder.svg?height=40&width=40",
      content: "マツダのVISION ELECTROのデザインが素晴らしいですね。日本の伝統工芸を取り入れた内装にも注目です。",
      createdAt: "2025-12-11T10:00:00",
      likes: 9,
    },
  ],
  4: [
    {
      id: "comment-5",
      magazineId: 4,
      userId: "user-8",
      userName: "小林 誠",
      userAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "東京オートサロンの歴史について詳しく知ることができて良かったです。初期の頃の写真をもっと見てみたいです。",
      createdAt: "2025-11-22T15:30:00",
      likes: 6,
    },
    {
      id: "comment-6",
      magazineId: 4,
      userId: "user-9",
      userName: "中村 美咲",
      userAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "私は2005年から毎年参加していますが、年々規模が大きくなっていくのを実感しています。特に海外からの来場者が増えましたね。",
      createdAt: "2025-11-23T09:15:00",
      likes: 11,
      replies: [
        {
          id: "comment-6-reply-1",
          magazineId: 4,
          userId: "user-10",
          userName: "加藤 健",
          userAvatar: "/placeholder.svg?height=40&width=40",
          content: "私も同感です。特に最近はSNSの影響で海外からの注目度が高まっていると思います。",
          createdAt: "2025-11-23T10:20:00",
          likes: 3,
        },
      ],
    },
  ],
}

export function getCommentsByMagazineId(magazineId: number): Comment[] {
  return dummyComments[magazineId] || []
}

export function addComment(
  magazineId: number,
  userId: string,
  userName: string,
  userAvatar: string,
  content: string,
): Comment {
  const newComment: Comment = {
    id: `comment-${Date.now()}`,
    magazineId,
    userId,
    userName,
    userAvatar,
    content,
    createdAt: new Date().toISOString(),
    likes: 0,
  }

  if (!dummyComments[magazineId]) {
    dummyComments[magazineId] = []
  }

  dummyComments[magazineId].unshift(newComment)
  return newComment
}

export function addReply(
  magazineId: number,
  commentId: string,
  userId: string,
  userName: string,
  userAvatar: string,
  content: string,
): Comment | null {
  const comments = dummyComments[magazineId]
  if (!comments) return null

  // 親コメントを探す
  const parentComment = comments.find((comment) => comment.id === commentId)
  if (parentComment) {
    const newReply: Comment = {
      id: `${commentId}-reply-${Date.now()}`,
      magazineId,
      userId,
      userName,
      userAvatar,
      content,
      createdAt: new Date().toISOString(),
      likes: 0,
    }

    if (!parentComment.replies) {
      parentComment.replies = []
    }

    parentComment.replies.push(newReply)
    return newReply
  }

  return null
}

export function toggleLike(magazineId: number, commentId: string, userId: string): boolean {
  const comments = dummyComments[magazineId]
  if (!comments) return false

  // コメントを探す
  for (const comment of comments) {
    if (comment.id === commentId) {
      comment.isLiked = !comment.isLiked
      comment.likes += comment.isLiked ? 1 : -1
      return comment.isLiked
    }

    // 返信コメントを探す
    if (comment.replies) {
      for (const reply of comment.replies) {
        if (reply.id === commentId) {
          reply.isLiked = !reply.isLiked
          reply.likes += reply.isLiked ? 1 : -1
          return reply.isLiked
        }
      }
    }
  }

  return false
}
