"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_type = {
    required(type) {
        return {
            type,
            required: true
        };
    },
    string() {
        return {
            type: String
        };
    },
    boolean() {
        return {
            type: Boolean
        };
    },
    number() {
        return {
            type: Number
        };
    }
};
exports.default = schema_type;
