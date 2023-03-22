import express from 'express';
import { getAllAnswers } from '../../controllers/answers.controllers';
const answersRouter = express.Router();

answersRouter.get('/', getAllAnswers);
// answersRouter.post('/create', getoldUser);
// answersRouter.post('/', newUser);
export default answersRouter;
