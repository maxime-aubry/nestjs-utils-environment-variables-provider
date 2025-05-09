import { Expose, Transform } from 'class-transformer';
import { IsNumber, IsNumberOptions } from 'class-validator';
import { SEPARATOR } from '../utils';
import { ValidationOptions } from './type';

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
  return Transform(({ value }) => {
    if (typeof value !== 'string') return value;
    const values: (number | null)[] = value.split(SEPARATOR).map((item: string) => transformToNumber(item));
    return values;
  });
};

function TransformToNumber(): PropertyDecorator {
  return Transform(({ value }) => transformToNumber(value as string));
};

function transformToNumber(value: any): number | null {
  const numberValue: number = Number(value);
  if (Number.isNaN(numberValue))
    return null;
  return numberValue;
};
