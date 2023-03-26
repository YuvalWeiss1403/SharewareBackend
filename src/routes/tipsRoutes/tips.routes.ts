import express from 'express';
import {
	deleteTips,
	getAllTips,
	newTip,
	tipLike,
} from '../../controllers/tips.controllers';
import IsAdmin from '../../middleWare/IsAdmin';
const tipsRouter = express.Router();

tipsRouter.get('/', getAllTips);
tipsRouter.post('/', IsAdmin('admin'), newTip);
tipsRouter.put('/', tipLike);
tipsRouter.delete('/', IsAdmin('admin'), deleteTips);
export default tipsRouter;
