import { Router, Request, Response } from "express";
export declare class AuthController {
    createUser(req: Request, res: Response): Promise<void>;
    logUser(req: Request, res: Response): Promise<void>;
    me(req: Request, res: Response): Promise<void>;
    buildRoutes(): Router;
}
