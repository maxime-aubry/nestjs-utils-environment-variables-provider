import { NumberProperty } from "../../src/decorators";

export class EnvironmentVariables {
    @NumberProperty({}, { each: true })
    public readonly TEST!: number[];
}
