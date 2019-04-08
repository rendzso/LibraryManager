import * as express from 'express';
import * as srs from './LibraryService';

const router = express.Router();

router.get('/users', (req, res) => {
  res.status(200).send(srs.listAllUsers());
})

module.exports = router;
