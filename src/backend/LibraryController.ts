import * as express from 'express';
import * as srs from './LibraryService';

const router = express.Router();

router.get('/users/list', async (req, res) => {
  res.status(200).send(await srs.listAllUsers());
})

router.post('/users/add', (req, res) => {
  srs.registerUser(req.body);
  res.status(200).send('User registrated.');
})

router.post('/users/delete', (req, res) => {
  srs.deleteUser(req.body);
  res.status(200).send('User deleted.');
})

module.exports = router;
