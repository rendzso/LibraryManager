import * as express from 'express';
import * as srs from './LibraryService';

const router = express.Router();

router.get('/list', async (req, res) => {
  res.status(200).send(await srs.listAllStuffs(req.query));
});

router.post('/add', (req, res) => {
  if (req.body.type === undefined || req.body.type === '') {
    res.status(414).send('Type is missing!');
    return;
  }
  if (req.body.author === undefined || req.body.author === '') {
    res.status(414).send('Author is missing!');
    return;
  }
  if (req.body.title === undefined || req.body.title === '') {
    res.status(414).send('Title is missing!');
    return;
  }
  if (req.body.date === undefined || req.body.date === '') {
    res.status(414).send('Date is missing!');
    return;
  }
  if (req.body.stuffID === undefined || req.body.stuffID === '') {
    res.status(414).send('StuffID is missing!');
    return;
  }
  req.body.status = 'open';
  req.body.rentID = 'none';
  srs.addNewStuff(req.body);
  res.status(200).send('Stuff added.');
});

router.get('/rented', async (req, res) => {
  res.status(200).send(await srs.listOfRentedStuffs());
});

module.exports = router;
