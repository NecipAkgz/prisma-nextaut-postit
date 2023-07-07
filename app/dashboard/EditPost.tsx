'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Toggle from './Toggle'

type EditProps = {
  id: string
  avatar: string
  name: string
  title: string
  comments?: {
    id: string
    postId: string
    userId: string
  }[]
}

export default function EditPost({
  id,
  avatar,
  name,
  title,
  comments,
}: EditProps) {
  const [toastId, setToastId] = useState<string | undefined>('')
  const queryClient = useQueryClient()
  // Toggle
  const [toggle, setToggle] = useState(false)
  // Delete
  const { mutate: deletePost } = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`/api/posts/deletePost`, { data: id })
    },
    onError: (error) => {
      toast.error('Error deleting post', { id: toastId })
    },
    onSuccess: (data) => {
      toast.success('Post deleted', { id: toastId })
      queryClient.invalidateQueries(['auth-posts'])
    },
  })

  const handleDelete = () => {
    setToastId(toast.loading('Deleting post', { id: toastId }))
    deletePost(id)
  }

  return (
    <>
      <div className='my-8 rounded-lg bg-white p-8'>
        <div className='flex items-center gap-2'>
          <Image width={32} height={32} src={avatar} alt='avatar' />
          <h3 className='font-bold text-gray-700'>{name}</h3>
        </div>
        <div className='my-8'>
          <p className='break-all'>{title}</p>
        </div>
        <div className='flex items-center justify-between gap-4'>
          <p className='text-sm font-bold text-gray-700'>
            {comments?.length} Comments{' '}
          </p>
          <button
            className='text-sm font-bold text-red-500'
            onClick={() => setToggle(true)}>
            Delete
          </button>
        </div>
      </div>
      {toggle && <Toggle deletePost={handleDelete} setToggle={setToggle} />}
    </>
  )
}
