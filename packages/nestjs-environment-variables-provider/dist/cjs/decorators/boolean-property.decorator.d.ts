import type { ValidationOptions } from './type.js';
/**
 * Property decorator to validate and transform a field in a Boolean or array of Booleans.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is a Boolean or a Boolean string.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
export declare function BooleanProperty(validationOptions?: ValidationOptions): PropertyDecorator;
