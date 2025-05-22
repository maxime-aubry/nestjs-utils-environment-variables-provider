"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEnvironmentVariablesException = void 0;
const common_1 = require("@nestjs/common");
/**
 * Exception to be thrown when environment variables read do not respect the specified contract.
 */
class InvalidEnvironmentVariablesException extends common_1.ConflictException {
    constructor(errors) {
        super(`Collection of environment variables is invalid. ${errors.toString()}`);
    }
}
exports.InvalidEnvironmentVariablesException = InvalidEnvironmentVariablesException;
