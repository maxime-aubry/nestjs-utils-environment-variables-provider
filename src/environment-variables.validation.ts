import { ClassConstructor } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';
import { InvalidEnvironmentVariables } from './exception';
import { parse } from './parser';

export function validate<TEnv extends object>(envClass: ClassConstructor<TEnv>, config: Record<string, unknown>): TEnv {
  const variables: TEnv = parse<TEnv>(envClass, config);
  const errors: ValidationError[] = validateSync(variables, { skipMissingProperties: false });

  if (errors.length > 0) throw new InvalidEnvironmentVariables(errors);

  return variables;
}
