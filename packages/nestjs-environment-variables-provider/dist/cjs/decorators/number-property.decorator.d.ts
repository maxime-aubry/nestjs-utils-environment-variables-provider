import type { ValidationOptions } from './type.js';
/**
 * Options to be passed to the NumberProperty decorator.
 */
export interface IsNumberOptions {
    /**
     * If `allowNaN` is set to `true`, the validator will allow `NaN` values.
     *
     * @default undefined
     */
    allowNaN?: boolean;
    /**
     * If `allowInfinity` is set to `true`, the validator will allow `Infinity` values.
     *
     * @default undefined
     */
    allowInfinity?: boolean;
    /**
     * If `maxDecimalPlaces` is set, the validator will ensure that the number
     * has no more than the specified number of decimal places.
     *
     * @default undefined
     */
    maxDecimalPlaces?: number;
}
/**
 * Property decorator to validate and transform a field in an Number.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is an Number.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
export declare function NumberProperty(options?: IsNumberOptions, validationOptions?: ValidationOptions): PropertyDecorator;
