import * as express from 'express';
import * as srs from './LibraryService';

const router = express.Router();

router.get('/list', async (req, res) => {
  res.status(200).send(await srs.listAllUsers(req.query));
});

router.post('/add', (req, res) => {
  srs.registerUser(req.body);
  res.status(200).send('User registrated.');
});

router.post('/delete', (req, res) => {
  srs.deleteUser(req.body);
  res.status(200).send('User deleted.');
});

router.post('/update', (req, res) => {
  srs.updateUser(req.body);
  res.status(200).send('User updated.');
});

router.post('/rent', (req, res) => {
  srs.rentAStuff(req.query.userID, req.query.stuffID);
  res.status(200).send('Rent is registered.');
});

router.post('/back', (req, res) => {
  srs.backAStuff(req.query.userID, req.query.stuffID);
  res.status(200).send('Item is backed.');
});

router.get('/late', async (req, res) => {
  res.status(200).send(await srs.listOfLateness());
});

router.get('/count', async (req, res) => {
  const thenumber = await srs.countByUser(req.query.userID);
  res.status(200).send('it is ready, the count is: ' + thenumber);
});

module.exports = router;
