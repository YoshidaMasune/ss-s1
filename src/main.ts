import mongoose from 'mongoose';
import express, { Application, Express, Router, urlencoded } from 'express';
import dotenv from 'dotenv';
import { RouterMain } from './interface/routerMain';

dotenv.config();
const { MONGO_URI } = process.env;
const PORT = process.env.PORT || 5001;

export const main = (Routers: Array<RouterMain>) => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  /*
   * GENARATE ROUTES WITH RECURSIVE Function
   */
  genRoutes(app, Routers);

  /**
   * CONNECT DATABASE
   */
  if (MONGO_URI === undefined) {
    console.log('mongodb URI is not defined');
  } else {
    mongoose
      .connect(MONGO_URI)
      .then(() => {
        app.listen(PORT, () =>
          console.log(`server run at http://localhost:${PORT}/`),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const genRoutes = (
  app: Application,
  Routers: Array<RouterMain>,
): Application | undefined => {
  if (Routers.length === 0 || undefined) {
    return undefined;
  } else {
    const curRoute = Routers[0];
    app.use(curRoute.endpoint, curRoute.route);
    return genRoutes(app, Routers.slice(1, Routers.length));
  }
};
