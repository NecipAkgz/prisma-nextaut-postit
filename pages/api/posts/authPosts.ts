import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { prisma } from '../../../prisma/client'
import { authOptions } from '../auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //@ts-ignore
  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).json({ message: 'Please sign in' })

  if (req.method === 'GET') {
    // Get Auth Users Post
    try {
      const data = await prisma.user.findUnique({
        where: {
          email: session.user?.email!,
        },
        include: {
          post: {
            orderBy: {
              createdAt: 'desc',
            },
            include: {
              comment: true,
            },
          },
        },
      })
      res.status(200).json(data)
    } catch (error) {
      res.status(403).json({
        message: 'Error has eccured while getting post',
      })
    }
  }
}
