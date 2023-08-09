"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const resturant_router = (0, express_1.Router)();
resturant_router.get("/", controller_1.default.get_all);
resturant_router.get("/tags", controller_1.default.get_all_tags);
resturant_router.post("/menu", controller_1.default.filter_by_menu);
resturant_router.post("/sort", controller_1.default.filter_by_params);
resturant_router.get("/search", controller_1.default.search);
exports.default = resturant_router;
