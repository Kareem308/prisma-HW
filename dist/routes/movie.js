"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("../controller/movie.controller");
const validate_1 = __importDefault(require("../middlewares/validate"));
const movie_schema_1 = require("../zod-schema/movie.schema");
const movieRouter = express_1.default.Router();
movieRouter.get(`/`, movie_controller_1.getMovie);
movieRouter.post(`/`, (0, validate_1.default)(movie_schema_1.movieSchema), movie_controller_1.postMovie);
exports.default = movieRouter;
