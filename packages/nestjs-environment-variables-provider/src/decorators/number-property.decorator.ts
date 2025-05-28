import { Expose, Transform } from "class-transformer";
import { IsNumber } from "class-validator";
import { SEPARATOR } from "../utils/index.js";
import type { ValidationOptions } from "./type.js";

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
 * This decorator can be used to validate and transform a field in a number or an array of numbers.
 *
 * @param options Options to be passed to the decorator.
 * @param validationOptions Validation options (e.g. `each` for collections).
 * @returns A property decorator that validates and transforms the field to a number or an array of numbers.
 * 
 * Your can load environment variables in the form of a number.
 * 
 * @example
 * ``` TypeScript
 * import { NumberProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @NumberProperty()
 *     public readonly VALUE!: string;
 * }
 * ```
 * 
 * You also can load environment variables in the form of an array of numbers.
 * 
 * @example
 * ``` TypeScript
 * import { NumberProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @NumberProperty({}, { each: true })
 *     public readonly VALUES!: string[];
 * }
 * ```
 */
export function NumberProperty(
	options?: IsNumberOptions,
	validationOptions?: ValidationOptions,
): PropertyDecorator {
	return function (target: object, propertyKey: string | symbol): void {
		if (validationOptions?.each)
			TransformToArrayOfNumbers()(target, propertyKey);
		else TransformToNumber()(target, propertyKey);
		IsNumber(options || {}, validationOptions)(target, propertyKey);
		Expose()(target, propertyKey);
	};
}

function TransformToArrayOfNumbers(): PropertyDecorator {
	return Transform(({ value }) => {
		if (typeof value !== "string") return value;
		const values: (number | null)[] = value
			.split(SEPARATOR)
			.map((item: string) => transformToNumber(item));
		return values;
	});
}

function TransformToNumber(): PropertyDecorator {
	return Transform(({ value }) => transformToNumber(value as string));
}

function transformToNumber(value: unknown): number | null {
	const numberValue: number = Number(value);
	if (Number.isNaN(numberValue)) return null;
	return numberValue;
}
