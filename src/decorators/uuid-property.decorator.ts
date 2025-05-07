import { Expose } from "class-transformer";
import { IsUUID } from "class-validator";
import { UUIDVersion } from 'validator';
import { TransformToArray } from "./transform-to-array.decorator";
import { ValidationOptions } from "./type";

export function UUIDProperty(versions?: UUIDVersion, validationOptions?: ValidationOptions): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    if (validationOptions?.each)
      TransformToArray()(target, propertyKey);
    IsUUID(versions, validationOptions)(target, propertyKey);
    Expose()(target, propertyKey);
  };
};