import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as ControllerUser from './LibraryControllerUsers';
import * as ControllerStuff from './LibraryControllerStuffs';

const app = express();

app.use(bodyParser.json());

app.use('/users', ControllerUser);
app.use('/stuffs', ControllerStuff);

app.listen('8080', () => {
  console.log('Server is running');
});

