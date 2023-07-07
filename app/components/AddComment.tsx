'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

type Comment = {
  postId?: string
  message: string
}

type PostProps = {
  id?: string
}

export default function AddComment({ id }: PostProps) {
  const [tostId, setTostId] = useState('')
  const [message, setMessage] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const queryClient = useQueryClient()
  const { mutate: addComment } = useMutation(
    async (data: Comment) => {
      return axios.post('/api/posts/addComment', { data })
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(['detail-post'])
        setMessage('')
        setIsDisabled(false)
        toast.success('Added your message', { id: tostId })
      },
      onError: (error) => {
        console.log(error)
        setIsDisabled(false)
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: tostId })
        }
      },
    }
  )

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsDisabled(true)
    setTostId(
      toast.loading('Adding your message', {
        id: tostId,
      })
    )
    addComment({ message, postId: id })
  }

  return (
    <form onSubmit={submitPost} className='my-8'>
      <h3 className='text-xl'>Add a message</h3>

      <div className='my-2 flex flex-col'>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type='text'
          name='message'
          className='my-2 rounded-md p-4 text-lg'
        />
      </div>
      <div className='flex items-center gap-2'>
        <button
          disabled={isDisabled}
          className=' rounded-xl bg-teal-600 px-6 py-2 text-sm text-white disabled:opacity-25'
          type='submit'>
          Add Comment 🚀
        </button>
        <p
          className={`font-bold  ${
            message.length > 300 ? 'text-red-700' : 'text-gray-700'
          } `}>{`${message.length}/300`}</p>
      </div>
    </form>
  )
}
