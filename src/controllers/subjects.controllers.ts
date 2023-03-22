import { getSubjects } from '../service/subjects.service';
import express, { Request, Response } from 'express';
import { SubjectsModal } from '../model/subjects.model';

export const getAllSubjects = async (req: Request, res: Response) => {
	try {
		const subjects = await getSubjects();
		return res.status(200).json(subjects);
	} catch (err) {
		throw err;
	}
};
