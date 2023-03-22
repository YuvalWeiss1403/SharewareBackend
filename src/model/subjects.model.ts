import { Schema } from "mongoose";
import mongoose from "mongoose";
export interface ISubjects {
	name: string;
}

export const subjectsSchema = new Schema<ISubjects>({
	name: { type: String, required: true },
});

export const SubjectsModal = mongoose.model<ISubjects>(
	"subjects",
	subjectsSchema
);
