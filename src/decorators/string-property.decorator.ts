import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { TransformToArray } from './transform-to-array.decorator';
import { ValidationOptions } from './type';

export function StringProperty(validationOptions?: ValidationOptions): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    if (validationOptions?.each)
      TransformToArray()(target, propertyKey);
    IsString(validationOptions)(target, propertyKey);
    Expose()(target, propertyKey);
  };
};
