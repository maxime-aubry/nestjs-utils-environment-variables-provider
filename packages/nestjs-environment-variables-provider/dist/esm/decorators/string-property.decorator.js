import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { TransformToArray } from './transform-to-array.decorator.js';
/**
 * Property decorator to validate and transform a field in an String.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is an String.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
export function StringProperty(validationOptions) {
    return function (target, propertyKey) {
        if (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.each)
            TransformToArray()(target, propertyKey);
        IsString(validationOptions)(target, propertyKey);
        Expose()(target, propertyKey);
    };
}
;
