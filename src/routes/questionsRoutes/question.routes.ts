import express from 'express';
import {
	createQuestions,
	deleteQuestions,
	getAllQuestions,
} from '../../controllers/questions.controllers';
const questionRouter = express.Router();

questionRouter.get('/', getAllQuestions);
questionRouter.post('/', createQuestions);
questionRouter.delete('/', deleteQuestions);
export default questionRouter;
