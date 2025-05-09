import { ConflictException, ValidationError } from "@nestjs/common";

export class InvalidEnvironmentVariablesException extends ConflictException {
    constructor(errors: ValidationError[]) {
        super(`Collection of environment variables is invalid. ${errors.toString()}`);
    }
}
