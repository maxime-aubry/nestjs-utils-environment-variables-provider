import { clearEnvironmentVariables, expectValueAsync, setEnvironmentVariables } from '../test.utils';
import { EnvironmentVariables } from './environment-variable';

describe('Tests array of strings.', () => {
    afterEach(() => clearEnvironmentVariables());

    it("Environment variable 'TEST' equals to ['ad83380e-d584-4956-b5f7-136f52c1439c','38b87ece-bb38-4ece-a345-769fe697edf8'].", async () => {
        setEnvironmentVariables("ad83380e-d584-4956-b5f7-136f52c1439c,38b87ece-bb38-4ece-a345-769fe697edf8");
        await expectValueAsync(
            EnvironmentVariables,
            ['ad83380e-d584-4956-b5f7-136f52c1439c','38b87ece-bb38-4ece-a345-769fe697edf8'],
        );
    });
});
