import { AdminUsersModal, IAdminUser } from '../model/adminUser.model';

export const getAdminUsers = async () => {
	try {
		const users = await AdminUsersModal.find();
		return users;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export const newAdminUser = async (user: IAdminUser) => {
	const newUser = new AdminUsersModal(user);
	try {
		await newUser.save();
		console.log(newUser)
		return newUser;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
