import { type ClassConstructor } from "class-transformer";
export declare function parse<TCollectionOfEnvironmentVariables extends object>(envClass: ClassConstructor<TCollectionOfEnvironmentVariables>, config: Record<string, unknown>): TCollectionOfEnvironmentVariables;
