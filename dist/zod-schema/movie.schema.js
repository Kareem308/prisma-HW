"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieSchema = void 0;
const zod_1 = require("zod");
exports.movieSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ required_error: "name is required !" })
            .min(3, "name must be more than 2"),
        genre: zod_1.z.string({ required_error: "genre is required !" }).min(3),
        rating: zod_1.z.number({ required_error: "rating is required !" }).min(1).max(5),
        duration: zod_1.z.number({ required_error: "duration is required !" }).min(60),
    }),
});
