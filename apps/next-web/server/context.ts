import { NextApiRequest, NextApiResponse } from 'next'

type newContext = {
  req: NextApiRequest
  res: NextApiResponse
  isAdmin: boolean
}

export const createContext = ({ req, res }): newContext => {
  return {
    req: req,
    res: res,
    isAdmin: true,
  }
}
