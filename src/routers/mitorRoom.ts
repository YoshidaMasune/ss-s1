import { hasRoomRecorded } from '../middlewares/hasRoomRecorded';
import { MitorControll } from './../controllers/mitorRoom';
import { Router } from 'express';

const router = Router();
const controll = MitorControll();

router.post('/', hasRoomRecorded, controll.createHandle);

// router.get('/', controll.readMany);

router.get('/', controll.read);

export const MitorRoomRouter = router;
