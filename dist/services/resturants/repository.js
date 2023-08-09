"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importStar(require("./model"));
class ResturantRepository {
    constructor() {
        this.filter_by_params = this.filter_by_params.bind(this);
        this.search = this.search.bind(this);
    }
    async get_all() {
        const all_resturant = await model_1.default.find();
        return all_resturant;
    }
    async search(query) {
        const result = await model_1.default.find({
            $or: [
                { name: { $regex: this.capitalizeWords(query), } },
                { _menu: { $regex: query } },
            ],
        }).exec();
        return result;
    }
    async filter_by_menu(menu) {
        const result = await model_1.default.find({
            menu: {
                $in: menu,
            },
        });
        return result;
    }
    async filter_by_params(param, payload) {
        ;
        const query = this.query_hash(param);
        if (param === "still-opened")
            payload = (new Date()).getHours();
        const result = await model_1.default.find(query(payload)).exec();
        return result;
    }
    async get_all_tags() {
        return (await model_1.Tag.find());
    }
    capitalizeWords(words) {
        return words
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    query_hash(param) {
        const hash = {
            "most-popular": () => ({
                no_of_ratings: { $gte: 2000 },
            }),
            "still-opened": (payload) => ({
                $or: [{ closing_time: payload }, { closing_time: Infinity }],
            }),
            "most-rated": () => ({
                no_of_ratings: { $gte: 2000 },
            }),
            "highest-rated": () => ({
                rating: { $gte: 4 }
            }),
            "new-arrival": () => {
                const beginning_of_month = new Date();
                beginning_of_month.setDate(1); // Set day to the 1st
                beginning_of_month.setHours(0, 0, 0, 0); // Set time to midnight
                const milliseconds = beginning_of_month.getTime();
                return {
                    joined: { $gte: milliseconds }
                };
            }
        };
        return hash[param];
    }
}
const resturant_repository = new ResturantRepository();
exports.default = resturant_repository;
