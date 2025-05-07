import { BooleanProperty } from "../../src/decorators";
import { ICollectionOfEnvironmentVariables } from "../test.utils";

export class EnvironmentVariables implements ICollectionOfEnvironmentVariables<boolean[]> {
    @BooleanProperty({ each: true })
    public readonly TEST!: boolean[];
}
