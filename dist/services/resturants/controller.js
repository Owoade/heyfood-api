"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const respond_1 = __importDefault(require("../../utils/respond"));
const decorators_1 = __importDefault(require("../../decorators"));
const validators_1 = require("../../validators");
class ResturantController {
    constructor() { }
    async get_all(req, res) {
        const result = await _1.default.get_all();
        (0, respond_1.default)(res, {
            status: "success",
            statusCode: 200,
            message: "Ok",
            data: {
                result
            },
        });
    }
    async search(req, res) {
        const { query } = req.query;
        const result = await _1.default.search(query);
        (0, respond_1.default)(res, {
            status: "success",
            message: "ok",
            data: {
                result
            },
            statusCode: 200
        });
    }
    async filter_by_menu(req, res) {
        const result = await _1.default.filter_by_menu(req.body.menu);
        (0, respond_1.default)(res, {
            status: "success",
            message: "ok",
            data: {
                result
            },
            statusCode: 200
        });
    }
    async filter_by_params(req, res) {
        const result = await _1.default.filter_by_param(req.body.param);
        (0, respond_1.default)(res, {
            status: "success",
            message: "ok",
            data: {
                result
            },
            statusCode: 200
        });
    }
    async get_all_tags(req, res) {
        const tags = await _1.default.get_all_tags();
        (0, respond_1.default)(res, {
            status: "success",
            message: "ok",
            data: {
                tags
            },
            statusCode: 200
        });
    }
}
__decorate([
    decorators_1.default.forRequestPayloadValidation(validators_1.search_resturant_valudator, "query"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResturantController.prototype, "search", null);
__decorate([
    decorators_1.default.forRequestPayloadValidation(validators_1.filter_by_menu_validator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResturantController.prototype, "filter_by_menu", null);
__decorate([
    decorators_1.default.forRequestPayloadValidation(validators_1.filter_by_params_validator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResturantController.prototype, "filter_by_params", null);
const resturant_controller = new ResturantController();
exports.default = resturant_controller;
