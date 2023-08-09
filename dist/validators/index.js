"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter_by_params_validator = exports.filter_by_menu_validator = exports.search_resturant_valudator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.search_resturant_valudator = joi_1.default.object({
    query: joi_1.default.string().required(),
}).required();
exports.filter_by_menu_validator = joi_1.default.object({
    menu: joi_1.default.array()
        .max(5)
        .required(),
}).required();
exports.filter_by_params_validator = joi_1.default.object({
    param: joi_1.default.string().valid("most-popular", "still-opened", "new-arrival", "most-rated", "highest-rated"),
}).required();
