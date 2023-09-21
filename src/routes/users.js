import express from 'express';
import { allUsersPage } from '../controllers';
const usersRouter = express.Router();

usersRouter.get('/', allUsersPage);

export default usersRouter;
