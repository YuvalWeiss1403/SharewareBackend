import { Schema } from 'mongoose';
import mongoose from 'mongoose';
export interface ITips {
	title: string;
	username: string;
	approved?: boolean;
	likes: number;
	comment: string;
	userId: string;
}

export const tipsSchema = new Schema<ITips>({
	title: { type: String, required: true },
	username: { type: String, required: true },
	comment: { type: String, required: true },
	likes: { type: Number, required: true },
	approved: { type: Boolean, required: false },
	userId: { type: String, required: true },
});

export const TipsModal = mongoose.model<ITips>('tips', tipsSchema);
