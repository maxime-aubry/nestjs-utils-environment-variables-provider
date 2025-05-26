import { EmailProperty } from "@otakusan76/nestjs-environment-variables-provider/decorators";
import type { IEnvironmentVariables } from "../test.utils.js";

export class EnvironmentVariablesWithSingleValue
	implements IEnvironmentVariables<string>
{
	@EmailProperty()
	public readonly VALUE!: string;
}

export class EnvironmentVariablesWithMultipleValues
	implements IEnvironmentVariables<string[]>
{
	@EmailProperty({}, { each: true })
	public readonly VALUE!: string[];
}
