import {MongoClient, Db} from 'mongodb';
import * as moment from 'moment';

const url = 'mongodb://localhost:27017';
const dbname = 'LibraryManager';
const collectionname = 'LibraryManagerUsers';
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

export async function updateUser(data) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    console.log('connected to db');
    db = client.db(dbname);
    db.collection(collectionname).updateOne({ "userID" : data.userID }, {$set: data});
    client.close();
  });
}

export async function rentAStuff(user, stuff){
  const client = new MongoClient(url);
  db = await client.connect(() => {
    console.log('connected to db');
    db = client.db(dbname);
    db.collection("LibraryManagerStuffs").updateOne({"stuffID": stuff}, {$set: {"status": "rented"}});
    db.collection(collectionname).updateOne({ "userID" : user }, {$push: {"rented": {"stuffID": stuff, "dateOfRent": moment().format('YYYY.MM.DD'), "dateOfBack": moment().add(30, 'days').format('YYYY.MM.DD')}}});
    client.close();
  });
}

export async function backAStuff(user, stuff) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    console.log('connected to db');
    db = client.db(dbname);
    db.collection("LibraryManagerStuffs").updateOne({"stuffID": stuff}, {$set: {"status": "open"}});
    db.collection(collectionname).updateOne({ "userID" : user }, {$pull: { "rented": {"stuffID": stuff}}});
    client.close();
  });
}
