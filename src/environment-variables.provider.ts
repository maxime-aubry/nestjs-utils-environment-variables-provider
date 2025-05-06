import { Injectable } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';
import { parse } from './parser';

@Injectable()
export class EnvironmentVariablesProvider {
    public getEnvironmentVariables<TCollectionOfEnvironmentVariables extends object>(
        envClass: ClassConstructor<TCollectionOfEnvironmentVariables>
    ): TCollectionOfEnvironmentVariables {
        const variables: TCollectionOfEnvironmentVariables = parse<TCollectionOfEnvironmentVariables>(envClass, process.env);
        return variables;
    }
}
