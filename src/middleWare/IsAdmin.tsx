import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
const isAdmin =
	(admin: string) =>
	async (req: Request, res: Response, next: NextFunction) => {
		const authHeader = req.headers.authorization;
		const id = req.body.userId;
		if (!authHeader) {
			return res.status(403).send('access denied');
		}
		const token = authHeader.split('')[1];
		if (!token) {
			return res.status(401).json({ message: 'No JWT token provied.' });
		}
		try {
			const decodedToken = jwt.verify(token, process.env.TOKENKEY) as {
				_id: string;
				isAdmin: boolean;
			};
			if (!decodedToken) {
				return res
					.status(401)
					.json({ message: 'You are not authorised to perform this action' });
			}
			next();
		} catch (err) {
			return res.status(401).json({ message: 'Invaid JWT token' });
		}
	};

export default isAdmin;
