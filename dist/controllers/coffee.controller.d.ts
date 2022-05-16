import { Router, Request, Response } from "express";
export declare class CoffeeController {
    createCoffee(req: Request, res: Response): Promise<void>;
    getAllCoffees(req: Request, res: Response): Promise<void>;
    getCoffee(req: Request, res: Response): Promise<void>;
    deleteCoffee(req: Request, res: Response): Promise<void>;
    updateCoffee(req: Request, res: Response): Promise<void>;
    buildRoutes(): Router;
}
