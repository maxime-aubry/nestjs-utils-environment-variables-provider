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

describe("Tests UUID.", () => {
	it("Environment variable 'VALUE' equals to 'ad83380e-d584-4956-b5f7-136f52c1439c'.", async () => {
		setEnvironmentVariable("ad83380e-d584-4956-b5f7-136f52c1439c");
		await expectValueAsync(
			EnvironmentVariablesWithSingleValue,
			"ad83380e-d584-4956-b5f7-136f52c1439c",
		);
	});

	it("Environment variables throw exception with wrong value 'a'.", async () => {
		setEnvironmentVariable("a");
		await expectExceptionAsync(EnvironmentVariablesWithSingleValue);
	});

	it("Environment variable 'VALUE' equals to ['07961f64-3a64-4657-adb2-ec904f7153b2','7f9950ba-ca65-4aa5-96d9-29876141e4c1'].", async () => {
		setEnvironmentVariable(
			"07961f64-3a64-4657-adb2-ec904f7153b2,7f9950ba-ca65-4aa5-96d9-29876141e4c1",
		);
		await expectValueAsync(EnvironmentVariablesWithMultipleValues, [
			"07961f64-3a64-4657-adb2-ec904f7153b2",
			"7f9950ba-ca65-4aa5-96d9-29876141e4c1",
		]);
	});

	it("Environment variables throw exception with wrong values ['a', 'b'].", async () => {
		setEnvironmentVariable("a,b");
		await expectExceptionAsync(EnvironmentVariablesWithMultipleValues);
	});
});
