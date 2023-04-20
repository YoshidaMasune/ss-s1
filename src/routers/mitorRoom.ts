import { hasRoomRecorded } from '../middlewares/hasRoomRecorded';
import { MitorControll } from './../controllers/mitorRoom';
import { Router } from 'express';

const router = Router();
const controll = MitorControll();

router.post('/', hasRoomRecorded, controll.createHandle);

router.get('/', controll.readMany);

router.get('/:RID', controll.readById);

router.put('/:RID', hasRoomRecorded, controll.editById);

export const MitorRoomRouter = router;
