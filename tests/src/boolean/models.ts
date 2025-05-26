import { BooleanProperty } from "@nestjs-utils/environment-variables-provider/decorators";
import type { IEnvironmentVariables } from "../test.utils.js";

export class EnvironmentVariablesWithSingleValue
	implements IEnvironmentVariables<boolean>
{
	@BooleanProperty()
	public readonly VALUE!: boolean;
}

export class EnvironmentVariablesWithMultipleValues
	implements IEnvironmentVariables<boolean[]>
{
	@BooleanProperty({ each: true })
	public readonly VALUE!: boolean[];
}
