import type { ValidationOptions } from './type.js';
/**
 * Property decorator to validate and transform a field in an String.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is an String.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
export declare function StringProperty(validationOptions?: ValidationOptions): PropertyDecorator;
