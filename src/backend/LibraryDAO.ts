import {MongoClient, Db} from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbname = 'LibraryManager';
const collectionname = 'LibraryManagerUsers';
let db: Db;


function read() {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      console.log('connected to db');
      db = client.db(dbname);
      resolve(db.collection(collectionname).find().toArray());
      client.close();
    });
  });
}

export async function readAll() {
  const resoult = await read();
  return resoult;
}

export async function register(data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    console.log('connected to db');
    db = client.db(dbname);
    db.collection(collectionname).insertOne(data);
    client.close();
  });
}

export async function deleteUser(data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    console.log('connected to db');
    db = client.db(dbname);
    db.collection(collectionname).updateOne({ "name" : data.name }, {$set: {"itsDeleted": "deleted"}});
    client.close();
  });
}



