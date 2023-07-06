export type AuthPosts = {
  id: string
  email: string
  image: string
  name: string
  posts: {
    id: string
    createdAt: string
    title: string
    comments?: {
      id: string
      createdAt: string
      postId: string
      title: string
      userId: string
    }[]
  }[]
}
