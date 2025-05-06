import { Expose } from "class-transformer";
import { IsUrl } from "class-validator";
import { IsURLOptions } from 'validator';
import { TransformToArray } from "./transform-to-array.decorator";
import { ValidationOptions } from "./type";

export function UrlProperty(options?: IsURLOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    if (validationOptions?.each)
      TransformToArray()(target, propertyKey);
    IsUrl(options || {}, validationOptions)(target, propertyKey);
    Expose()(target, propertyKey);
  };
};