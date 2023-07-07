import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    const postId = req.body
    try {
      await prisma.post.delete({
        where: {
          id: postId,
        },
      })
      res.status(200).json({ message: 'post deleted' })
    } catch (error) {
      res.status(403).json({ message: 'Error deleting post' })
    }
  }
}
