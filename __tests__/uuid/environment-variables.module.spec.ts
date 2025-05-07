import { clearEnvironmentVariables, expectValueAsync, setEnvironmentVariables } from '../test.utils';
import { EnvironmentVariables } from './environment-variable';

describe('Tests UUID.', () => {
    afterEach(() => clearEnvironmentVariables());

    it("Environment variable 'TEST' equals to 'ad83380e-d584-4956-b5f7-136f52c1439c'.", async () => {
        setEnvironmentVariables("ad83380e-d584-4956-b5f7-136f52c1439c");
        await expectValueAsync(EnvironmentVariables, 'ad83380e-d584-4956-b5f7-136f52c1439c');
    });
});
