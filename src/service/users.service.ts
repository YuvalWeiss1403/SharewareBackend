import { IUser, UsersModal } from '../model/users.model';

export const getUsers = async () => {
	try {
		const users = await UsersModal.find();
		return users;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export const createUser = async (user: IUser) => {
	const newUser = new UsersModal(user);
	try {
		await newUser.save();
		return newUser;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
