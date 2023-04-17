import { Router } from "express";

const router = Router();

router.get('/', (req, res, next) => {
  res.send('test')
})

export const CustomerRouter = router;