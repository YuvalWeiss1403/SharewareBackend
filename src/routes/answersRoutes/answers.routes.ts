import express from 'express';
import {
	createAnswer,
	deleteAnswer,
	getAllAnswers,
} from '../../controllers/answers.controllers';
const answersRouter = express.Router();

answersRouter.get('/', getAllAnswers);
answersRouter.post('/', createAnswer);
answersRouter.delete('/', deleteAnswer);
export default answersRouter;
