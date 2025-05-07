import { EmailProperty } from "../../src/decorators";
import { ICollectionOfEnvironmentVariables } from "../test.utils";

export class EnvironmentVariables implements ICollectionOfEnvironmentVariables<string[]> {
    @EmailProperty({}, { each: true })
    public readonly TEST!: string[];
}
