import { describe, it } from "vitest";
import {
	expectExceptionAsync,
	expectValueAsync,
	setEnvironmentVariable,
} from "../test.utils.js";
import {
	EnvironmentVariablesWithMultipleValues,
	EnvironmentVariablesWithSingleValue,
} from "./models.js";

describe("Tests boolean.", () => {
	it("Environment variable 'VALUE' equals to 'true'.", async () => {
		setEnvironmentVariable("true");
		await expectValueAsync(EnvironmentVariablesWithSingleValue, true);
	});

	it("Environment variable 'VALUE' equals to 'True'.", async () => {
		setEnvironmentVariable("True");
		await expectValueAsync(EnvironmentVariablesWithSingleValue, true);
	});

	it("Environment variable 'VALUE' equals to 'false'.", async () => {
		setEnvironmentVariable("false");
		await expectValueAsync(EnvironmentVariablesWithSingleValue, false);
	});

	it("Environment variable 'VALUE' equals to 'False'.", async () => {
		setEnvironmentVariable("False");
		await expectValueAsync(EnvironmentVariablesWithSingleValue, false);
	});

	it("Environment variables throw exception with wrong value 'a'.", async () => {
		setEnvironmentVariable("a");
		await expectExceptionAsync(EnvironmentVariablesWithSingleValue);
	});

	it("Environment variable 'VALUE' equals to ['true','false'].", async () => {
		setEnvironmentVariable("true,false");
		await expectValueAsync(EnvironmentVariablesWithMultipleValues, [
			true,
			false,
		]);
	});

	it("Environment variable 'VALUE' equals to ['True','False'].", async () => {
		setEnvironmentVariable("True,False");
		await expectValueAsync(EnvironmentVariablesWithMultipleValues, [
			true,
			false,
		]);
	});

	it("Environment variables throw exception with wrong values ['a', 'b'].", async () => {
		setEnvironmentVariable("a,b");
		await expectExceptionAsync(EnvironmentVariablesWithSingleValue);
	});
});
