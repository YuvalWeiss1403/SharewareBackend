import { IAnswers, AnswersModal } from '../model/answers.model';

export const getanswers = async () => {
	try {
		const answers = await AnswersModal.find();
		return answers;
	} catch (err) {
		throw err;
	}
};
export const createAnswers = async (answers: IAnswers) => {
	const newAnswers = new AnswersModal(answers);
	try {
		await newAnswers.save();
		return newAnswers;
	} catch (err) {
		throw err;
	}
};
export const deleteAnswers = async (answersId: string) => {
	try {
		await AnswersModal.findByIdAndDelete(answersId);
		return await AnswersModal.find();
	} catch (err) {
		throw err;
	}
};
export const deletesAnswer = async (arrayAnswer: IAnswers[]) => {
	try {
		arrayAnswer.map(async (oneAnswer: any) => {
			await AnswersModal.findByIdAndDelete(oneAnswer._id);
		});
		return await AnswersModal.find();
	} catch (err) {
		throw err;
	}
};
