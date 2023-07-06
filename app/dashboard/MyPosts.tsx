'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AuthPosts } from '../types/AuthPosts'
import EditPost from './EditPost'

const fetchAuthUser = async () => {
  const res = await axios.get('/api/posts/authPosts')
  return res.data
}

export default function MyPosts() {
  const { data: authPosts, isLoading } = useQuery<AuthPosts>({
    queryKey: ['auth-posts'],
    queryFn: fetchAuthUser,
  })

  if (isLoading) return <h1>Post are loading</h1>

  return (
    <div>
      {authPosts?.post.map((post) => (
        <EditPost
          key={post.id}
          id={post.id}
          avatar={authPosts.image}
          name={authPosts.name}
          title={post.title}
          comments={post.comment}
        />
      ))}
    </div>
  )
}
