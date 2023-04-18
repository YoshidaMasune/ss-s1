import { main } from './main';
import { RouterMain } from './interface/routerMain';
import { CustomerRouter } from './routers/customer';
import { MitorRouter } from './routers/mitor';
import { MitorRoomRouter } from './routers/mitorRoom';

import express, { urlencoded } from 'express';

const Routers: Array<RouterMain> = [
  {
    endpoint: '/customer',
    route: CustomerRouter,
  },
  {
    endpoint: '/mitor',
    route: MitorRouter,
  },

  {
    endpoint: '/mitor-room',
    route: MitorRoomRouter,
  },
];

const middlewares = [express.json(), urlencoded({ extended: false })];

main(Routers, middlewares);
