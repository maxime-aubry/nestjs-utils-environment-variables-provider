import { describe, it } from "vitest";
import { expectValueAsync, setEnvironmentVariable } from "../test.utils.js";
import {
	EnvironmentVariablesWithMultipleValues,
	EnvironmentVariablesWithSingleValue,
} from "./models.js";

describe("Tests string.", () => {
	it("Environment variable 'VALUE' equals to 'azerty'.", async () => {
		setEnvironmentVariable("azerty");
		await expectValueAsync(EnvironmentVariablesWithSingleValue, "azerty");
	});

	it("Environment variable 'VALUE' equals to ['azerty','qwerty'].", async () => {
		setEnvironmentVariable("azerty,qwerty");
		await expectValueAsync(EnvironmentVariablesWithMultipleValues, [
			"azerty",
			"qwerty",
		]);
	});
});
