import { Injectable } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';
import { parse } from './parser';

/**
 * Provider of validated environment variables.
 *
 * This class is used to obtain environment variables in the form of a typed instance according to the validation class supplied.
 */
@Injectable()
export class EnvironmentVariablesProvider {
    /**
     * Returns an instance containing mapped and validated environment variables.
     * 
     * @param envClass The class used to type and validate environment variables.
     * @returns Typed environment variables.
     */
    public getEnvironmentVariables<TCollectionOfEnvironmentVariables extends object>(
        envClass: ClassConstructor<TCollectionOfEnvironmentVariables>
    ): TCollectionOfEnvironmentVariables {
        const variables: TCollectionOfEnvironmentVariables = parse<TCollectionOfEnvironmentVariables>(envClass, process.env);
        return variables;
    }
}
