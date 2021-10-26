import { Router } from 'express';

import {
 createUser
} from '../controllers/user.controller';

const authRouter = Router();

authRouter.route('/').post(createUser);

export default authRouter;