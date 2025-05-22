import { validateSync, ValidationError } from 'class-validator';
import { InvalidEnvironmentVariablesException } from './exception.js';
import { parse } from './parser.js';
export function validate(envClass, config) {
    const variables = parse(envClass, config);
    const errors = validateSync(variables, { skipMissingProperties: false });
    if (errors.length > 0)
        throw new InvalidEnvironmentVariablesException(errors);
    return variables;
}
