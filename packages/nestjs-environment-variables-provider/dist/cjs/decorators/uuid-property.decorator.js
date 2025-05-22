"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDProperty = UUIDProperty;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const transform_to_array_decorator_js_1 = require("./transform-to-array.decorator.js");
/**
 * Property decorator to validate and transform a field in an UUID.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is an UUID.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
function UUIDProperty(versions, validationOptions) {
    return function (target, propertyKey) {
        if (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.each)
            (0, transform_to_array_decorator_js_1.TransformToArray)()(target, propertyKey);
        (0, class_validator_1.IsUUID)(versions, validationOptions)(target, propertyKey);
        (0, class_transformer_1.Expose)()(target, propertyKey);
    };
}
;
