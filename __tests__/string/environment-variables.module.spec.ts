import { clearEnvironmentVariables, expectValueAsync, setEnvironmentVariables } from '../test.utils';
import { EnvironmentVariables } from './environment-variable';

describe('Tests string.', () => {
    afterEach(() => clearEnvironmentVariables());

    it("Environment variable 'TEST' equals to 'azerty'.", async () => {
        setEnvironmentVariables("azerty");
        await expectValueAsync(EnvironmentVariables, 'azerty');
    });
});
