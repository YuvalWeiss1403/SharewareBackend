import {
	createQuestion,
	deleteQuestion,
	getQuestions,
} from '../service/questions.service';
import express, { Request, Response } from 'express';
import { QuestionsModal } from '../model/questions.model';
import { AnswersModal } from '../model/answers.model';
import { deletesAnswer } from '../service/answers.service';

export const getAllQuestions = async (req: Request, res: Response) => {
	try {
		const question = await getQuestions();
		return res.status(200).json(question);
	} catch (err) {
		throw err;
	}
};
export const createQuestions = async (req: Request, res: Response) => {
	console.log(req.body);
	try {
		const newQuestion = await createQuestion(req.body);
		res.status(201).json(newQuestion);
	} catch (err) {
		throw err;
	}
};
export const deleteQuestions = async (req: Request, res: Response) => {
	try {
		const answers = await AnswersModal.find();
		const filterData = answers.filter((question: any) => {
			return String(question.questionsId) == req.body._id;
		});
		const deleteAnswer = await deletesAnswer(filterData);
		const question = await deleteQuestion(req.body._id);
		return res.status(200).json({
			status: 200,
			data: question,
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
