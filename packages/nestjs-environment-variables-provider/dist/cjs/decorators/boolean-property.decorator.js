"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanProperty = BooleanProperty;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const index_js_1 = require("../utils/index.js");
/**
 * Property decorator to validate and transform a field in a Boolean or array of Booleans.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is a Boolean or a Boolean string.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
function BooleanProperty(validationOptions) {
    return function (target, propertyKey) {
        if (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.each)
            TransformToArrayOfBooleans()(target, propertyKey);
        else
            TransformToBoolean()(target, propertyKey);
        IsBoolean(validationOptions)(target, propertyKey);
        (0, class_transformer_1.Expose)()(target, propertyKey);
    };
}
;
function TransformToArrayOfBooleans() {
    return (0, class_transformer_1.Transform)(({ value }) => {
        const values = value.split(index_js_1.SEPARATOR).map((item) => transformToBoolean(item));
        return values;
    });
}
;
function TransformToBoolean() {
    return (0, class_transformer_1.Transform)(({ value }) => transformToBoolean(value));
}
;
function transformToBoolean(value) {
    const lowerValue = value.trim().toLowerCase();
    if (lowerValue === 'true')
        return true;
    if (lowerValue === 'false')
        return false;
    return null;
}
;
function IsBoolean(validationOptions) {
    return function (object, propertyKey) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsBooleanOrBooleanString',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return (0, class_validator_1.isBoolean)(value) || (0, class_validator_1.isBooleanString)(value);
                },
                defaultMessage(args) {
                    return `${args.property} must be a boolean or a boolean string ('true' or 'false')`;
                },
            },
        });
    };
}
;
