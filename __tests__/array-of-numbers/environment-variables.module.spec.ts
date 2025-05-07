import { clearEnvironmentVariables, expectExceptionAsync, expectValueAsync, setEnvironmentVariables } from '../test.utils';
import { EnvironmentVariables } from './environment-variable';

describe('Tests array of numbers.', () => {
    afterEach(() => clearEnvironmentVariables());

    it("Environment variable 'TEST' equals to [1,2].", async () => {
        setEnvironmentVariables("1,2");
        await expectValueAsync(EnvironmentVariables, [1, 2]);
    });

    it("Environment variable 'TEST' throws an exeception with wrong values [1,a].", async () => {
        setEnvironmentVariables("1,a");
        await expectExceptionAsync(EnvironmentVariables);
    });
});
