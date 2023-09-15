import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema.js";
import { betSchema } from "../schemas/bet.schema.js";

const betRouter = Router();

betRouter.post('/bets', validateSchema(betSchema));
betRouter.get('/bets',)
betRouter.get('/bets/:houseId',)
betRouter.get('/bets/:sportId',)
betRouter.get('/bets/:id')
betRouter.put('/bets/:id', )
betRouter.delete('/bets/:id', )

export default betRouter;