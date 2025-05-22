import type { ClassConstructor } from 'class-transformer';
/**
 * Provider of validated environment variables.
 *
 * This class is used to obtain environment variables in the form of a typed instance according to the validation class supplied.
 */
export declare class EnvironmentVariablesProvider {
    /**
     * Returns an instance containing mapped and validated environment variables.
     *
     * @param envClass The class used to type and validate environment variables.
     * @returns Typed environment variables.
     */
    getEnvironmentVariables<TCollectionOfEnvironmentVariables extends object>(envClass: ClassConstructor<TCollectionOfEnvironmentVariables>): TCollectionOfEnvironmentVariables;
}
