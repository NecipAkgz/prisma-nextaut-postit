'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PostsType } from '../types/Posts'

export default function Post({ id, avatar, name, postTitle, comments }) {
  return (
    <div className='my-8 rounded-lg bg-white p-8'>
      <div className='flex items-center gap-2'>
        <Image
          className='rounded-full'
          width={32}
          height={32}
          src={avatar}
          alt='avatar'
        />
        <h3 className='font-bold text-gray-700'>{name}</h3>
      </div>
      <div className='my-8'>
        <p className='break-all'>{postTitle}</p>
      </div>
      <div className='flex cursor-pointer items-center gap-4'>
        <Link href={`/post/${id}`}>
          <p className='text-sm font-bold text-gray-700'>
            {comments?.length} - Comments
          </p>
        </Link>
      </div>
    </div>
  )
}
