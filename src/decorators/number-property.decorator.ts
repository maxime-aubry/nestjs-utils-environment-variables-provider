import { Expose, Transform } from 'class-transformer';
import { IsNumber, IsNumberOptions } from 'class-validator';
import { ValidationOptions } from './type';
import { SEPARATOR } from '../utils';
import { InvalidCastException } from '../exception';

export function NumberProperty(options?: IsNumberOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    if (validationOptions?.each)
      TransformToArrayOfNumbers()(target, propertyKey);
    else
      TransformToNumber()(target, propertyKey);
    IsNumber(options || {}, validationOptions)(target, propertyKey);
    Expose()(target, propertyKey);
  };
};

function TransformToArrayOfNumbers(): PropertyDecorator {
  return Transform(({ value, key }) => {
    if (typeof value !== 'string') return value;
    const values: Number[] = value.split(SEPARATOR).map((item: string) => transformToNumber(item, key));
    return values;
  });
};

function TransformToNumber(): PropertyDecorator {
  return Transform(({ value, key }) => transformToNumber(value as string, key));
};

function transformToNumber(value: any, key: string): number {
  const numberValue: number = Number(value);
  if (Number.isNaN(numberValue))
    throw new InvalidCastException(key);
  return numberValue;
};
