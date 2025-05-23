import { afterEach, beforeAll, describe, it } from "vitest";
import {
	clearEnvironmentVariable,
	expectExceptionAsync,
	expectValueAsync,
	setEnvironmentVariable,
} from "../test.utils.js";
import { EnvironmentVariables } from "./environment-variable.js";

describe("Tests boolean.", () => {
	beforeAll(() => clearEnvironmentVariables());
	afterEach(() => clearEnvironmentVariables());

	it("'true' boolean string values are valid.", async () => {
		setEnvironmentVariable("SINGLE_BOOLEAN", "true");
		setEnvironmentVariable("MULTIPLE_BOOLEANS", ["true", "true"]);
		const env: EnvironmentVariables = new EnvironmentVariables();
		env.SINGLE_BOOLEAN = true;
		env.MULTIPLE_BOOLEANS = [true, true];
		await expectValueAsync(EnvironmentVariables, true);
	});

	it("'True' boolean string values are valid.", async () => {
		setEnvironmentVariable("SINGLE_BOOLEAN", "True");
		setEnvironmentVariable("MULTIPLE_BOOLEANS", ["True", "True"]);
		env.SINGLE_BOOLEAN = true;
		env.MULTIPLE_BOOLEANS = [true, true];
		await expectValueAsync(EnvironmentVariables, true);
	});

	it("'false' boolean string values are valid.", async () => {
		setEnvironmentVariable("SINGLE_BOOLEAN", "false");
		setEnvironmentVariable("MULTIPLE_BOOLEANS", ["false", "false"]);
		env.SINGLE_BOOLEAN = false;
		env.MULTIPLE_BOOLEANS = [false, false];
		await expectValueAsync(EnvironmentVariables, false);
	});

	it("'False' boolean string values are valid.", async () => {
		setEnvironmentVariable("SINGLE_BOOLEAN", "False");
		setEnvironmentVariable("MULTIPLE_BOOLEANS", ["False", "False"]);
		env.SINGLE_BOOLEAN = false;
		env.MULTIPLE_BOOLEANS = [false, false];
		await expectValueAsync(EnvironmentVariables, false);
	});

	it("'true' and 'false' boolean string values are valid.", async () => {
		setEnvironmentVariable("SINGLE_BOOLEAN", "false");
		setEnvironmentVariable("MULTIPLE_BOOLEANS", ["true", "false"]);
		env.SINGLE_BOOLEAN = false;
		env.MULTIPLE_BOOLEANS = [true, false];
		await expectValueAsync(EnvironmentVariables, false);
	});

	it("'True' and 'False' boolean string values are valid.", async () => {
		setEnvironmentVariable("SINGLE_BOOLEAN", "False");
		setEnvironmentVariable("MULTIPLE_BOOLEANS", ["True", "False"]);
		env.SINGLE_BOOLEAN = false;
		env.MULTIPLE_BOOLEANS = [true, false];
		await expectValueAsync(EnvironmentVariables, false);
	});

	it("Environment variables throw execeptions with wrong values 'wrong value'.", async () => {
		setEnvironmentVariable("SINGLE_BOOLEAN", "wrong value");
		setEnvironmentVariable("MULTIPLE_BOOLEANS", ["wrong value", "wrong value"]);
		await expectExceptionAsync(EnvironmentVariables);
	});
});

function clearEnvironmentVariables(): void {
	clearEnvironmentVariable("SINGLE_BOOLEAN");
	clearEnvironmentVariable("MULTIPLE_BOOLEANS");
};
