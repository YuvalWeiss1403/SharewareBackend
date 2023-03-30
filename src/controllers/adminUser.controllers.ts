import express, { Request, Response } from 'express';
import { AdminUsersModal } from '../model/adminUser.model';
import { getAdminUsers, newAdminUser } from '../service/adminUser.service';

export const getallAdminUser = async (req: Request, res: Response) => {
	try {
		const users = await getAdminUsers();
		return res.status(200).json(users);
	} catch (err) {
		throw err;
	}
};
export const newAdminUsers = async (req: Request, res: Response) => {
	try {
		const { firstName, lastName, email } = req.body;
		if (!(firstName && lastName && email)) {
			return res.status(400).send('All input is required');
		}
		const oldUser = await AdminUsersModal.findOne({ email });
		if (oldUser) {
			return res.status(409).send('User Already Exist. Please Login');
		}
		const user = await AdminUsersModal.create({
			firstName,
			lastName,
			email: email.toLowerCase(), // sanitize: convert email to lowercase
		});
		user.save();
		const newuser = await newAdminUser(user);
		res.status(201).json(newuser);
	} catch (err) {
		throw err;
	}
};
