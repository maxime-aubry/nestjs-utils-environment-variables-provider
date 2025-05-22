import { plainToInstance } from "class-transformer";
export function parse(envClass, config) {
    const variables = plainToInstance(envClass, config, {
        enableImplicitConversion: false,
        excludeExtraneousValues: true,
    });
    return variables;
}
;
