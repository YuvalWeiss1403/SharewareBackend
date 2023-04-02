import { ObjectId } from 'mongoose';
import { IUser, UsersModal } from '../model/users.model';

export const getUsers = async () => {
	try {
		const users = await UsersModal.find();
		return users;
	} catch (err) {
		throw err;
	}
};
export const createUser = async (user: IUser) => {
	const newUser = new UsersModal(user);
	try {
		await newUser.save();

		return newUser;
	} catch (err) {
		throw err;
	}
};
export const updateUser = async (_id: ObjectId, user: IUser) => {
	try {
		const like = await UsersModal.findByIdAndUpdate(_id, user, { new: true });
		if (like) {
			return like;
		}
	} catch (err) {
		throw err;
	}
};
