import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const postSlug = req.query.details?.toString()

    try {
      const data = await prisma.post.findUnique({
        where: {
          id: postSlug,
        },
        include: {
          user: true,
          comment: {
            orderBy: { createdAt: 'desc' },
            include: {
              user: true,
            },
          },
        },
      })
      return res.status(200).json(data)
    } catch (error) {
      res.status(403).json({
        message: 'Error has eccured while getting post',
      })
    }
  }
}
