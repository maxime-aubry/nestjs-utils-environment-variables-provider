# @otakusan76/nestjs-environment-variables-provider
Environment variables provider for Nest.JS project.

This library enables you to get a collection of environment variable as a class and validate model using by a class validation way.

## Required TypeScript Configuration
For your NestJS project to work with this package, ensure your `tsconfig.json` has at least these compiler options:

```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2023",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  }
}
```

These settings are required because:
- `emitDecoratorMetadata` and `experimentalDecorators`: Required for NestJS decorators and class validation
- `module` and `moduleResolution`: Set to "NodeNext" for compatibility with modern Node.js
- `target`: ES2023 or later for modern JavaScript features
- `esModuleInterop`: For better compatibility with CommonJS and ES Modules
- `strict`: Recommended for better type safety
- `skipLibCheck`: To avoid type checking of node_modules

## Usage
Define a class model to store your environment variables :

``` Typescript
import { EmailProperty, StringProperty } from '@otakusan76/nestjs-environment-variables-provider';

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

## tsconfig.json
``` JSON
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "baseUrl": "./",
    "declaration": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "noFallthroughCasesInSwitch": false,
    "noImplicitAny": false,
    "outDir": "./dist",
    "removeComments": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strictBindCallApply": false,
    "strictNullChecks": true,
    "target": "ES2023"
  },
  "include": ["src/**/*"]
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
