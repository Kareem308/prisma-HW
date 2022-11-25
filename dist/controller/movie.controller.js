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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.postMovie = exports.getMovie = void 0;
const movie_db_1 = require("../config/movie.db");
// get
const getMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const moveis = yield movie_db_1.prisma.movie.findMany();
        return res.status(200).json(moveis);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "server Error !",
        });
    }
});
exports.getMovie = getMovie;
// post
const postMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMovie = req.body;
        yield movie_db_1.prisma.movie.create({
            data: newMovie,
        });
        return res.status(201).json({
            message: "movie Added !",
        });
    }
    catch (error) {
        const prismaError = error;
        if (prismaError.code == "P2002") {
            return res.status(400).json({
                message: "You phone number have been used before",
            });
        }
        return res.status(500).json({
            message: "Server Error !",
        });
    }
});
exports.postMovie = postMovie;
// update
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const newMovie = req.body;
        yield movie_db_1.prisma.movie.update({
            where: { id },
            data: newMovie,
        });
        return res.status(201).json({
            message: "movie updated !",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "server Error !",
        });
    }
});
exports.updateMovie = updateMovie;
// delete
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield movie_db_1.prisma.movie.delete({
            where: { id },
        });
        return res.status(200).json({
            message: "movie Deleted !",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "server Error !",
        });
    }
});
exports.deleteMovie = deleteMovie;
