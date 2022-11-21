"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleware/validate"));
const park_schema_1 = require("../zod_schema/park_schema");
const router = express_1.default.Router();
let park = [];
router.get('/', (req, res, next) => {
    return res.json(park);
});
router.post('/', (0, validate_1.default)(park_schema_1.parkSchema), (0, validate_1.default)(park_schema_1.parkSchema), (req, res, next) => {
    const newpark = req.body;
    park.push(newpark);
    return res.status(201).json({ message: 'park Added !' });
});
router.put('/:id', (0, validate_1.default)(park_schema_1.parkSchema), (req, res) => {
    const updated = req.body;
    const { id } = req.params;
    const updatedList = park.filter((par) => {
        return par.id !== id;
    });
    updatedList.push(updated);
    park = updatedList;
    return res.json({
        message: 'park updated !',
    });
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const newList = park.filter((par) => {
        return par.id !== id;
    });
    park = newList;
    return res.json({
        message: 'park deleted !',
    });
});
exports.default = router;
