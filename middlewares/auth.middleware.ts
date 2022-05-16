import {Request, RequestHandler, Response} from "express";
import {AuthService} from "../services";
import {UserProps} from "../models";

export function checkUserConnected(): RequestHandler {
    return async function (req: Request,res: Response,next){
        const authorization = req.headers['authorization']
        if (authorization === undefined){
            res.status(401).end()
            return
        }
        const parts = authorization.split(" ")
        if (parts.length !== 2) {
            res.status(401)
            return;
        }
        if (parts[0] !== "Bearer"){
            res.status(401)
            return;
        }
        const token = parts[1]
        const user = await AuthService.getInstance().getUserFrom(token)
        if (user === null){
            res.status(401)
            return;
        }
        req.user = user
        next()
    }
}

declare module 'express' {
    export interface Request {
        user?: UserProps
    }
}