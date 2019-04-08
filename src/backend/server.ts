import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as Controller from './LibraryController';
import * as dao from './LibraryDAO';

const app = express();

app.use(bodyParser.json());

app.use('/', Controller);

console.log(dao.readAll());

app.listen('8080', () => {
  console.log('Server is running');
});

