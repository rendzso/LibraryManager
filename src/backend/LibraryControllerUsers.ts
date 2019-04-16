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

module.exports = router;
