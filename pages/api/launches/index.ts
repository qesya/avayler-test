import { NextApiRequest, NextApiResponse } from "next"
import { Launch } from "../../../types/launch"

async function getLaunches(): Promise<Launch[]> {
  const response = await fetch(process.env.NEXT_SPACEX_API_ENDPOINT as string);
  if (!response.ok) {
    throw new Error('Failed to fetch launches')
  }
  const data = await response.json()
  return data
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Launch[]>
) {
  try {
    const launches = await getLaunches()
    res.status(200).json(launches)
  } catch (error) {
    console.error(error)
    res.status(500).end('Failed to fetch launches')
  }
}