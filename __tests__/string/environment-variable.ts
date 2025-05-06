import { StringProperty } from "../../src/decorators";

export class EnvironmentVariables {
    @StringProperty()
    public readonly TEST!: string;
}
