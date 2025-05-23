import { UUIDProperty } from "nestjs-environment-variables-provider/decorators";
import type { ICollectionOfEnvironmentVariables } from "../test.utils.js";

export class EnvironmentVariables
	implements ICollectionOfEnvironmentVariables<string>
{
	@UUIDProperty("4")
	public readonly TEST!: string;
}
