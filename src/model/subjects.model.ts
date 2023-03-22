import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import { ObjectId } from 'mongoose';
export interface ISubjects {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	token?: string;
	connect?: boolean;
}

export const subjectsSchema = new Schema<ISubjects>({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	token: { type: String, required: false },
	connect: { type: Boolean, required: false },
});

export const SubjectsModal = mongoose.model<ISubjects>(
	'subjects',
	subjectsSchema
);
