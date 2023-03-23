import express from 'express';
import {
	getAllUsers,
	getOldUser,
	newUser,
} from '../../controllers/users.controllers';
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', getOldUser);
userRouter.post('/create', newUser);
export default userRouter;
