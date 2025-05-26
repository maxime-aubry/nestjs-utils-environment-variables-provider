import { UUIDProperty } from "@otakusan76/nestjs-environment-variables-provider/decorators";
import type { IEnvironmentVariables } from "../test.utils.js";

export class EnvironmentVariablesWithSingleValue
	implements IEnvironmentVariables<string>
{
	@UUIDProperty("4")
	public readonly VALUE!: string;
}

export class EnvironmentVariablesWithMultipleValues
	implements IEnvironmentVariables<string[]>
{
	@UUIDProperty("4", { each: true })
	public readonly VALUE!: string[];
}
