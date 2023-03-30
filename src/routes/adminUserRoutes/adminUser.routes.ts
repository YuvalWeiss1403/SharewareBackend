import express from 'express';
import {
	getallAdminUser,
	newAdminUsers,
} from '../../controllers/adminUser.controllers';
const adminUserRouter = express.Router();

adminUserRouter.get('/', getallAdminUser);
adminUserRouter.post('/create', newAdminUsers);
export default adminUserRouter;
