import Joi from 'joi';

export const betSchema = Joi.object({
    houseId: Joi.number().integer().required(),
    sportId: Joi.number().integer().required(),
    value: Joi.number().precision(2).required(),
    returnValue: Joi.number().precision(2).required(),
    description: Joi.string().required()
})