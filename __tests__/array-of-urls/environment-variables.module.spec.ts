import { clearEnvironmentVariables, expectValueAsync, setEnvironmentVariables } from '../test.utils';
import { EnvironmentVariables } from './environment-variable';

describe('Tests array of URLs.', () => {
    afterEach(() => clearEnvironmentVariables());

    it("Environment variable 'TEST' equals to ['https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider','http://www.google.com'].", async () => {
        setEnvironmentVariables("https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider,http://www.google.com");
        await expectValueAsync(
            EnvironmentVariables,
            ['https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider','http://www.google.com']
        );
    });
});
