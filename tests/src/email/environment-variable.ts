import { EmailProperty } from "nestjs-environment-variables-provider/decorators";
import type { ICollectionOfEnvironmentVariables } from "../test.utils.js";

export class EnvironmentVariables
	implements ICollectionOfEnvironmentVariables<string>
{
	@EmailProperty()
	public readonly TEST!: string;
}
