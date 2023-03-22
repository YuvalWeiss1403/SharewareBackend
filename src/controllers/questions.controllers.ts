import { getQuestions } from '../service/questions.service';
import express, { Request, Response } from 'express';
import { QuestionsModal } from '../model/questions.model';

export const getAllQuestions = async (req: Request, res: Response) => {
	try {
		const question = await getQuestions();
		return res.status(200).json(question);
	} catch (err) {
		throw err;
	}
};
