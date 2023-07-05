export type PostsType = {
  id: string
  title: string
  createdAt: string
  user: {
    name: string
    image: string
  }
  Comment?: {
    id: string
    createdAt: string
    postId: string
    userId: string
  }[]
}
