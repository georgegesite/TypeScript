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
/**
 * Sets up an Express server with a /api/users route.
 * The route makes a request to jsonplaceholder to get mock user data,
 * returns the data as JSON to the client, and logs it to the console.
 * Handles any errors by logging to console and returning a 500 status.
 * Server listens on port 3000.
 */
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = "3000";
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/api/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get("https://jsonplaceholder.typicode.com/users");
        res.json(response.data);
        console.log(response.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}));
app.get("/login", (req, res) => {
    res.render("index.ejs");
});
app.get("/home", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "admin" && password === "123") {
        res.send("You are logged in");
    }
    else {
        res.render("index.ejs");
    }
});
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});
//npm run build to compile
//npm run start to run
