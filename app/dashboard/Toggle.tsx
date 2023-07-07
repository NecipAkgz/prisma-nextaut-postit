'use client'

import { useEffect } from 'react'

type ToggleProps = {
  deletePost: () => void
  setToggle: (toggle: boolean) => void
}

export default function Toggle({ deletePost, setToggle }: ToggleProps) {
  useEffect(() => {
    document.documentElement.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <div
      onClick={() => setToggle(false)}
      className='fixed left-0 top-0 z-20 h-full w-full bg-black/50'>
      <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-6 rounded-lg bg-white p-12'>
        <h2 className='text-xl'>
          Are you sure you want to delete this post? 🙄
        </h2>
        <h3 className='text-sm text-red-600'>
          Pressing the delet button will permenantly delete this post!
        </h3>
        <button
          onClick={deletePost}
          className='rounded-lg bg-red-600 px-4 py-2 text-sm text-white'>
          Delete Post
        </button>
      </div>
    </div>
  )
}
