import express from 'express';
import {
	createQuestions,
	deleteQuestions,
	getAllQuestions,
} from '../../controllers/questions.controllers';
import IsAdmin from '../../middleWare/IsAdmin';
const questionRouter = express.Router();

questionRouter.get('/', getAllQuestions);
questionRouter.post('/', IsAdmin('admin'), createQuestions);
questionRouter.delete('/', IsAdmin('admin'), deleteQuestions);
export default questionRouter;
