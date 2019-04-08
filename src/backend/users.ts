import { Request, Response } from 'express';

export let allUsers = (req: Request, res: Response) => {
  res.send('Returns all Books');
};
