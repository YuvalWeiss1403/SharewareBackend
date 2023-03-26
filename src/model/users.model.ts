import { Schema, model, ObjectId } from 'mongoose';
import mongoose from 'mongoose';
export interface IUser {
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
	token?: string;
	userType?: string;
	tipLiked?: string[];
}

export const userSchema = new Schema<IUser>({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	userName: { type: String, required: false },
	email: { type: String, required: true },
	password: { type: String, required: true },
	token: { type: String, required: false },
	userType: { type: String, default: 'user' },
	tipLiked: { type: [String], default: [] },
});

export const UsersModal = mongoose.model<IUser>('users', userSchema);
