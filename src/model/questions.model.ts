import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import { ObjectId } from 'mongoose';
export interface IQuestions {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	token?: string;
	connect?: boolean;
}

export const questionsSchema = new Schema<IQuestions>({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	token: { type: String, required: false },
	connect: { type: Boolean, required: false },
});

export const QuestionsModal = mongoose.model<IQuestions>(
	'questions',
	questionsSchema
);
