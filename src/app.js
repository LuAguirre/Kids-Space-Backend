import express from 'express';
import cors from 'cors';

import temporary from './routes/temporary';

const app = express();

app.set('port', process.env.PORT || 5500);
app.use(cors());
app.use(express.json());

app.use('/api/user/temporary', temporary);

export { app };
