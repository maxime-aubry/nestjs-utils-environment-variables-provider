import { Expose } from "class-transformer";
import { IsString } from "class-validator";
import { TransformToArray } from "./transform-to-array.decorator.js";
import type { ValidationOptions } from "./type.js";

/**
 * This decorator can be used to validate and transform a field in a string or an array of strings.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 * @returns A property decorator that validates and transforms the field to an string or an array of strings.
 * 
 * Your can load environment variables in the form of a string.
 * 
 * @example
 * ``` TypeScript
 * import { StringProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @StringProperty()
 *     public readonly VALUE!: string;
 * }
 * ```
 * 
 * You also can load environment variables in the form of an array of strings.
 * 
 * @example
 * ``` TypeScript
 * import { StringProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @StringProperty({ each: true })
 *     public readonly VALUES!: string[];
 * }
 * ```
 */
export function StringProperty(
	validationOptions?: ValidationOptions,
): PropertyDecorator {
	return function (target: object, propertyKey: string | symbol): void {
		if (validationOptions?.each) TransformToArray()(target, propertyKey);
		IsString(validationOptions)(target, propertyKey);
		Expose()(target, propertyKey);
	};
}
