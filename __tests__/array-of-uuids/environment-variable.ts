import { UUIDProperty } from "../../src/decorators";
import { ICollectionOfEnvironmentVariables } from "../test.utils";

export class EnvironmentVariables implements ICollectionOfEnvironmentVariables<string[]> {
    @UUIDProperty("4", { each: true })
    public readonly TEST!: string[];
}
