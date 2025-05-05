import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentConfigModule } from "../src/environment-variables.module";
import { EnvironmentVariablesProvider } from '../src/environment-variables.provider';
import { EnvModel } from './env.model';

describe('Tests for EnvironmentConfigModule', () => {
    it('x', async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [EnvironmentConfigModule.forRoot(EnvModel)],
        }).compile();

        expect(moduleRef).toBeDefined();

        const environmentVariablesProvider: EnvironmentVariablesProvider = moduleRef.get(EnvironmentVariablesProvider);
        const variables: EnvModel = environmentVariablesProvider.get(EnvModel);
        
        expect(variables).toBeInstanceOf(EnvModel);
        expect(variables.TEST).toEqual('azerty');
    });
});
