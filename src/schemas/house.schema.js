import Joi from "joi";

export const houseSchema = Joi.object({
    name: Joi.string().required()
})