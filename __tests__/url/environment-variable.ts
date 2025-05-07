import { UrlProperty } from "../../src/decorators";
import { ICollectionOfEnvironmentVariables } from "../test.utils";

export class EnvironmentVariables implements ICollectionOfEnvironmentVariables<string> {
    @UrlProperty()
    public readonly TEST!: string;
}
