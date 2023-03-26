import express from 'express';
import {
	createAnswer,
	deleteAnswer,
	getAllAnswers,
} from '../../controllers/answers.controllers';
import isAdmin from '../../middleWare/IsAdmin';
const answersRouter = express.Router();

answersRouter.get('/', getAllAnswers);
answersRouter.post('/', isAdmin('admin'), createAnswer);
answersRouter.delete('/', isAdmin('admin'), deleteAnswer);
export default answersRouter;
