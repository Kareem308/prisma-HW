"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parkSchema = void 0;
const zod_1 = require("zod");
exports.parkSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'ID is required !' }).min(3, 'You Id must be more than 3 char'),
        name: zod_1.z.string({ required_error: "Name is required !" }).min(5, "you name must be more than 4 "),
        type: zod_1.z.enum(["rollecoaster", "thriller", "water"], { required_error: "can only have these values (rollecoaster,thriller,water)", }),
        tickets: zod_1.z.number({ required_error: "tickets is required !" }),
        price: zod_1.z.number({ required_error: "price is required !" }),
    }),
});
