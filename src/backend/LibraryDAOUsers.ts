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

export async function deleteUser(name) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    console.log('connected to db');
    db = client.db(dbname);
    db.collection(collectionname).updateOne({ "name" : name }, {$set: {"itsDeleted": "deleted"}});
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
    db.collection("LibraryManagerStuffs").updateOne({"stuffID": stuff}, {$set: {"status": "rented", "rentID": user}});
    db.collection("LibraryManagerRented").insertOne({ "userID" : user, "stuffID": stuff, "dateOfRent": moment().format('YYYY.MM.DD'), "dateOfBack": moment().add(30, 'days').format('YYYY.MM.DD')});
    client.close();
  });
}

export async function backAStuff(user, stuff) {
  const client = new MongoClient(url);
  db = await client.connect(() => {
    console.log('connected to db');
    db = client.db(dbname);
    db.collection("LibraryManagerStuffs").updateOne({"stuffID": stuff}, {$set: {"status": "open", "rentID": "none"}});
    db.collection("LibraryManagerRented").deleteOne({ "userID" : user , "stuffID": stuff});
    client.close();
  });
}

function rented() {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      console.log('connected to db');
      db = client.db(dbname);
      resolve(db.collection("LibraryManagerRented").find().toArray());
      client.close();
    });
  });
}

export async function listOfRentedStuffs() {
  const resoult = await rented();
  return resoult;
}

function late() {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      console.log('connected to db');
      db = client.db(dbname);
      resolve(db.collection("LibraryManagerRented").find({"dateOfBack" : {$lte: moment().format('YYYY.MM.DD')}}).toArray());
      client.close();
    });
  });
}

export async function listOfLateness() {
  const resoult = await late();
  return resoult;
}

function count(user) {
  return new Promise(async resolve => {
    const client = new MongoClient(url);
    db = await client.connect(() => {
      console.log('connected to db');
      db = client.db(dbname);
      resolve(db.collection("LibraryManagerRented").find({"userID": user}).count());
      client.close();
    });
  });
}

export async function countByUser(user) {
  const resoult = await count(user);
  return resoult;
}
