import { type DynamicModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import type { ClassConstructor } from "class-transformer";
import { EnvironmentVariablesProvider } from "./environment-variables.provider.js";
import { validate } from "./environment-variables.validation.js";

/**
 * Environment configuration module.
 *
 * This module initializes the configuration via a custom validator and makes validated environment variables available throughout the application.
 *
 * It leverages NestJS's ConfigModule and integrates a class-based validation using class-transformer and class-validator.
 * The validated environment variables can then be injected anywhere in the app via the EnvironmentVariablesProvider.
 * 
 * @hideconstructor
 * 
 * @example
 * ``` TypeScript
 * import { Module } from '@nestjs/common';
 * import { EnvironmentConfigModule } from '@otakusan76/nestjs-environment-variables-provider';
 * import { EnvironmentVariables } from './environment-variables.ts
 *
 * @Module({
 *   imports: [EnvironmentConfigModule.forRoot(EnvironmentVariables)],
 * })
 * export class AppModule {}
 * ```
 */
@Module({})
// biome-ignore lint/complexity/noStaticOnlyClass: NestJS module has forRoot static method !
export class EnvironmentConfigModule {
	/**
	 * Initializes the module with a validation class for environment variables.
	 *
	 * @template TCollectionOfEnvironmentVariables The type describing the shape of the environment variables.
	 * @param envClass The class that describes and validates the expected environment variables.
	 * @returns A dynamic module ready to be imported into the application.
	 * 
	 * @example
 	 * ``` TypeScript
	 * EnvironmentConfigModule.forRoot(MyEnvVars);
	 * ```
	 */
	public static forRoot<TCollectionOfEnvironmentVariables extends object>(
		envClass: ClassConstructor<TCollectionOfEnvironmentVariables>,
	): DynamicModule {
		return {
			module: EnvironmentConfigModule,
			imports: [
				ConfigModule.forRoot({
					ignoreEnvFile: true,
					isGlobal: true,
					validate: (config) => validate(envClass, config),
				}),
			],
			providers: [EnvironmentVariablesProvider],
			exports: [EnvironmentVariablesProvider],
		};
	}
}
