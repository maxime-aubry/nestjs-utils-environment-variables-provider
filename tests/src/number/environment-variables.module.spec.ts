import { afterEach, describe, it } from "vitest";
import {
	clearEnvironmentVariables,
	expectValueAsync,
	setEnvironmentVariables,
} from "../test.utils.js";
import { EnvironmentVariables } from "./environment-variable.js";

describe("Tests number.", () => {
	afterEach(() => clearEnvironmentVariables());

	it("Environment variable 'TEST' equals to 1.", async () => {
		setEnvironmentVariables("1");
		await expectValueAsync(EnvironmentVariables, 1);
	});
});
