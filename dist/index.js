"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const mongoose_1 = __importDefault(require("mongoose"));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const m = yield mongoose_1.default.connect(process.env.MONGO_URI, {
            auth: {
                username: process.env.MONGO_USER,
                password: process.env.MONGO_PASSWORD
            }
        });
        const app = (0, express_1.default)();
        const coffeeController = new controllers_1.CoffeeController();
        app.use('/coffee', coffeeController.buildRoutes()); // enregistrement d'un routeur
        const MenuController = new controllers_1.CoffeeController();
        app.use('/coffee', coffeeController.buildRoutes()); // enregistrement d'un routeur
        const authController = new controllers_1.AuthController();
        app.use('/auth', authController.buildRoutes()); // enregistrement d'un routeur
        app.listen(process.env.PORT, function () {
            console.log("Server listening on port " + process.env.PORT);
        });
    });
}
startServer().catch(console.error);
//# sourceMappingURL=index.js.map