import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClassConstructor } from 'class-transformer';
import { EnvironmentVariablesProvider } from './environment-variables.provider';
import { validate } from './environment-variables.validation';

@Module({})
export class EnvironmentConfigModule {
  static forRoot<TCollectionOfEnvironmentVariables extends object>(envClass: ClassConstructor<TCollectionOfEnvironmentVariables>): DynamicModule {
    return {
      module: EnvironmentConfigModule,
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
          isGlobal: true,
          validate: (config) => validate(envClass, config),
        }),
      ],
      providers: [EnvironmentVariablesProvider],
      exports: [EnvironmentVariablesProvider],
    };
  }
}
