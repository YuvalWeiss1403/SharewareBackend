import {
	createAnswers,
	deleteAnswers,
	getanswers,
} from '../service/answers.service';
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
export const createAnswer = async (req: Request, res: Response) => {
	console.log(req.body);
	try {
		console.log(req.body);
		const newAnswer = await createAnswers(req.body);
		res.status(201).json(newAnswer);
	} catch (err) {
		throw err;
	}
};
export const deleteAnswer = async (req: Request, res: Response) => {
	console.log(req.body);
	try {
		const answer = await deleteAnswers(req.body._id);
		return res.status(200).json({
			status: 200,
			data: answer,
			message: 'Successfully removed chef',
		});
	} catch (err: any) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: 'Internal server error',
		});
	}
};
