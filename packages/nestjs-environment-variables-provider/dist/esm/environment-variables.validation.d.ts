import type { ClassConstructor } from 'class-transformer';
export declare function validate<TCollectionOfEnvironmentVariables extends object>(envClass: ClassConstructor<TCollectionOfEnvironmentVariables>, config: Record<string, unknown>): TCollectionOfEnvironmentVariables;
