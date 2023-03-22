import { getanswers } from '../service/answers.service';
import express, { Request, Response } from 'express';
import { AnswersModal } from '../model/answers.model';

export const getAllAnswers = async (req: Request, res: Response) => {
	try {
		const answer = await getanswers();
		return res.status(200).json(answer);
	} catch (err) {
		throw err;
	}
};
