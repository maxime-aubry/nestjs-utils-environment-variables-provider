import { Expose, Transform } from 'class-transformer';
import { IsNumber, IsNumberOptions } from 'class-validator';
import { ValidationOptions } from './type';
import { SEPARATOR } from '../utils';

export function NumberProperty(options?: IsNumberOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    if (validationOptions?.each)
      TransformToArray()(target, propertyKey);
    IsNumber(options || {}, validationOptions)(target, propertyKey);
    Expose()(target, propertyKey);
  };
};

function TransformToArray(): PropertyDecorator {
  return Transform(({ value }) => {
    if (typeof value !== 'string') return value;
    const values: Number[] = value.split(SEPARATOR).map((item: string) => Number(item));
    return values;
  });
};
