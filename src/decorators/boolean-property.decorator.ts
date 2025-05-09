import { Expose, Transform } from 'class-transformer';
import { isBoolean, isBooleanString, registerDecorator, ValidationArguments } from 'class-validator';
import { ValidationOptions } from './type';
import { SEPARATOR } from '../utils';
import { InvalidCastException } from '../exception';

export function BooleanProperty(validationOptions?: ValidationOptions): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    if (validationOptions?.each)
      TransformToArray()(target, propertyKey);
    else
    TransformToBoolean()(target, propertyKey);
    IsBoolean(validationOptions)(target, propertyKey);
    Expose()(target, propertyKey);
  };
};

function TransformToArray(): PropertyDecorator {
  return Transform(({ value, key }) => {
    const values: boolean[] = value.split(SEPARATOR).map((item: string) => transformToBoolean(value as string, key));
    return values;
  });
};

function TransformToBoolean(): PropertyDecorator {
  return Transform(({ value, key }) => transformToBoolean(value as string, key));
};

function transformToBoolean(value: string, key: string): boolean {
  const lowerValue: string = value.trim().toLowerCase();
  if (lowerValue === 'true') return true;
  if (lowerValue === 'false') return false;
  throw new InvalidCastException(key);
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
