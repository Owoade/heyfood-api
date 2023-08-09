"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const respond_1 = __importDefault(require("../utils/respond"));
const ServiceDecorator = {
    forRequestPayloadValidation(validator, type, property, stringified) {
        return function (target, propertyKey, descriptor) {
            const value = descriptor?.value;
            descriptor.value = async function (...args) {
                const [request, response] = args;
                console.log(request[type ?? "body"]);
                let payload = request[type ?? "body"] ?? request;
                const { error } = validator.validate(payload);
                if (!request?.body && error)
                    return console.error(error?.message);
                if (error) {
                    return (0, respond_1.default)(response, {
                        status: "error",
                        statusCode: 400,
                        data: {},
                        message: error.message,
                    });
                }
                const result = await value.apply(this, args);
                return result;
            };
            // return descriptor;
        };
    },
};
exports.default = ServiceDecorator;
