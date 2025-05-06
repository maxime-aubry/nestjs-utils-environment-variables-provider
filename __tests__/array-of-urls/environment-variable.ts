import { UrlProperty } from "../../src/decorators";

export class EnvironmentVariables {
    @UrlProperty({}, { each: true })
    public readonly TEST!: string;
}
