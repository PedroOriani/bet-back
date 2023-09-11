import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { sportSchema } from "../schemas/sport.schema.js";

const sportRouter = Router();

sportRouter.post('/sports', validateSchema(sportSchema), );
sportRouter.get('/sports', );

export default sportRouter;