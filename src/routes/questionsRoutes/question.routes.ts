import express from 'express';
import {
	createQuestions,
	deleteQuestions,
	getAllQuestions,
} from '../../controllers/questions.controllers';
const questionRouter = express.Router();
const middleWare = require('../../middleWare/IsAdmin');
questionRouter.get('/', getAllQuestions);
questionRouter.post('/', createQuestions);
questionRouter.delete('/', middleWare.adminVerify('admin'), deleteQuestions);
export default questionRouter;
