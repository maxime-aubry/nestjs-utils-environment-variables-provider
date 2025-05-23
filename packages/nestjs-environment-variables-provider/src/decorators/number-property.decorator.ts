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
 * Property decorator to validate and transform a field in an Number.
 *
 * - Uses `class-transform` to transform the value.
 * - Uses `class-validator` to validate the value is an Number.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
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
