import {validate, Joi} from "express-validation";

const validationRules = {
    body: Joi.object({
        titulo: Joi.string().required(),
        conteudo: Joi.string().required(),
        cor: Joi.string().required(),
        categoria: Joi.any().required(),
    })
}

export default validate(validationRules);