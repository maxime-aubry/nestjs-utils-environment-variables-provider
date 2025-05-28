import { Expose, Transform } from "class-transformer";
import {
	isBoolean,
	isBooleanString,
	registerDecorator,
	type ValidationArguments,
} from "class-validator";
import { SEPARATOR } from "../utils/index.js";
import type { ValidationOptions } from "./type.js";

/**
 * This decorator can be used to validate and transform a field in a Boolean or an array of Booleans.
 *
 * @param validationOptions Validation options (e.g. `each` for collections).
 * @returns A property decorator that validates and transforms the field to a boolean or an array of booleans.
 * 
 * Your can load environment variables in the form of a boolean.
 * 
 * @example
 * ``` TypeScript
 * import { BooleanProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @BooleanProperty()
 *     public readonly VALUE!: boolean;
 * }
 * ```
 * 
 * You also can load environment variables in the form of an array of booleans.
 * 
 * @example
 * ``` TypeScript
 * import { BooleanProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @BooleanProperty({ each: true })
 *     public readonly VALUES!: boolean[];
 * }
 * ```
 */
export function BooleanProperty(
	validationOptions?: ValidationOptions,
): PropertyDecorator {
	return function (target: object, propertyKey: string | symbol) {
		if (validationOptions?.each)
			TransformToArrayOfBooleans()(target, propertyKey);
		else TransformToBoolean()(target, propertyKey);
		IsBoolean(validationOptions)(target, propertyKey);
		Expose()(target, propertyKey);
	};
}

function TransformToArrayOfBooleans(): PropertyDecorator {
	return Transform(({ value }) => {
		const values: (boolean | null)[] = value
			.split(SEPARATOR)
			.map((item: string) => transformToBoolean(item));
		return values;
	});
}

function TransformToBoolean(): PropertyDecorator {
	return Transform(({ value }) => transformToBoolean(value as string));
}

function transformToBoolean(value: string): boolean | null {
	const lowerValue: string = value.trim().toLowerCase();
	if (lowerValue === "true") return true;
	if (lowerValue === "false") return false;
	return null;
}

function IsBoolean(validationOptions?: ValidationOptions) {
	return function (object: object, propertyKey: string | symbol): void {
		registerDecorator({
			name: "IsBooleanOrBooleanString",
			target: object.constructor,
			propertyName: propertyKey.toString(),
			options: validationOptions,
			validator: {
				validate(value: unknown): Promise<boolean> | boolean {
					return isBoolean(value) || isBooleanString(value);
				},
				defaultMessage(args: ValidationArguments): string {
					return `${args.property} must be a boolean or a boolean string ('true' or 'false')`;
				},
			},
		});
	};
}
