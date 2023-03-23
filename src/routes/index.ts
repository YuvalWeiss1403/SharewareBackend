import express from 'express';
import answers from '../routes/answersRoutes/answers.routes';
import questions from '../routes/questionsRoutes/question.routes';
import subjects from '../routes/subjectsRoutes/subjects.routes';
import users from '../routes/usersRoutes/users.routes';
import tips from '../routes/tipsRoutes/tips.routes';
const router = express.Router();

router.use('/answers', answers);
router.use('/questions', questions);
router.use('/subjects', subjects);
router.use('/users', users);
router.use('/tips', tips);

export default router;
