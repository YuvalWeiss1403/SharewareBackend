import { ObjectId, Schema } from 'mongoose';
import mongoose from 'mongoose';
export interface IAnswers {
	// _id?: ObjectId;
	questionsId?: ObjectId;
	userName?: string;
	date?: Date;
	title?: string;
}

export const answersSchema = new Schema<IAnswers>({
	// _id: { type: Schema.Types.ObjectId, required: true },
	questionsId: { type: Schema.Types.ObjectId, required: false },
	userName: { type: String, required: false },
	date: { type: Date, required: false },
	title: { type: String, required: false },
});

export const AnswersModal = mongoose.model<IAnswers>('answers', answersSchema);
