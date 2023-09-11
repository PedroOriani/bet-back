import { Router } from "express";
import houseRouter from "./houses.routes.js";
import sportRouter from "./sports.routes.js";
import betRouter from "./bets.routes.js";

const indexRouter = Router();

indexRouter.use(houseRouter);
indexRouter.use(sportRouter);
indexRouter.use(betRouter);

export default indexRouter;