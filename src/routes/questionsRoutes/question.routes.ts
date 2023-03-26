import express from 'express';
import {
	createQuestions,
	deleteQuestions,
	getAllQuestions,
} from '../../controllers/questions.controllers';
import isAdmin from '../../middleWare/IsAdmin';
const questionRouter = express.Router();

questionRouter.get('/', getAllQuestions);
questionRouter.post('/', isAdmin('admin'), createQuestions);
questionRouter.delete('/', isAdmin('admin'), deleteQuestions);
export default questionRouter;
