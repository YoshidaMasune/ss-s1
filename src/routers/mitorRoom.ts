import { fillDateAndMitor } from '../middlewares/fillDateAndMitor';
import { hasRoomRecorded } from '../middlewares/hasRoomRecorded';
import { validMitor } from '../middlewares/validMitor';
import { validExRoom } from '../middlewares/validRoom';
import mitorRoom from './../controllers/mitorRoom';
import { Router } from 'express';

const router = Router();

router.post('/', validExRoom, hasRoomRecorded, mitorRoom.createHandle);

router.get('/', mitorRoom.readMany);

router.get('/:RID', mitorRoom.readById);

router.put(
  '/:RID',
  fillDateAndMitor,
  validMitor,
  hasRoomRecorded,
  mitorRoom.editById,
);

router.delete('/:RID', mitorRoom.deleteById);

router.delete('/');

router.delete('/', mitorRoom.deleteAll);

export const MitorRoomRouter = router;
