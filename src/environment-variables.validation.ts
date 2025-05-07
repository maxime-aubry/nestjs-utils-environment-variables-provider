import { ClassConstructor } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';
import { InvalidEnvironmentVariables } from './exception';
import { parse } from './parser';

export function validate<TCollectionOfEnvironmentVariables extends object>(
  envClass: ClassConstructor<TCollectionOfEnvironmentVariables>,
  config: Record<string, unknown>,
): TCollectionOfEnvironmentVariables {
  const variables: TCollectionOfEnvironmentVariables = parse<TCollectionOfEnvironmentVariables>(envClass, config);
  const errors: ValidationError[] = validateSync(variables, { skipMissingProperties: false });

  if (errors.length > 0) throw new InvalidEnvironmentVariables(errors);

  return variables;
}
