import { NumberProperty } from "../../src/decorators";

export class EnvironmentVariables {
    @NumberProperty()
    public readonly TEST!: number;
}
