import express from 'express';
import {
	getAllTips,
	newTip,
	tipLike,
} from '../../controllers/tips.controllers';
const tipsRouter = express.Router();

tipsRouter.get('/', getAllTips);
tipsRouter.post('/', newTip);
tipsRouter.put('/', tipLike);
export default tipsRouter;
