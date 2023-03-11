import { ValidationError } from "express-validation";

class HandleErrorMiddleware{
    static handle(error, req, res, next){
        if(error instanceof ValidationError){
            return res.status(error.statusCode).json(error);
        }
    }
}

export default HandleErrorMiddleware;