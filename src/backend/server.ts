import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as Controller from './LibraryControllerUsers';

const app = express();

app.use(bodyParser.json());

app.use('/', Controller);

app.listen('8080', () => {
  console.log('Server is running');
});

