import express from 'express';
import {
	createSubjects,
	deleteSubjects,
	getAllSubjects,
} from '../../controllers/subjects.controllers';
import isAdmin from '../../middleWare/IsAdmin';
const subjectRouter = express.Router();

subjectRouter.get('/', getAllSubjects);
subjectRouter.post('/', isAdmin('admin'), createSubjects);
subjectRouter.delete('/', isAdmin('admin'), deleteSubjects);
export default subjectRouter;
