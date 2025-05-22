import { ConflictException } from "@nestjs/common";
/**
 * Exception to be thrown when environment variables read do not respect the specified contract.
 */
export class InvalidEnvironmentVariablesException extends ConflictException {
    constructor(errors) {
        super(`Collection of environment variables is invalid. ${errors.toString()}`);
    }
}
