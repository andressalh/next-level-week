import express from 'express';
import path from 'path';
import routes from  './routes';
import cors from 'cors';
const app = express();
import { errors} from 'celebrate';

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

const PORT = process.env.PORT || 3003
app.listen(PORT);