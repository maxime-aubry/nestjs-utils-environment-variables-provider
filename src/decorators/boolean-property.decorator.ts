import { Expose, Transform } from 'class-transformer';
import { isBoolean, isBooleanString, registerDecorator, ValidationArguments } from 'class-validator';
import { SEPARATOR } from '../utils';
import { ValidationOptions } from './type';

export function BooleanProperty(validationOptions?: ValidationOptions): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    if (validationOptions?.each)
      TransformToArrayOfBooleans()(target, propertyKey);
    else
      TransformToBoolean()(target, propertyKey);
    IsBoolean(validationOptions)(target, propertyKey);
    Expose()(target, propertyKey);
  };
};

function TransformToArrayOfBooleans(): PropertyDecorator {
  return Transform(({ value }) => {
    const values: (boolean | null)[] = value.split(SEPARATOR).map((item: string) => transformToBoolean(item));
    return values;
  });
};

function TransformToBoolean(): PropertyDecorator {
  return Transform(({ value }) => transformToBoolean(value as string));
};

function transformToBoolean(value: string): boolean | null {
  const lowerValue: string = value.trim().toLowerCase();
  if (lowerValue === 'true') return true;
  if (lowerValue === 'false') return false;
  return null;
};

function IsBoolean(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyKey: string | symbol) {
    registerDecorator({
      name: 'IsBooleanOrBooleanString',
      target: object.constructor,
      propertyName: propertyKey.toString(),
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return isBoolean(value) || isBooleanString(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a boolean or a boolean string ('true' or 'false')`;
        },
      },
    });
  };
};
