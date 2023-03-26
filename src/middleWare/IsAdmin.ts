import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
const IsAdmin =
	(admin: string) =>
	async (req: Request, res: Response, next: NextFunction) => {
		const token = req.headers.authorization?.startsWith('Bearer ')
			? req.headers.authorization.split(' ')[1]
			: undefined;
		// console.log(token);
		if (!token) {
			return res?.status(400).json({ message: 'no verify found' });
		}
		try {
			const user = jwt.verify(token, process.env.TOKEN_KEY as string) as {
				userType: string;
			};
			if (user.userType === admin) {
				next();
			} else {
				return res
					.status(401)
					.json({ message: 'You are not authorized to perform this action.' });
			}
		} catch (error) {
			return res
				.status(401)
				.json({ message: 'You are not authorized to perform this action.' });
		}
	};

export default IsAdmin;
