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
