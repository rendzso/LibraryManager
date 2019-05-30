import * as express from 'express';
import * as srs from './LibraryService';

const router = express.Router();

router.get('/list', async (req, res) => {
  res.status(200).send(await srs.listAllUsers(req.query));
});

router.get('/rented', async (req, res) => {
  res.status(200).send(await srs.listOfRentedStuffs(req.query.userID));
});

router.post('/add', async (req, res) => {
  if (req.body.name === undefined || req.body.name === '') {
    res.status(414).send({restext: 'User name is missing!'});
    return;
  }
  if (req.body.userID === undefined || req.body.userID === '') {
    res.status(414).send({restext: 'UserID name is missing!'});
    return;
  }
  if (req.body.phone === undefined || req.body.phone === '') {
    res.status(414).send({restext: 'Phone number is missing!'});
    return;
  }
  if (req.body.livingPlace === undefined || req.body.livingPlace === '') {
    res.status(414).send({restext: 'Living place is missing!'});
    return;
  }
  if (req.body.personalID === undefined || req.body.personalID === '') {
    res.status(414).send({restext: 'PersonalID is missing!'});
    return;
  }
  const valami = await srs.registerUser(req.body);
  res.status(200).send({restext: valami});
});

router.post('/delete', async (req, res) => {
  if (req.body.userID === undefined || req.body.userID === '') {
    res.status(414).send({restext: 'User name is missing!'});
    return;
  }
  const valami = await srs.deleteUser(req.body.userID);
  res.status(200).send({restext: valami});
});

router.post('/update', async (req, res) => {
  if (req.body.name === '') {
    res.status(414).send({restext: 'User name is missing!'});
    return;
  }
  if (req.body.userID === undefined || req.body.userID === '') {
    res.status(414).send({restext: 'UserID name is missing!'});
    return;
  }
  if (req.body.phone === '') {
    res.status(414).send({restext: 'Phone number is missing!'});
    return;
  }
  if (req.body.livingPlace === '') {
    res.status(414).send({restext: 'Living place is missing!'});
    return;
  }
  if (req.body.personalID === '') {
    res.status(414).send({restext: 'PersonalID is missing!'});
    return;
  }
  const valami = await srs.updateUser(req.body);
  res.status(200).send({restext: valami});
});

router.post('/rent', async (req, res) => {
  if (req.body.userID === undefined || req.body.userID === '') {
    res.status(414).send({restext: 'UserID name is missing!'});
    return;
  }
  if (req.body.stuffID === undefined || req.body.stuffID === '') {
    res.status(414).send({restext: 'UserID name is missing!'});
    return;
  }
  const valami = await srs.rentAStuff(req.body.userID, req.body.stuffID)
  res.status(200).send({restext: valami});
});

router.post('/back', async (req, res) => {
  if (req.body.userID === undefined || req.body.userID === '') {
    console.log(req.body)
    res.status(414).send({restext: 'UserID name is missing!'});
    return;
  }
  if (req.body.stuffID === undefined || req.body.stuffID === '') {
    console.log(req.body)
    res.status(414).send({restext: 'StuffID name is missing!'});
    return;
  }
  const valami = await srs.backAStuff(req.body.userID, req.body.stuffID)
  res.status(200).send({restext: valami});
});

router.get('/late', async (req, res) => {
  res.status(200).send(await srs.listOfLateness());
});

router.get('/count', async (req, res) => {
  if (req.query.userID === undefined || req.query.userID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  const thenumber = await srs.countByUser(req.query.userID);
  res.status(200).send({asd: `the count is: ${thenumber}`});
});

// @ts-ignore
module.exports = router;
