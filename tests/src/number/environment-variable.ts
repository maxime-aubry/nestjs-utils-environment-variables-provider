import { NumberProperty } from "nestjs-environment-variables-provider/decorators";
import type { ICollectionOfEnvironmentVariables } from "../test.utils.js";

export class EnvironmentVariables
	implements ICollectionOfEnvironmentVariables<number>
{
	@NumberProperty()
	public readonly TEST!: number;
}
