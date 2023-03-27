import { getUsers, createUser, updateUser } from '../service/users.service';
import express, { Request, Response } from 'express';
import { UsersModal } from '../model/users.model';
let bcrypt = require('bcrypt');
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const tokenKey = process.env.TOKEN_KEY || 'default_value';

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await getUsers();
		return res.status(200).json(users);
	} catch (err) {
		throw err;
	}
};

export const newUser = async (req: Request, res: Response) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		if (!(firstName && lastName && email && password)) {
			return res.status(400).send('All input is required');
		}
		const oldUser = await UsersModal.findOne({ email });
		if (oldUser) {
			return res.status(409).send('User Already Exist. Please Login');
		}
		const encryptedPassword = await bcrypt.hash(password, 10);
		const user = await UsersModal.create({
			firstName,
			lastName,
			email: email.toLowerCase(), // sanitize: convert email to lowercase
			password: encryptedPassword,
		});
		const token = jwt.sign(
			{ user_id: user._id, email, userType: user.userType },
			tokenKey,
			{
				expiresIn: '2h',
			}
		);

		user.token = token;
		user.save();
		const newuser = await createUser(user);
		res.status(201).json(newuser);
	} catch (err) {
		throw err;
	}
};

export const getOldUser = async function (req: Request, res: Response) {
	try {
		const { email, password } = req.body;
		if (!(email && password)) {
			res.status(400).send('All input is required');
		}
		const user = await UsersModal.findOne({ email });

		if (user && (await bcrypt.compare(password, user.password))) {
			const token = jwt.sign(
				{ user_id: user._id, email, userType: user.userType },
				tokenKey,
				{
					expiresIn: '2h',
				}
			);

			user.token = token;
			res.status(201).json(user);
		}
	} catch (err) {
		throw err;
	}
};
export const userLike = async (req: Request, res: Response) => {
	console.log(req.body.userId);
	console.log(req.body);
	try {
		const tipLike = await updateUser(req.body._id, req.body.data);
		res.status(201).json(tipLike);
	} catch (err) {
		throw err;
	}
};
