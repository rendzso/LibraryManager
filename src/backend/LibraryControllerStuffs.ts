import * as express from 'express';
import * as srs from './LibraryService';

const router = express.Router();

router.get('/list', async (req, res) => {
  res.status(200).send(await srs.listAllStuffs(req.query));
});

router.get('/open', async (req, res) => {
  res.status(200).send(await srs.listAllOpen(req.query));
});

router.post('/add', async (req, res) => {
  if (req.body.type === undefined || req.body.type === '') {
    res.status(414).send({restext: 'Type is missing!'});
    return;
  }
  if (req.body.author === undefined || req.body.author === '') {
    res.status(414).send({restext: 'Author is missing!'});
    return;
  }
  if (req.body.title === undefined || req.body.title === '') {
    res.status(414).send({restext: 'Title is missing!'});
    return;
  }
  if (req.body.date === undefined || req.body.date === '') {
    res.status(414).send({restext: 'Date is missing!'});
    return;
  }
  if (req.body.stuffID === undefined || req.body.stuffID === '') {
    res.status(414).send({restext: 'StuffID is missing!'});
    return;
  }
  req.body.status = 'open';
  req.body.rentID = 'none';
  const valami = await srs.addNewStuff(req.body);
  res.status(200).send({restext: valami});
});

router.get('/rented', async (req, res) => {
  res.status(200).send(await srs.listOfRentedStuffs(req.query));
});

// @ts-ignore
module.exports = router;
