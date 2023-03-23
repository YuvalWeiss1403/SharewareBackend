import express from 'express';
import { getAllTips, newTip } from '../../controllers/tips.controllers';
const tipsRouter = express.Router();

tipsRouter.get('/', getAllTips);
tipsRouter.post('/', newTip);
export default tipsRouter;
