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

describe("Tests URL.", () => {
	it("Environment variable 'VALUE' equals to 'https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider'.", async () => {
		setEnvironmentVariable(
			"https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider",
		);
		await expectValueAsync(
			EnvironmentVariablesWithSingleValue,
			"https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider",
		);
	});

	it("Environment variables throw exception with wrong value 'a'.", async () => {
		setEnvironmentVariable("a");
		await expectExceptionAsync(EnvironmentVariablesWithSingleValue);
	});

	it("Environment variable 'VALUE' equals to ['https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider','https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider/tree/develop'].", async () => {
		setEnvironmentVariable(
			"https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider,https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider/tree/develop",
		);
		await expectValueAsync(EnvironmentVariablesWithMultipleValues, [
			"https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider",
			"https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider/tree/develop",
		]);
	});

	it("Environment variables throw exception with wrong values ['a', 'b'].", async () => {
		setEnvironmentVariable("a,b");
		await expectExceptionAsync(EnvironmentVariablesWithMultipleValues);
	});
});
