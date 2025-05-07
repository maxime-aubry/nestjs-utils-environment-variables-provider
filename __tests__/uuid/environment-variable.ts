import { UUIDProperty } from "../../src/decorators";
import { ICollectionOfEnvironmentVariables } from "../test.utils";

export class EnvironmentVariables implements ICollectionOfEnvironmentVariables<string> {
    @UUIDProperty("4")
    public readonly TEST!: string;
}
