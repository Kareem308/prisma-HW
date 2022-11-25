"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const movie_db_1 = require("./config/movie.db");
const movie_1 = __importDefault(require("./routes/movie"));
const app = (0, express_1.default)();
(0, movie_db_1.connectDB)();
app.use(`/movies`, movie_1.default);
app.listen(5000, () => {
    console.log("we running in port 5000 now ");
});
