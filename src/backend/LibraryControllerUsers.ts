import * as express from 'express';
import * as srs from './LibraryService';

const router = express.Router();

router.get('/list', async (req, res) => {
  res.status(200).send(await srs.listAllUsers(req.query));
});

router.post('/add', (req, res) => {
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
  srs.registerUser(req.body);
  res.status(200).send('User registrated.');
});

router.post('/delete', (req, res) => {
  if (req.query.name === undefined || req.query.name === '') {
    res.status(414).send('User name is missing!');
    return;
  }
  srs.deleteUser(req.query.name);
  res.status(200).send('User deleted.');
});

router.post('/update', (req, res) => {
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
  srs.updateUser(req.body);
  res.status(200).send('User updated.');
});

router.post('/rent', (req, res) => {
  if (req.query.userID === undefined || req.query.userID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  if (req.query.stuffID === undefined || req.query.stuffID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  srs.rentAStuff(req.query.userID, req.query.stuffID);
  res.status(200).send('Rent is registered.');
});

router.post('/back', (req, res) => {
  if (req.query.userID === undefined || req.query.userID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  if (req.query.stuffID === undefined || req.query.stuffID === '') {
    res.status(414).send('UserID name is missing!');
    return;
  }
  srs.backAStuff(req.query.userID, req.query.stuffID);
  res.status(200).send('Item is backed.');
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
  res.status(200).send('it is ready, the count is: ' + thenumber);
});

module.exports = router;
