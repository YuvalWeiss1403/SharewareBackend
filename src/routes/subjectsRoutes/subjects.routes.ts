import express from 'express';
import {
	createSubjects,
	deleteSubjects,
	getAllSubjects,
} from '../../controllers/subjects.controllers';
const subjectRouter = express.Router();

subjectRouter.get('/', getAllSubjects);
subjectRouter.post('/', createSubjects);
subjectRouter.delete('/', deleteSubjects);
export default subjectRouter;
