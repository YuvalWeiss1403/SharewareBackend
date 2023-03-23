import { getTips, createTip } from '../service/tips.service';
import express, { Request, Response } from 'express';
import { TipsModal } from '../model/tips.model';

export const getAllTips = async (req: Request, res: Response) => {
	try {
		const tips = await getTips();
		return res.status(200).json(tips);
	} catch (err) {
		throw err;
	}
};
export const newTip = async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		const { title, username, comment } = req.body;
		if (!(title && username && comment)) {
			return res.status(400).send('All input is required');
		}
		const newTips = await createTip(req.body);
		res.status(201).json(newTips);
	} catch (err) {
		throw err;
	}
};
