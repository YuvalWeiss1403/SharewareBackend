import express from 'express';
import {
	deleteTips,
	getAllTips,
	newTip,
	tipLike,
} from '../../controllers/tips.controllers';
import isAdmin from '../../middleWare/IsAdmin';
const tipsRouter = express.Router();

tipsRouter.get('/', getAllTips);
tipsRouter.post('/', isAdmin('admin'), newTip);
tipsRouter.put('/', tipLike);
tipsRouter.delete('/', isAdmin('admin'), deleteTips);
export default tipsRouter;
