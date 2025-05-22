import { Test, TestingModule } from "@nestjs/testing";
import { ClassConstructor } from "class-transformer";
import {
    EnvironmentConfigModule,
    EnvironmentVariablesProvider,
    InvalidEnvironmentVariablesException,
} from "@nestjs-utils/environment-variables-provider";

export interface ICollectionOfEnvironmentVariables<TValue> {
    readonly TEST: TValue;
};

export function setEnvironmentVariables(value: string): void {
    process.env.TEST = value;
};

export function clearEnvironmentVariables(): void {
    delete process.env.TEST;
};

export async function expectValueAsync<TCollectionOfEnvironmentVariables extends ICollectionOfEnvironmentVariables<any>, TValue = any>(
    envClass: ClassConstructor<TCollectionOfEnvironmentVariables>,
    value: TValue,
): Promise<void> {
    const moduleRef: TestingModule = await Test.createTestingModule({
        imports: [EnvironmentConfigModule.forRoot(envClass)],
    }).compile();

    expect(moduleRef).toBeDefined();

    const environmentVariablesProvider: EnvironmentVariablesProvider = moduleRef.get(EnvironmentVariablesProvider);
    const variables: TCollectionOfEnvironmentVariables = environmentVariablesProvider.getEnvironmentVariables(envClass);

    expect(variables).toBeInstanceOf(envClass);
    expect(variables.TEST).toEqual(value);
};

export async function expectExceptionAsync<TCollectionOfEnvironmentVariables extends object>(
    envClass: ClassConstructor<TCollectionOfEnvironmentVariables>,
): Promise<void> {
    await expect(
        Test.createTestingModule({
            imports: [EnvironmentConfigModule.forRoot(envClass)],
        }).compile(),
    ).rejects.toThrow(InvalidEnvironmentVariablesException);
};
