export type PostType = {
  id: string
  title: string
  updatedAt?: string
  user: {
    id: string
    name: string
    image: string
    email: string
  }
  comment?: {
    id: string
    createdAt: string
    postId: string
    userId: string
    message: string
    user: {
      id: string
      name: string
      image: string
      email: string
    }
  }[]
}
