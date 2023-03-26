import express from 'express';
import {
	createSubjects,
	deleteSubjects,
	getAllSubjects,
} from '../../controllers/subjects.controllers';
const subjectRouter = express.Router();
const middleWare = require('../../middleWare/IsAdmin');
subjectRouter.get('/', getAllSubjects);
subjectRouter.post('/', middleWare.adminVerify('admin'), createSubjects);
subjectRouter.delete('/', middleWare.adminVerify('admin'), deleteSubjects);
export default subjectRouter;
