import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { houseSchema } from "../schemas/house.schema.js";
import housesControllers from "../controllers/houses.controllers.js";

const houseRouter = Router();

houseRouter.post('/houses', validateSchema(houseSchema), housesControllers.create);
houseRouter.get('/houses', housesControllers.read)

export default houseRouter;