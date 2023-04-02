import {
	createSubject,
	deleteSubject,
	getSubjects,
} from '../service/subjects.service';
import express, { Request, Response } from 'express';
import { SubjectsModal } from '../model/subjects.model';
import { AnswersModal } from '../model/answers.model';
import { deletesAnswer } from '../service/answers.service';

export const getAllSubjects = async (req: Request, res: Response) => {
	try {
		const subjects = await getSubjects();
		return res.status(200).json(subjects);
	} catch (err) {
		throw err;
	}
};
export const createSubjects = async (req: Request, res: Response) => {
	try {
		const { name } = req.body;
		if (!name) {
			return res.status(400).send('All input is required');
		}
		const hasThisSubject = await SubjectsModal.findOne({ name });
		if (hasThisSubject) {
			return res.status(409).send('User Already Exist. Please Login');
		}
		const newTips = await createSubject(req.body);
		res.status(201).json(newTips);
	} catch (err) {
		throw err;
	}
};
export const deleteSubjects = async (req: Request, res: Response) => {
	try {
		const subjects = await deleteSubject(req.body._id);
		return res.status(200).json({
			status: 200,
			data: subjects,
			message: 'Successfully removed subject',
		});
	} catch (err: any) {
		return res.status(500).json({
			status: 500,
			message: 'Internal server error',
		});
	}
};
