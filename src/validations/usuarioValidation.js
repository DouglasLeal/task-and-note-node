import {validate, Joi} from "express-validation";

const validationRules = {
    body: Joi.object({
        nome: Joi.string(),
        email: Joi.string().email().required(),
        senha: Joi.string().required(),
    })
}

export default validate(validationRules);