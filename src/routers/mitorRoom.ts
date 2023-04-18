import { MitorControll } from './../controllers/mitorRoom';
import { Router } from 'express';

const router = Router();
const controll = MitorControll();

router.post('/', controll.createHandle);

export const MitorRoomRouter = router;
