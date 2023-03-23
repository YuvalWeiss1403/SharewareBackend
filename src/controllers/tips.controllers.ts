import { getTips } from '../service/tips.service';
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
