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

describe("Tests email.", () => {
	it("Environment variable 'VALUE' equals to 'a.a@domain.com'.", async () => {
		setEnvironmentVariable("a.a@domain.com");
		await expectValueAsync(
			EnvironmentVariablesWithSingleValue,
			"a.a@domain.com",
		);
	});

	it("Environment variables throw exception with wrong value 'a'.", async () => {
		setEnvironmentVariable("a");
		await expectExceptionAsync(EnvironmentVariablesWithSingleValue);
	});

	it("Environment variable 'VALUE' equals to ['a.a@domain.com','b.b@domain.com'].", async () => {
		setEnvironmentVariable("a.a@domain.com,b.b@domain.com");
		await expectValueAsync(EnvironmentVariablesWithMultipleValues, [
			"a.a@domain.com",
			"b.b@domain.com",
		]);
	});

	it("Environment variables throw exception with wrong values ['a', 'b'].", async () => {
		setEnvironmentVariable("a,b");
		await expectExceptionAsync(EnvironmentVariablesWithMultipleValues);
	});
});
