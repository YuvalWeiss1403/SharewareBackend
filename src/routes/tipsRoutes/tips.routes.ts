import express from 'express';
import {
	deleteTips,
	getAllTips,
	newTip,
	tipLike,
} from '../../controllers/tips.controllers';
const tipsRouter = express.Router();

tipsRouter.get('/', getAllTips);
tipsRouter.post('/', newTip);
tipsRouter.put('/', tipLike);
tipsRouter.delete('/', deleteTips);
export default tipsRouter;
