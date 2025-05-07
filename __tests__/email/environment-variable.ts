import { EmailProperty } from "../../src/decorators";
import { ICollectionOfEnvironmentVariables } from "../test.utils";

export class EnvironmentVariables implements ICollectionOfEnvironmentVariables<string> {
    @EmailProperty()
    public readonly TEST!: string;
}
