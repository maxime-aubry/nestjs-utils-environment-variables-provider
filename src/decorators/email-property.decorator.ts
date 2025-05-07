import { Expose } from 'class-transformer';
import { IsEmail } from 'class-validator';
import { IsEmailOptions } from 'validator';
import { TransformToArray } from './transform-to-array.decorator';
import { ValidationOptions } from './type';

export function EmailProperty(options?: IsEmailOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    if (validationOptions?.each)
      TransformToArray()(target, propertyKey);
    IsEmail(options || {}, validationOptions)(target, propertyKey);
    Expose()(target, propertyKey);
  };
};
