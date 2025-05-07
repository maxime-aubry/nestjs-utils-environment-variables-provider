import { Expose, Transform } from 'class-transformer';
import { isBoolean, isBooleanString, registerDecorator, ValidationArguments } from 'class-validator';
import { ValidationOptions } from './type';
import { SEPARATOR } from '../utils';

export function BooleanProperty(validationOptions?: ValidationOptions): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    if (validationOptions?.each)
      TransformToArray()(target, propertyKey);
    IsBoolean(validationOptions)(target, propertyKey);
    Expose()(target, propertyKey);
  };
};

function TransformToArray(): PropertyDecorator {
  return Transform(({ value }) => {
    console.log('Boolean !!!!!!!!!!!!!', value);
    if (typeof value !== 'string') return value;
    const values: boolean[] = value.split(SEPARATOR).map((item: string) => JSON.parse(item.toLowerCase()));
    return values;
  });
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
