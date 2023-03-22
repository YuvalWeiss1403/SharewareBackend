import express from 'express';
import { getAllQuestions } from '../../controllers/questions.controllers';
const questionRouter = express.Router();

questionRouter.get('/', getAllQuestions);
// questionRouter.post('/create', getoldUser);
// questionRouter.post('/', newUser);
export default questionRouter;
