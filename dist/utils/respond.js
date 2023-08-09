"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function respond(res, config) {
    const { message, data, status, statusCode, token } = config;
    return res.status(statusCode).json({
        message: message ?? "Operation successsfull",
        data,
        token
    });
}
exports.default = respond;
