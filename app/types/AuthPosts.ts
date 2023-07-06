export type AuthPosts = {
  id: string
  email: string
  image: string
  name: string
  post: {
    id: string
    createdAt: string
    title: string
    comment?: {
      id: string
      createdAt: string
      postId: string
      title: string
      userId: string
    }[]
  }[]
}
