import { ClassConstructor, plainToInstance } from "class-transformer";

export function parse<TEnv extends object>(
    envClass: ClassConstructor<TEnv>,
    config: Record<string, unknown>,
): TEnv {
    const variables: TEnv = plainToInstance(envClass, config, {
        enableImplicitConversion: true,
        excludeExtraneousValues: true,
    });
    return variables;
};
