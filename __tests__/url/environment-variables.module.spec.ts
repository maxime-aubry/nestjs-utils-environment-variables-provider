import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentConfigModule } from "../../src/environment-variables.module";
import { EnvironmentVariablesProvider } from '../../src/environment-variables.provider';
import { clearEnvironmentVariables, setEnvironmentVariables } from '../env.utils';
import { EnvironmentVariables } from './environment-variable';

describe('Tests URL.', () => {
    afterEach(() => clearEnvironmentVariables());

    it("Environment variable 'TEST' equals to 'https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider'.", async () => {
        setEnvironmentVariables("https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider");

        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [EnvironmentConfigModule.forRoot(EnvironmentVariables)],
        }).compile();

        expect(moduleRef).toBeDefined();

        const environmentVariablesProvider: EnvironmentVariablesProvider = moduleRef.get(EnvironmentVariablesProvider);
        const variables: EnvironmentVariables = environmentVariablesProvider.getEnvironmentVariables(EnvironmentVariables);
        
        expect(variables).toBeInstanceOf(EnvironmentVariables);
        expect(variables.TEST).toEqual('https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider');
    });
});
