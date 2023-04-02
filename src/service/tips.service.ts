import { ObjectId } from 'mongoose';
import { ITips, TipsModal } from '../model/tips.model';

export const getTips = async () => {
	try {
		const Tips = await TipsModal.find();
		return Tips;
	} catch (err) {
		throw err;
	}
};
export const createTip = async (tip: ITips) => {
	const newTip = new TipsModal(tip);
	try {
		await newTip.save();
		return newTip;
	} catch (err) {
		throw err;
	}
};
export const updateLike = async (_id: ObjectId, tips: ITips) => {
	try {
		const like = await TipsModal.findByIdAndUpdate(_id, tips, { new: true });
		if (like) {
			return like;
		}
	} catch (err) {
		throw err;
	}
};
export const deleteTip = async (tipId: string) => {
	try {
		await TipsModal.findByIdAndDelete(tipId);
		return await TipsModal.find();
	} catch (err) {
		throw err;
	}
};
