import express from 'express';
import {
	getallAdminUser,
	newAdminUsers,
} from '../../controllers/adminUser.controllers';
const middleWare = require('../../middleWare/IsAdmin');
const adminUserRouter = express.Router();
adminUserRouter.get('/', getallAdminUser);
adminUserRouter.post('/create', middleWare.adminVerify('admin'), newAdminUsers);
export default adminUserRouter;
