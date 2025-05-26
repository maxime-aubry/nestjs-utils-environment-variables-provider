import { NumberProperty } from "@otakusan76/nestjs-environment-variables-provider/decorators";
import type { IEnvironmentVariables } from "../test.utils.js";

export class EnvironmentVariablesWithSingleValue
	implements IEnvironmentVariables<number>
{
	@NumberProperty()
	public readonly VALUE!: number;
}

export class EnvironmentVariablesWithMultipleValues
	implements IEnvironmentVariables<number[]>
{
	@NumberProperty({}, { each: true })
	public readonly VALUE!: number[];
}
