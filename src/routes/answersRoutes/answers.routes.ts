import express from 'express';
import {
	createAnswer,
	deleteAnswer,
	getAllAnswers,
} from '../../controllers/answers.controllers';

const answersRouter = express.Router();
const middleWare = require('../../middleWare/IsAdmin');
answersRouter.get('/', getAllAnswers);
answersRouter.post('/', createAnswer);
answersRouter.delete('/', middleWare.adminVerify('admin'), deleteAnswer);
export default answersRouter;
