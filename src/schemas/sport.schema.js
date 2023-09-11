import Joi from "joi";

export const sportSchema = Joi.object({
    name: Joi.string().required()
})