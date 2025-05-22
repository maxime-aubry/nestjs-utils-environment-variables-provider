import type { ValidationOptions } from "./type.js";
/**
 * UUID version to be passed to UUIDProperty decorator.
 */
export type UUIDVersion = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "nil" | "max" | "all" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
/**
 * Property decorator to validate and transform a field in an UUID.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is an UUID.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 */
export declare function UUIDProperty(versions?: UUIDVersion, validationOptions?: ValidationOptions): PropertyDecorator;
