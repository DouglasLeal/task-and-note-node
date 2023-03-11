import {validate, Joi} from "express-validation";

const validationRules = {
    body: Joi.object({
        conteudo: Joi.string(),
        concluido: Joi.boolean()
    })
}

export default validate(validationRules);