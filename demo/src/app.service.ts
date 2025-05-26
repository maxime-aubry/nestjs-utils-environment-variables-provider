import { Inject, Injectable } from '@nestjs/common';
import { EnvironmentVariablesProvider } from '@nestjs-utils/environment-variables-provider';
import { EnvironmentVariables } from './environement-variables.js';

@Injectable()
export class AppService {
  constructor(@Inject() private readonly provider: EnvironmentVariablesProvider) {}

  getHello(): string {
    const environementVariables: EnvironmentVariables = this.provider.getEnvironmentVariables(EnvironmentVariables);
    console.log('Environment Variables:', environementVariables);
    return 'Hello World!';
  }
}
