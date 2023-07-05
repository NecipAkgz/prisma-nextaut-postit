'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AddPost from './components/AddPost'
import Post from './components/Post'
import { PostsType } from './types/Posts'

const getAllPost = async () => {
  const response = await axios.get('/api/posts/getPosts')
  return response.data
}

export default function Home() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<PostsType[]>({
    queryKey: ['posts'],
    queryFn: getAllPost,
  })

  if (error) return error
  if (isLoading) return 'Loading...'

  return (
    <main>
      <AddPost />
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          comments={post.Comment}
        />
      ))}
    </main>
  )
}
