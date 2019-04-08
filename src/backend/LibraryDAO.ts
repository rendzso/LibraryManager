import {MongoClient, Db} from 'mongodb';
import { Request, Response } from 'express';

const url = 'mongodb://localhost:27017';
const dbname = 'LibraryManager';
const collectionname = 'LibraryManagerUsers';
let db: Db;

export let readAll = () => {
  const client = new MongoClient(url);
  db = client.connect(() => {
    console.log('connected to db');
    db = client.db(dbname);
    return db.collection(collectionname).find().toArray();
    // client.close();
  });
}



