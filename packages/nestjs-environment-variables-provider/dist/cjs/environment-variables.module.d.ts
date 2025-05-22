import { type DynamicModule } from '@nestjs/common';
import type { ClassConstructor } from 'class-transformer';
/**
 * Environment configuration module.
 *
 * This module initializes the configuration via a custom validator and makes validated environment variables available throughout the application.
 */
export declare class EnvironmentConfigModule {
    /**
     * Initializes the module with a validation class for environment variables.
     *
     * @param envClass The class that describes and validates the expected environment variables.
     * @returns A dynamic module ready to be imported into the application.
     */
    static forRoot<TCollectionOfEnvironmentVariables extends object>(envClass: ClassConstructor<TCollectionOfEnvironmentVariables>): DynamicModule;
}
