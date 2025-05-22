import { Expose, Transform } from 'class-transformer';
import { isBoolean, isBooleanString, registerDecorator } from 'class-validator';
import { SEPARATOR } from '../utils/index.js';
/**
 * Property decorator to validate and transform a field in a Boolean or array of Booleans.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is a Boolean or a Boolean string.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
export function BooleanProperty(validationOptions) {
    return function (target, propertyKey) {
        if (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.each)
            TransformToArrayOfBooleans()(target, propertyKey);
        else
            TransformToBoolean()(target, propertyKey);
        IsBoolean(validationOptions)(target, propertyKey);
        Expose()(target, propertyKey);
    };
}
;
function TransformToArrayOfBooleans() {
    return Transform(({ value }) => {
        const values = value.split(SEPARATOR).map((item) => transformToBoolean(item));
        return values;
    });
}
;
function TransformToBoolean() {
    return Transform(({ value }) => transformToBoolean(value));
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
        registerDecorator({
            name: 'IsBooleanOrBooleanString',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return isBoolean(value) || isBooleanString(value);
                },
                defaultMessage(args) {
                    return `${args.property} must be a boolean or a boolean string ('true' or 'false')`;
                },
            },
        });
    };
}
;
