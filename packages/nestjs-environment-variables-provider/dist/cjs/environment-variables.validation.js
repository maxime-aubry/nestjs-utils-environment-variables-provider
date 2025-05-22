"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const class_validator_1 = require("class-validator");
const exception_js_1 = require("./exception.js");
const parser_js_1 = require("./parser.js");
function validate(envClass, config) {
    const variables = (0, parser_js_1.parse)(envClass, config);
    const errors = (0, class_validator_1.validateSync)(variables, { skipMissingProperties: false });
    if (errors.length > 0)
        throw new exception_js_1.InvalidEnvironmentVariablesException(errors);
    return variables;
}
