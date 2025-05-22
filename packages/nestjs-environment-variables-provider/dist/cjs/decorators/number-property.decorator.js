"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberProperty = NumberProperty;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const index_js_1 = require("../utils/index.js");
;
/**
 * Property decorator to validate and transform a field in an Number.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is an Number.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
function NumberProperty(options, validationOptions) {
    return function (target, propertyKey) {
        if (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.each)
            TransformToArrayOfNumbers()(target, propertyKey);
        else
            TransformToNumber()(target, propertyKey);
        (0, class_validator_1.IsNumber)(options || {}, validationOptions)(target, propertyKey);
        (0, class_transformer_1.Expose)()(target, propertyKey);
    };
}
;
function TransformToArrayOfNumbers() {
    return (0, class_transformer_1.Transform)(({ value }) => {
        if (typeof value !== 'string')
            return value;
        const values = value.split(index_js_1.SEPARATOR).map((item) => transformToNumber(item));
        return values;
    });
}
;
function TransformToNumber() {
    return (0, class_transformer_1.Transform)(({ value }) => transformToNumber(value));
}
;
function transformToNumber(value) {
    const numberValue = Number(value);
    if (Number.isNaN(numberValue))
        return null;
    return numberValue;
}
;
