import {MongoClient, Db} from 'mongodb';
import { Request, Response } from 'express';

const url = 'mongodb://localhost:27017';
const dbname = 'LibraryManager';
const collectionname = 'LibraryManagerUsers';
let db: Db;

export let readAll = async (req: Request, res: Response) => {
  const client = new MongoClient(url);
  db = await client.connect(async () => {
    console.log('connected to db');
    db = client.db(dbname);
    const docs = await db.collection(collectionname).find().toArray();
    res.send(docs);
    client.close();
  });
}



