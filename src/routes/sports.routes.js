import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { sportSchema } from "../schemas/sport.schema.js";
import sportsControllers from "../controllers/sports.controllers.js";

const sportRouter = Router();

sportRouter.post('/sports', validateSchema(sportSchema), sportsControllers.create);
sportRouter.get('/sports', sportsControllers.read);

export default sportRouter;