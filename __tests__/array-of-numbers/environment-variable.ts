import { NumberProperty } from "../../src/decorators";
import { ICollectionOfEnvironmentVariables } from "../test.utils";

export class EnvironmentVariables implements ICollectionOfEnvironmentVariables<number[]> {
    @NumberProperty({}, { each: true })
    public readonly TEST!: number[];
}
