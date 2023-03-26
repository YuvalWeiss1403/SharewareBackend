import express from 'express';
import {
	createAnswer,
	deleteAnswer,
	getAllAnswers,
} from '../../controllers/answers.controllers';
import IsAdmin from '../../middleWare/IsAdmin';
const answersRouter = express.Router();

answersRouter.get('/', getAllAnswers);
answersRouter.post('/', IsAdmin('admin'), createAnswer);
answersRouter.delete('/', IsAdmin('admin'), deleteAnswer);
export default answersRouter;
