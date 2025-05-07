import { clearEnvironmentVariables, expectValueAsync, setEnvironmentVariables } from '../test.utils';
import { EnvironmentVariables } from './environment-variable';

describe('Tests number.', () => {
    afterEach(() => clearEnvironmentVariables());

    it("Environment variable 'TEST' equals to 1.", async () => {
        setEnvironmentVariables("1");
        await expectValueAsync(EnvironmentVariables, 1);
    });
});
