import {
	getTips,
	createTip,
	updateLike,
	deleteTip,
} from '../service/tips.service';
import express, { Request, Response } from 'express';
import { TipsModal } from '../model/tips.model';
import { UsersModal } from '../model/users.model';

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
export const tipLike = async (req: Request, res: Response) => {
	console.log(req.body.userId);
	console.log(req.body);
	try {
		const tipLike = await updateLike(req.body._id, req.body.data);
		const userData = await UsersModal.findById(req.body.userId);
		console.log('userdata', userData);
		if (!userData) {
			return res.status(404).send('user not found');
		}
		userData.tipLiked?.push(req.body._id);
		console.log(userData.tipLiked);
		await userData.save();
		res.status(201).json(tipLike);
	} catch (err) {
		throw err;
	}
};
export const deleteTips = async (req: Request, res: Response) => {
	try {
		const tips = await deleteTip(req.body._id);
		return res.status(200).json({
			status: 200,
			data: tips,
			message: 'Successfully removed tip',
		});
	} catch (err: any) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: 'Internal server error',
		});
	}
};
