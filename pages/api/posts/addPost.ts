import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { prisma } from '../../../prisma/client'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    //@ts-ignore
    const session = await getServerSession(req, res, authOptions)
    if (!session)
      return res.status(401).json({ message: 'Please sign in to make post' })

    const title: string = req.body.title

    // Get User
    const prismaUser = await prisma.user.findUnique({
      where: {
        email: session.user?.email!,
      },
    })

    // Check title
    if (title.length > 300)
      return res.status(400).json({ message: 'Title too long' })
    if (!title.length)
      return res.status(400).json({ message: 'Title required' })

    // Create post
    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser?.id!,
        },
      })
      console.log('🚀 ~ file: addPost.ts:38 ~ result:', result)
      res.status(200).json({ message: 'Post created' })
    } catch (error) {
      res.status(403).json({ message: 'Error has eccured while making post' })
    }
  }
}
