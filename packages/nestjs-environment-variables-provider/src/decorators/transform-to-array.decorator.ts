import { Transform } from "class-transformer";
import { SEPARATOR } from "../utils/index.js";

export function TransformToArray(): PropertyDecorator {
  return Transform(({ value }) => {
    if (typeof value !== 'string') return value;
    const values: string[] = value.split(SEPARATOR);
    return values;
  });
};