import { ConflictException, type ValidationError } from "@nestjs/common";
/**
 * Exception to be thrown when environment variables read do not respect the specified contract.
 */
export declare class InvalidEnvironmentVariablesException extends ConflictException {
    constructor(errors: ValidationError[]);
}
