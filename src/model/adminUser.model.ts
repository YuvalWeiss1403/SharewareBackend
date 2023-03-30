import { Schema, model, ObjectId } from 'mongoose';
import mongoose from 'mongoose';
export interface IAdminUser {
	firstName: string;
	lastName: string;
	email: string;
}

export const adminUserSchema = new Schema<IAdminUser>({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
});

export const AdminUsersModal = mongoose.model<IAdminUser>(
	'adminusers',
	adminUserSchema
);
