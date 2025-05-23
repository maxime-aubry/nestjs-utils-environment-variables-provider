import { afterEach, describe, it } from "vitest";
import {
	clearEnvironmentVariables,
	expectValueAsync,
	setEnvironmentVariables,
} from "../test.utils.js";
import { EnvironmentVariables } from "./environment-variable.js";

describe("Tests email.", () => {
	afterEach(() => clearEnvironmentVariables());

	it("Environment variable 'TEST' equals to 'a.a@domain.fr'.", async () => {
		setEnvironmentVariables("a.a@domain.fr");
		await expectValueAsync(EnvironmentVariables, "a.a@domain.fr");
	});
});
