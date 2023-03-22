import { ObjectId, Schema } from "mongoose";
import mongoose from "mongoose";
export interface IAnswers {
	questionsId: ObjectId;
	userName: string;
	date: Date;
	title: string;
}

export const answersSchema = new Schema<IAnswers>({
	questionsId: { type: Schema.Types.ObjectId, required: true },
	userName: { type: String, required: true },
	date: { type: Date, required: true },
	title: { type: String, required: true },
});

export const AnswersModal = mongoose.model<IAnswers>("answers", answersSchema);
