import { StringProperty } from "../../src/decorators";

export class EnvironmentVariables {
    @StringProperty({ each: true })
    public readonly TEST!: string[];
}
