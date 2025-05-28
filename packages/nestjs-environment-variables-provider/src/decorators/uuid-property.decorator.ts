import { Expose } from "class-transformer";
import { IsUUID } from "class-validator";
import { TransformToArray } from "./transform-to-array.decorator.js";
import type { ValidationOptions } from "./type.js";

/**
 * UUID version to be passed to UUIDProperty decorator.
 */
export type UUIDVersion =
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "nil"
	| "max"
	| "all"
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8;

/**
 * This decorator can be used to validate and transform a field in a UUID or an array of UUIDs.
 *
 * @param versions UUID version to be passed to the decorator.
 * @param validationOptions Validation options (e.g. `each` for collections).
 * @returns A property decorator that validates and transforms the field to an UUID or an array of UUIDs.
 * 
 * Your can load environment variables in the form of aa UUID.
 * 
 * @example
 * ``` TypeScript
 * import { UUIDProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @UUIDProperty()
 *     public readonly VALUE!: boolean;
 * }
 * ```
 * 
 * You also can load environment variables in the form of an array of UUIDs.
 * 
 * @example
 * ``` TypeScript
 * import { UUIDProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @UUIDProperty("4", { each: true })
 *     public readonly VALUES!: boolean[];
 * }
 * ```
 */
export function UUIDProperty(
	versions?: UUIDVersion,
	validationOptions?: ValidationOptions,
): PropertyDecorator {
	return function (target: object, propertyKey: string | symbol): void {
		if (validationOptions?.each) TransformToArray()(target, propertyKey);
		IsUUID(versions, validationOptions)(target, propertyKey);
		Expose()(target, propertyKey);
	};
}
