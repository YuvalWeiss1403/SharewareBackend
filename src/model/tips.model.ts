import { Schema } from 'mongoose';
import mongoose from 'mongoose';
export interface ITips {
	title: string;
	userName: string;
	approved: boolean;
}

export const tipsSchema = new Schema<ITips>({
	title: { type: String, required: true },
	userName: { type: String, required: true },
	approved: { type: Boolean, required: true },
});

export const TipsModal = mongoose.model<ITips>('tips', tipsSchema);
