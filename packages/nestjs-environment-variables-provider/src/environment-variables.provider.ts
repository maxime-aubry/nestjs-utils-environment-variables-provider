import { Injectable } from "@nestjs/common";
import type { ClassConstructor } from "class-transformer";
import { parse } from "./parser.js";

/**
 * Provider of validated environment variables.
 *
 * This class is used to obtain environment variables in the form of a typed instance according to the validation class supplied.
 * 
 * @hideconstructor
 * 
 * @example
 * ``` TypeScript
 * import { Inject, Injectable } from '@nestjs/common';
 * import { EnvironmentVariablesProvider } from '@otakusan76/nestjs-environment-variables-provider';
 * import { EnvironmentVariables } from './environement-variables.js';
 * 
 * @Injectable()
 * export class CustomService {
 * 	constructor(@Inject() private readonly provider: EnvironmentVariablesProvider) {}
 * 
 * 	public doSomething(): void {
 * 		const environementVariables: EnvironmentVariables =
 * 	    		this.provider.getEnvironmentVariables(EnvironmentVariables);
 * 		console.log('Environment Variables:', environementVariables);
 * 	}
 * }
 * ```
 */
@Injectable()
export class EnvironmentVariablesProvider {
	/**
	 * Returns an instance containing mapped and validated environment variables.
	 *
	 * @template TCollectionOfEnvironmentVariables The type describing the shape of the environment variables.
	 * @param envClass The class used to type and validate environment variables.
	 * @returns Typed environment variables.
	 * 
	 * @example
	 * ``` TypeScript
	 * const environementVariables: EnvironmentVariables = this.provider.getEnvironmentVariables(EnvironmentVariables);
	 * ```
	 */
	public getEnvironmentVariables<
		TCollectionOfEnvironmentVariables extends object,
	>(
		envClass: ClassConstructor<TCollectionOfEnvironmentVariables>,
	): TCollectionOfEnvironmentVariables {
		const variables: TCollectionOfEnvironmentVariables =
			parse<TCollectionOfEnvironmentVariables>(envClass, process.env);
		return variables;
	}
}
