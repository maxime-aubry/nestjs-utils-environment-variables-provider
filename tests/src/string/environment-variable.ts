import { StringProperty } from "../../src/decorators";
import { ICollectionOfEnvironmentVariables } from "../test.utils";

export class EnvironmentVariables implements ICollectionOfEnvironmentVariables<string> {
    @StringProperty()
    public readonly TEST!: string;
}
