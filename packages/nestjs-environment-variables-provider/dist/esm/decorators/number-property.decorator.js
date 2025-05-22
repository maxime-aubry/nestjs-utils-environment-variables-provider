import { Expose, Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { SEPARATOR } from '../utils/index.js';
;
/**
 * Property decorator to validate and transform a field in an Number.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is an Number.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
export function NumberProperty(options, validationOptions) {
    return function (target, propertyKey) {
        if (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.each)
            TransformToArrayOfNumbers()(target, propertyKey);
        else
            TransformToNumber()(target, propertyKey);
        IsNumber(options || {}, validationOptions)(target, propertyKey);
        Expose()(target, propertyKey);
    };
}
;
function TransformToArrayOfNumbers() {
    return Transform(({ value }) => {
        if (typeof value !== 'string')
            return value;
        const values = value.split(SEPARATOR).map((item) => transformToNumber(item));
        return values;
    });
}
;
function TransformToNumber() {
    return Transform(({ value }) => transformToNumber(value));
}
;
function transformToNumber(value) {
    const numberValue = Number(value);
    if (Number.isNaN(numberValue))
        return null;
    return numberValue;
}
;
