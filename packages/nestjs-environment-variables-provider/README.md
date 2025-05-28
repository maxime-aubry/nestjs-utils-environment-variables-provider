# Environment variables provider for Nest.JS project.

This library enables you to get a collection of environment variable as a class and validate model using by a class validation way.

## Required TypeScript Configuration
For your NestJS project to work with this package, ensure your `tsconfig.json` has at least these compiler options:

``` JSON
{
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "target": "ES2023"
  }
}
```

These settings are required because:
- `emitDecoratorMetadata` and `experimentalDecorators`: Required for NestJS decorators and class validation
- `module` and `moduleResolution`: Set to "NodeNext" for compatibility with modern Node.js
- `target`: ES2023 or later for modern JavaScript features
- `outDir`: Defines the output directory for compiled JavaScript files, keeping the build artifacts (usually in dist/) separate from the source TypeScript files.

## Usage
Let's consider this .env file in your project.

``` env
DATABASE_URL=test
ADMIN_EMAIL=a.a@a.com
```

Define a class model to store your environment variables :

``` Typescript
import { EmailProperty, StringProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';

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
import { EnvironmentConfigModule } from '@otakusan76/nestjs-environment-variables-provider';
import { EnvironmentVariables } from './environment-variables.ts

@Module({
    imports: [EnvironmentConfigModule.forRoot(EnvironmentVariables)],
})
export class AppModule {}
```

Call the environment variable provider in your custom code:

``` Typescript
import { Inject, Injectable } from '@nestjs/common';
import { EnvironmentVariablesProvider } from '@otakusan76/nestjs-environment-variables-provider';
import { EnvironmentVariables } from './environement-variables.js';

@Injectable()
export class CustomService {
  constructor(@Inject() private readonly provider: EnvironmentVariablesProvider) {}

  public doSomething(): void {
    const environementVariables: EnvironmentVariables = this.provider.getEnvironmentVariables(EnvironmentVariables);
    console.log('Environment Variables:', environementVariables);
  }
}
```

## Documentation

- [@otakusan76/nestjs-environment-variables-provider Documentation](https://maxime-aubry.github.io/nestjs-utils-environment-variables-provider)

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/6122959?v=4&s=128" width="64" height="64" alt="Maxime Aubry">
    </td>
    <td>
      <a href="https://github.com/maxime-aubry">Maxime Aubry</a>
    </td>
  </tr>
</table>
