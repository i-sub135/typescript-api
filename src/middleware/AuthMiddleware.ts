import { Request, Response, NextFunction } from 'express'

export const auth = (req:Request, res:Response, next : NextFunction): any => {
    // console.log("ini middle ware");
    let {token} = req.headers
    // console.log(token);

    let env = process.env
    if (!token) {
        
        let out = {
            code: 400,
            message: "BadRequest",
            error : "token Not Empty"
        }
        res.status(out.code)
        res.send(out)
        return
    }
    if (token != env.INVOCATION_ID) {
        
        let out = {
            code: 400,
            message: "BadRequest",
            error : "token Not Valid"
        }
        res.status(out.code)
        res.send(out)
        return
    }

    
    next()
    
}