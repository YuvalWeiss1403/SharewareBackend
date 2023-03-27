import { ObjectId, Schema } from 'mongoose';
import mongoose from 'mongoose';
export interface IQuestions {
	userName: string;
	date: Date;
	title: string;
	subjectId: string;
	question: string;
	answers: [ObjectId];
}

export const questionsSchema = new Schema<IQuestions>({
	userName: { type: String, required: true },
	date: { type: Date, required: true },
	title: { type: String, required: true },
	subjectId: { type: String, required: true },
	question: { type: String, required: true },
	answers: { type: [Schema.Types.ObjectId], required: false },
});

export const QuestionsModal = mongoose.model<IQuestions>(
	'questions',
	questionsSchema
);
