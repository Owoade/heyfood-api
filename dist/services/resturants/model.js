"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema_type_1 = __importDefault(require("../../utils/schema_type"));
const StoreSchema = new mongoose_1.default.Schema({
    name: schema_type_1.default.required(String),
    image: schema_type_1.default.required(String),
    rating: schema_type_1.default.required(Number),
    no_of_ratings: schema_type_1.default.required(Number),
    opening_time: schema_type_1.default.required(Number),
    closing_time: schema_type_1.default.required(Number),
    order_tiime: schema_type_1.default.number(),
    manages_delivery: schema_type_1.default.boolean(),
    is_taking_order: schema_type_1.default.boolean(),
    // Used in Tag search
    menu: schema_type_1.default.required([String]),
    // Used in Text Search
    _menu: schema_type_1.default.string(),
    joined: schema_type_1.default.number()
}, { timestamps: true });
const TagSchema = new mongoose_1.default.Schema({
    name: schema_type_1.default.required(String),
    image: schema_type_1.default.required(String)
});
exports.Tag = mongoose_1.default.model("Tag", TagSchema);
const Store = mongoose_1.default.model("Store", StoreSchema);
exports.default = Store;
