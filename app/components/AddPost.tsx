'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

export default function AddPost() {
  const [title, setTitle] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const { mutate } = useMutation({
    mutationFn: async (title: string) =>
      await axios.post('/api/posts/addPost', { title }),
    onError: (error) => {
      setIsDisabled(false)
      console.log(error)
    },
    onSuccess: (data) => {
      setTitle('')
      setIsDisabled(false)
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsDisabled(true)
    mutate(title)
  }

  return (
    <form className='my-8 rounded-md bg-white p-8' onSubmit={handleSubmit}>
      <div className='my-4 flex flex-col'>
        <textarea
          className='my-2 rounded-md bg-gray-200 p-4 text-lg'
          name='title'
          placeholder="What's on your mind?"
          onChange={(e) => setTitle(e.target.value)}
          value={title}></textarea>
      </div>
      <div className={'flex items-center justify-between gap-2'}>
        <p
          className={`text-sm font-bold ${
            title.length > 300 ? 'text-red-600' : ''
          }`}>{`${title.length}/300`}</p>
        <button
          className='rounded-xl bg-teal-600 px-6 py-2 text-sm text-white disabled:opacity-25'
          disabled={isDisabled}
          type='submit'>
          Create Post
        </button>
      </div>
    </form>
  )
}
