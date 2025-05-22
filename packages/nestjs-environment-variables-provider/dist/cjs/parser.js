"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const class_transformer_1 = require("class-transformer");
function parse(envClass, config) {
    const variables = (0, class_transformer_1.plainToInstance)(envClass, config, {
        enableImplicitConversion: false,
        excludeExtraneousValues: true,
    });
    return variables;
}
;
