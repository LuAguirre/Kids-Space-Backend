import express from 'express';
import cors from 'cors';

import authRouteManager from './routes/authRouteManager';

const app = express();

app.set('port', process.env.PORT || 5500);
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouteManager);
//app.use('/api/users', authRouteManager);

//{username, password} -> /api/auth:Post -> if exists user with the ingresed password => return userInfo => throw Error
//(toda la info mierda) => /api/users/:Post => createuser => redirecto to Login -> login flow
export { app };
