import { Expose } from "class-transformer";
import { IsUUID } from "class-validator";
import { TransformToArray } from "./transform-to-array.decorator.js";
/**
 * Property decorator to validate and transform a field in an UUID.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is an UUID.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
export function UUIDProperty(versions, validationOptions) {
    return function (target, propertyKey) {
        if (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.each)
            TransformToArray()(target, propertyKey);
        IsUUID(versions, validationOptions)(target, propertyKey);
        Expose()(target, propertyKey);
    };
}
;
