'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AuthPosts } from '../types/AuthPosts'

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
  console.log(authPosts)

  return <div>MyPosts</div>
}
