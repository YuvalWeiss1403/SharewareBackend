import express from 'express';
import {
	createSubjects,
	deleteSubjects,
	getAllSubjects,
} from '../../controllers/subjects.controllers';
import IsAdmin from '../../middleWare/IsAdmin';
const subjectRouter = express.Router();

subjectRouter.get('/', getAllSubjects);
subjectRouter.post('/', IsAdmin('admin'), createSubjects);
subjectRouter.delete('/', IsAdmin('admin'), deleteSubjects);
export default subjectRouter;
