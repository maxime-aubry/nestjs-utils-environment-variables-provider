import { clearEnvironmentVariables, expectValueAsync, setEnvironmentVariables } from '../test.utils';
import { EnvironmentVariables } from './environment-variable';

describe('Tests array of booleans.', () => {
    afterEach(() => clearEnvironmentVariables());

    it("Environment variable 'TEST' equals to ['true','false'].", async () => {
        setEnvironmentVariables("true,false");
        await expectValueAsync(EnvironmentVariables, [true, false]);
    });

    it("Environment variable 'TEST' equals to ['True','False'].", async () => {
        setEnvironmentVariables("True,False");
        await expectValueAsync(EnvironmentVariables, [true, false]);
    });
});
