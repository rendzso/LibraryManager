import * as express from 'express';
import * as LibraryDAO from './LibraryDAO';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req: any, res: any) => res.send('hi'));
app.get('/users', LibraryDAO.readAll);

app.listen('8080', () => {
  console.log('Server is running');
});

