import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import { ObjectId } from 'mongoose';
export interface IAnswers {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	token?: string;
	connect?: boolean;
}

export const answerssSchema = new Schema<IAnswers>({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	token: { type: String, required: false },
	connect: { type: Boolean, required: false },
});

export const QuestionsModal = mongoose.model<IAnswers>(
	'answers',
	answerssSchema
);
