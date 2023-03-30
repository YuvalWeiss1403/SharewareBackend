import express from 'express';
import {
	getAllUsers,
	getOldUser,
	newUser,
	userLike,
} from '../../controllers/users.controllers';
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', getOldUser);
userRouter.put('/', userLike);
userRouter.post('/create', newUser);
export default userRouter;
