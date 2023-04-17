import { RouterMain } from './interface/routerMain';
import { main } from './main';
import { CustomerRouter } from './routers/customer';
import { MitorRouter } from './routers/mitor';

const Routers: Array<RouterMain> = [
  {
    endpoint: '/customer',
    route: CustomerRouter,
  },
  {
    endpoint: '/mitor',
    route: MitorRouter,
  },
];

main(Routers);
