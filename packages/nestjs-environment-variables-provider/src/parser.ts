import { type ClassConstructor, plainToInstance } from "class-transformer";

export function parse<TCollectionOfEnvironmentVariables extends object>(
	envClass: ClassConstructor<TCollectionOfEnvironmentVariables>,
	config: Record<string, unknown>,
): TCollectionOfEnvironmentVariables {
	const variables: TCollectionOfEnvironmentVariables = plainToInstance(
		envClass,
		config,
		{
			enableImplicitConversion: false,
			excludeExtraneousValues: true,
		},
	);
	return variables;
}
