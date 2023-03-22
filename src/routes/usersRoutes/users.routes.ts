import express from 'express';
import { getAllUsers } from '../../controllers/users.controllers';
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
// userRouter.post('/create', getoldUser);
// userRouter.post('/', newUser);
export default userRouter;
