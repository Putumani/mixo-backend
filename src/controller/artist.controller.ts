import { Response, RequestHandler } from 'express';
import artistSchema from '../schema/artist.schema';
import { isAllowed } from './song.controller'; // Import the isAllowed function

export const searchArtist: RequestHandler = async (req, res) => {
  try {
    if (!isAllowed(req, res)) return res.status(403).end('Access denied');
    const query = req.query.query as string;

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const response = await artistSchema
      .find({ name: { $regex: query, $options: 'i' } })
      .lean();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export function getArtist(arg0: string, getArtist: any) {
    throw new Error('Function not implemented.');
}

