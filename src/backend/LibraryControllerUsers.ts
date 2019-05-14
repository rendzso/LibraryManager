import * as express from 'express';
import * as srs from './LibraryService';

const router = express.Router();

router.get('/list', async (req, res) => {
  res.status(200).send(await srs.listAllUsers(req.query));
});

router.post('/add', async (req, res) => {
  if (req.body.name === undefined || req.body.name === '') {
    res.status(414).send('User name is missing!');
    return;
  }
  if (req.body.userID === undefined || req.body.userID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  if (req.body.phone === undefined || req.body.phone === '') {
    res.status(414).send('Phone number is missing!');
    return;
  }
  if (req.body.livingPlace === undefined || req.body.livingPlace === '') {
    res.status(414).send('Living place is missing!');
    return;
  }
  if (req.body.personalID === undefined || req.body.personalID === '') {
    res.status(414).send('PersonalID is missing!');
    return;
  }
  res.status(200).send(await srs.registerUser(req.body));
});

router.post('/delete', async (req, res) => {
  if (req.query.userID === undefined || req.query.userID === '') {
    res.status(414).send('User name is missing!');
    return;
  }
  res.status(200).send(await srs.deleteUser(req.query.userID));
});

router.post('/update', async (req, res) => {
  if (req.body.name === '') {
    res.status(414).send('User name is missing!');
    return;
  }
  if (req.body.userID === undefined || req.body.userID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  if (req.body.phone === '') {
    res.status(414).send('Phone number is missing!');
    return;
  }
  if (req.body.livingPlace === '') {
    res.status(414).send('Living place is missing!');
    return;
  }
  if (req.body.personalID === '') {
    res.status(414).send('PersonalID is missing!');
    return;
  }
  res.status(200).send(await srs.updateUser(req.body));
});

router.post('/rent', async (req, res) => {
  if (req.query.userID === undefined || req.query.userID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  if (req.query.stuffID === undefined || req.query.stuffID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  res.status(200).send(await srs.rentAStuff(req.query.userID, req.query.stuffID));
});

router.post('/back', async (req, res) => {
  if (req.query.userID === undefined || req.query.userID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  if (req.query.stuffID === undefined || req.query.stuffID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  res.status(200).send(await srs.backAStuff(req.query.userID, req.query.stuffID));
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
  res.status(200).send({asd: `it is ready, the count is: ${thenumber}`});
});

// @ts-ignore
module.exports = router;
