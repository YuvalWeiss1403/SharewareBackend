import { IQuestions, QuestionsModal } from '../model/questions.model';

export const getQuestions = async () => {
	try {
		const questions = await QuestionsModal.find();
		return questions;
	} catch (err) {
		throw err;
	}
};
export const createQuestion = async (question: IQuestions) => {
	const newQuestion = new QuestionsModal(question);
	try {
		await newQuestion.save();
		return newQuestion;
	} catch (err) {
		throw err;
	}
};
export const deleteQuestion = async (questionId: string) => {
	try {
		await QuestionsModal.findByIdAndDelete(questionId);
		return await QuestionsModal.find();
	} catch (err) {
		throw err;
	}
};
