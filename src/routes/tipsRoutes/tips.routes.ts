import express from 'express';
import { getAllTips } from '../../controllers/tips.controllers';
const tipsRouter = express.Router();

tipsRouter.get('/', getAllTips);
// tipsRouter.post('/', createTips);
export default tipsRouter;
