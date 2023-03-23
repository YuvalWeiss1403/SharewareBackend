import { ObjectId } from 'mongoose';
import { ITips, TipsModal } from '../model/tips.model';

export const getTips = async () => {
	try {
		const Tips = await TipsModal.find();
		return Tips;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const createTip = async (tip: ITips) => {
	const newTip = new TipsModal(tip);
	try {
		await newTip.save();
		return newTip;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const updateLike = async (_id: ObjectId, tips: ITips) => {
	try {
		const like = await TipsModal.findByIdAndUpdate(_id, tips, { new: true });
		console.log(like);
		if (like) {
			return like;
		}
	} catch (err) {
		console.log(err);
		throw err;
	}
};
