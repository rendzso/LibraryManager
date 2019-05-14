import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as ControllerUser from './LibraryControllerUsers';
import * as ControllerStuff from './LibraryControllerStuffs';
import * as cors from 'cors';

const app = express();

const corsOptions = {
  origin: '*',
  originSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(bodyParser.json());

app.use('/users', ControllerUser);
app.use('/stuffs', ControllerStuff);

app.listen(8080, () => {
  console.log('Server is running');
});

