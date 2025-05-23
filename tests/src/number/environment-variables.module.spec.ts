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

describe("Tests number.", () => {
	it("Environment variable 'VALUE' equals to 1.", async () => {
		setEnvironmentVariable("1");
		await expectValueAsync(EnvironmentVariablesWithSingleValue, 1);
	});

	it("Environment variables throw exception with wrong value 'a'.", async () => {
		setEnvironmentVariable("a");
		await expectExceptionAsync(EnvironmentVariablesWithSingleValue);
	});

	it("Environment variable 'VALUE' equals to ['1', '2'].", async () => {
		setEnvironmentVariable("1,2");
		await expectValueAsync(EnvironmentVariablesWithMultipleValues, [1, 2]);
	});

	it("Environment variables throw exception with wrong values ['a', 'b'].", async () => {
		setEnvironmentVariable("a,b");
		await expectExceptionAsync(EnvironmentVariablesWithMultipleValues);
	});
});
