import { UrlProperty } from "nestjs-environment-variables-provider/decorators";
import type { ICollectionOfEnvironmentVariables } from "../test.utils.js";

export class EnvironmentVariables
	implements ICollectionOfEnvironmentVariables<string>
{
	@UrlProperty()
	public readonly TEST!: string;
}
