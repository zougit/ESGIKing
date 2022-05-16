import { CoffeeDocument, CoffeeProps } from "../models";
export declare class CoffeeService {
    private static instance?;
    static getInstance(): CoffeeService;
    private constructor();
    createCoffee(props: CoffeeProps): Promise<CoffeeDocument>;
    getAll(): Promise<CoffeeDocument[]>;
    getById(coffeeId: string): Promise<CoffeeDocument | null>;
    deleteById(coffeeId: string): Promise<boolean>;
    updateById(coffeeId: string, props: CoffeeProps): Promise<CoffeeDocument | null>;
}
