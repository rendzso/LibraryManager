import * as express from 'express';
import * as srs from './LibraryService';

const router = express.Router();

router.get('/list', async (req, res) => {
  res.status(200).send(await srs.listAllStuffs(req.query));
});

router.post('/add', (req, res) => {
  srs.addNewStuff(req.body);
  res.status(200).send('Stuff added.');
});

module.exports = router;
