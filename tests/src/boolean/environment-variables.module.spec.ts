import { afterEach, beforeAll, describe, it } from "vitest";
import {
	clearEnvironmentVariables,
	expectExceptionAsync,
	expectValueAsync,
	setEnvironmentVariables,
} from "../test.utils.js";
import { EnvironmentVariables } from "./environment-variable.js";

describe("Tests boolean.", () => {
	beforeAll(() => clearEnvironmentVariables());
	afterEach(() => clearEnvironmentVariables());

	it("Environment variable 'TEST' equals to 'true'.", async () => {
		setEnvironmentVariables("true");
		await expectValueAsync(EnvironmentVariables, true);
	});

	it("Environment variable 'TEST' equals to 'True'.", async () => {
		setEnvironmentVariables("True");
		await expectValueAsync(EnvironmentVariables, true);
	});

	it("Environment variable 'TEST' equals to 'false'.", async () => {
		setEnvironmentVariables("false");
		await expectValueAsync(EnvironmentVariables, false);
	});

	it("Environment variable 'TEST' equals to 'False'.", async () => {
		setEnvironmentVariables("False");
		await expectValueAsync(EnvironmentVariables, false);
	});

	it("Environment variable 'TEST' throws an exeception with wrong value 'wrong value'.", async () => {
		setEnvironmentVariables("wrong value");
		await expectExceptionAsync(EnvironmentVariables);
	});
});
