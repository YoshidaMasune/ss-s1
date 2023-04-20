import { fillDateAndMitor } from '../middlewares/fillDateAndMitor';
import { hasRoomRecorded } from '../middlewares/hasRoomRecorded';
import { validExRoom } from '../middlewares/validRoom';
import { MitorRoomControll } from './../controllers/mitorRoom';
import { Router } from 'express';

const router = Router();
const controll = MitorRoomControll();

router.post('/', validExRoom, hasRoomRecorded, controll.createHandle);

router.get('/', controll.readMany);

router.get('/:RID', controll.readById);

router.put('/:RID', fillDateAndMitor, hasRoomRecorded, controll.editById);

router.delete('/:RID', controll.deleteById);

router.delete('/');

router.delete('/', controll.deleteAll);

export const MitorRoomRouter = router;
