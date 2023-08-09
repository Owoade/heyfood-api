"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("./repository"));
class ResturantService {
    constructor() { }
    async get_all() {
        return (await repository_1.default.get_all());
    }
    async search(query) {
        return (await repository_1.default.search(query));
    }
    async filter_by_menu(menu) {
        return (await repository_1.default.filter_by_menu(menu));
    }
    async filter_by_param(param, payload) {
        return (await repository_1.default.filter_by_params(param, payload));
    }
    async get_all_tags() {
        return (await repository_1.default.get_all_tags());
    }
}
const resturant_service = new ResturantService();
exports.default = resturant_service;
