import { Test, type TestingModule } from "@nestjs/testing";
import type { ClassConstructor } from "class-transformer";
import {
	EnvironmentConfigModule,
	EnvironmentVariablesProvider,
	InvalidEnvironmentVariablesException,
} from "@nestjs-utils/environment-variables-provider";
import { expect } from "vitest";

export interface IEnvironmentVariables<TValue> {
	readonly VALUE: TValue;
}

export function setEnvironmentVariable<TValue>(value: TValue): void {
	process.env.VALUE = `${value}`;
}

export function clearEnvironmentVariable(): void {
	process.env.VALUE = undefined;
}

export async function expectValueAsync<
	TCollectionOfEnvironmentVariables extends IEnvironmentVariables<unknown>,
	TValue = unknown,
>(
	envClass: ClassConstructor<TCollectionOfEnvironmentVariables>,
	value: TValue,
): Promise<void> {
	const moduleRef: TestingModule = await Test.createTestingModule({
		imports: [EnvironmentConfigModule.forRoot(envClass)],
	}).compile();

	expect(moduleRef).toBeDefined();

	const environmentVariablesProvider: EnvironmentVariablesProvider =
		moduleRef.get(EnvironmentVariablesProvider);
	const variables: TCollectionOfEnvironmentVariables =
		environmentVariablesProvider.getEnvironmentVariables(envClass);

	expect(variables).toBeInstanceOf(envClass);
	expect(variables.VALUE).toEqual(value);
}

export async function expectExceptionAsync<
	TCollectionOfEnvironmentVariables extends object,
>(
	envClass: ClassConstructor<TCollectionOfEnvironmentVariables>,
): Promise<void> {
	await expect(
		Test.createTestingModule({
			imports: [EnvironmentConfigModule.forRoot(envClass)],
		}).compile(),
	).rejects.toThrow(InvalidEnvironmentVariablesException);
}
