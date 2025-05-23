import { BooleanProperty } from "nestjs-environment-variables-provider/decorators";
import type { ICollectionOfEnvironmentVariables } from "../test.utils.js";

export class EnvironmentVariables
	implements ICollectionOfEnvironmentVariables<boolean>
{
	@BooleanProperty()
	public readonly TEST!: boolean;
}
