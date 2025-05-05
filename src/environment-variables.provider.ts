import { Injectable } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';
import { parse } from './parser';

@Injectable()
export class EnvironmentVariablesProvider {
    public get<TEnv extends object>(
        envClass: ClassConstructor<TEnv>
    ): TEnv {
        const variables: TEnv = parse<TEnv>(envClass, process.env);
        return variables;
    }
}
