import { ConflictException, ValidationError } from "@nestjs/common";

export class InvalidEnvironmentVariablesException extends ConflictException {
    constructor(errors: ValidationError[]) {
        super(`Collection of environment variables is invalid. ${errors.toString()}`);
    }
}

export class InvalidCastException extends ConflictException {
    constructor(propertyName: string) {
        super(`Unable to cast value of environment variable "${propertyName}".`);
    }
}
