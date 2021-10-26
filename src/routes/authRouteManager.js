import { Router } from 'express';

import {
 authentication
} from '../controllers/auth.controller';

const authRouter = Router();

authRouter.route('/').post(authentication);

export default authRouter;