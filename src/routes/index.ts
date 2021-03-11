import { Router } from 'express';
import chat from './chat';

const router: Router = Router();

router.use('/', chat);

export default router;
