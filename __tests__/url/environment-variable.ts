import { UrlProperty } from "../../src/decorators";

export class EnvironmentVariables {
    @UrlProperty()
    public readonly TEST!: string;
}
