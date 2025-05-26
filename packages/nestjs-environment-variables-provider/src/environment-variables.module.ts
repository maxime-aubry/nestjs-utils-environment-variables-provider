import { type DynamicModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import type { ClassConstructor } from "class-transformer";
import { EnvironmentVariablesProvider } from "./environment-variables.provider.js";
import { validate } from "./environment-variables.validation.js";

/**
 * Environment configuration module.
 *
 * This module initializes the configuration via a custom validator and makes validated environment variables available throughout the application.
 */
@Module({})
// biome-ignore lint/complexity/noStaticOnlyClass: NestJS module has forRoot static method !
export class EnvironmentConfigModule {
	/**
	 * Initializes the module with a validation class for environment variables.
	 *
	 * @param envClass The class that describes and validates the expected environment variables.
	 * @returns A dynamic module ready to be imported into the application.
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
