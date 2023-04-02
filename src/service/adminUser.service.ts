import { AdminUsersModal, IAdminUser } from '../model/adminUser.model';

export const getAdminUsers = async () => {
	try {
		const users = await AdminUsersModal.find();
		return users;
	} catch (err) {
		throw err;
	}
};

export const newAdminUser = async (user: IAdminUser) => {
	const newUser = new AdminUsersModal(user);
	try {
		await newUser.save();
		return newUser;
	} catch (err) {
		throw err;
	}
};
