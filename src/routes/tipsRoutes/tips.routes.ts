import express from 'express';
import {
	deleteTips,
	getAllTips,
	newTip,
	tipLike,
} from '../../controllers/tips.controllers';
const tipsRouter = express.Router();
const middleWare = require('../../middleWare/IsAdmin');
tipsRouter.get('/', getAllTips);
tipsRouter.post('/', newTip);
tipsRouter.put('/', tipLike);
tipsRouter.delete('/', middleWare.adminVerify('admin'), deleteTips);
export default tipsRouter;
