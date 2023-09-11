import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { houseSchema } from "../schemas/house.schema.js";

const houseRouter = Router();

houseRouter.post('/houses', validateSchema(houseSchema), );
houseRouter.get('/houses', )

export default houseRouter;