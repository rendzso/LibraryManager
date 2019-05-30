import {MongoClient, Db} from 'mongodb';

const url = 'mongodb://172.21.0.10:27017';
const dbname = 'LibraryManager';
const collectionname = 'LibraryManagerStuffs';
let db: Db;

function read(data) {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      console.log('connected to db');
      db = client.db(dbname);
      resolve(db.collection(collectionname).find(data).toArray());
      client.close();
    });
  });
}

export async function readAll(data) {
  const resoult = await read(data);
  return resoult;
}

export async function addNewStuff(data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    console.log('connected to db');
    db = client.db(dbname);
    db.collection(collectionname).insertOne(data);
    client.close();
  });
}

export function exists(stuff) {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      console.log('connected to db');
      db = client.db(dbname);
      resolve(db.collection(collectionname).find({"stuffID": stuff}).count());
    });
  });
}

export function isRented(stuff) {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      console.log('connected to db');
      db = client.db(dbname);
      resolve(db.collection(collectionname).find({"stuffID": stuff, "rentID": "none"}).count());
    });
  });
}

