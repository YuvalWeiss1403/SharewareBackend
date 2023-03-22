import { IAnswers, AnswersModal } from '../model/answers.model';

export const getanswers = async () => {
	try {
		const answers = await AnswersModal.find();
		return answers;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const createAnswers = async (answers: IAnswers) => {
	const newAnswers = new AnswersModal(answers);
	try {
		await newAnswers.save();
		return newAnswers;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const deleteAnswers = async (answersId: string) => {
	try {
		await AnswersModal.findByIdAndDelete(answersId);
		return await AnswersModal.find();
	} catch (err) {
		console.log(err);
		throw err;
	}
};
