'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

type User = {
  image: string
}

export default function Logged({ image }: User) {
  return (
    <li className='flex items-center gap-8'>
      <button
        className='rounded-xl bg-gray-700 px-6 py-2 text-sm text-white'
        onClick={() => signOut()}>
        Sign out
      </button>
      <Link href={'/dashboard'}>
        <Image
          className='w-14 rounded-full'
          width={64}
          height={64}
          src={image}
          alt='profile-avatar'
          priority
        />
      </Link>
    </li>
  )
}
