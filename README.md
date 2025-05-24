# nestjs-environment-variables-provider
Environment variables provider for Nest.JS project.

This project enables you to get a collection of environment variable as a class and validate model using by a class validation way.

Define a class model to store your environment variables :

``` Typescript
import { EmailProperty, StringProperty } from 'nestjs-environment-variables-provider';

export class EnvironmentVariables {
    @StringProperty()
    public readonly DATABASE_URL!: string;

    @EmailProperty()
    public readonly ADMIN_EMAIL!: string;
}
```

Define your module and register the "EnvironmentConfigModule" module :

``` Typescript
import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from 'nestjs-environment-variables-provider';
import { EnvironmentVariables } from './environment-variables.ts

@Module({
    imports: [EnvironmentConfigModule.forRoot(EnvironmentVariables)],
})
export class MyCustomModule {}
```

Call the environment variable provider in your custom code:

``` Typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomService {
    construtor(
        
    ) {}
}

```
