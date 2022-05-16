import { RequestHandler } from "express";
import { UserProps } from "../models";
export declare function checkUserConnected(): RequestHandler;
declare module 'express' {
    interface Request {
        user?: UserProps;
    }
}
