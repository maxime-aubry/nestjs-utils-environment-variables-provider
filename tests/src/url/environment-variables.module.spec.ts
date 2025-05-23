import { afterEach, describe, it } from "vitest";
import {
	clearEnvironmentVariables,
	expectValueAsync,
	setEnvironmentVariables,
} from "../test.utils.js";
import { EnvironmentVariables } from "./environment-variable.js";

describe("Tests URL.", () => {
	afterEach(() => clearEnvironmentVariables());

	it("Environment variable 'TEST' equals to 'https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider'.", async () => {
		setEnvironmentVariables(
			"https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider",
		);
		await expectValueAsync(
			EnvironmentVariables,
			"https://github.com/maxime-aubry/nestjs-utils-environment-variables-provider",
		);
	});
});
