import express from 'express';
import { getAllSubjects } from '../../controllers/subjects.controllers';
const subjectRouter = express.Router();

subjectRouter.get('/', getAllSubjects);
// subjectRouter.post('/create', getoldUser);
// subjectRouter.post('/', newUser);
export default subjectRouter;
