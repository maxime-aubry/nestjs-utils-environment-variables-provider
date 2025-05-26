import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '@otakusan76/nestjs-environment-variables-provider';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { EnvironmentVariables } from './environement-variables.js';

@Module({
  imports: [EnvironmentConfigModule.forRoot(EnvironmentVariables)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
