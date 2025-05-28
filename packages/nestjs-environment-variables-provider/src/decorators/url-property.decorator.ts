import { Expose } from "class-transformer";
import { IsUrl } from "class-validator";
import { TransformToArray } from "./transform-to-array.decorator.js";
import type { ValidationOptions } from "./type.js";

/**
 * Options to be passed to the UrlProperty decorator.
 */
export interface IsURLOptions {
	/**
	 * If `protocols` is set, only URLs using one of the specified protocols will be considered valid.
	 *
	 * @default ['http', 'https', 'ftp']
	 */
	protocols?: string[] | undefined;
	/**
	 * If `require_tld` is set to `true`, the validator will require the URL to include a top-level domain.
	 *
	 * @default true
	 */
	require_tld?: boolean | undefined;
	/**
	 * If `require_protocol` is set to `true`, the URL must include a protocol (e.g. `http://`).
	 *
	 * @default false
	 */
	require_protocol?: boolean | undefined;
	/**
	 * If `require_host` is set to `true`, the URL must contain a valid host.
	 *
	 * @default true
	 */
	require_host?: boolean | undefined;
	/**
	 * If `require_port` is set to `true`, the URL must include an explicit port number.
	 *
	 * @default false
	 */
	require_port?: boolean | undefined;
	/**
	 * If `require_valid_protocol` is set to `true`, the protocol must be one of the allowed values defined in `protocols`.
	 *
	 * @default true
	 */
	require_valid_protocol?: boolean | undefined;
	/**
	 * If `allow_underscores` is set to `true`, underscores will be permitted in the host name.
	 *
	 * @default false
	 */
	allow_underscores?: boolean | undefined;
	/**
	 * If `host_whitelist` is set, only URLs whose host matches one of the strings or regular expressions in the list will be allowed.
	 *
	 * @default false
	 */
	host_whitelist?: Array<string | RegExp> | undefined;
	/**
	 * If `host_blacklist` is set, any URL whose host matches one of the specified strings or regular expressions will be rejected.
	 *
	 * @default false
	 */
	host_blacklist?: Array<string | RegExp> | undefined;
	/**
	 * If `allow_trailing_dot` is set to `true`, the URL may include a trailing dot in the host name.
	 *
	 * @default false
	 */
	allow_trailing_dot?: boolean | undefined;
	/**
	 * If `allow_protocol_relative_URLs` is set to `true`, protocol-relative URLs (e.g. `//example.com`) will be accepted.
	 *
	 * @default false
	 */
	allow_protocol_relative_URLs?: boolean | undefined;
	/**
	 * If `disallow_auth` is set to `true`, URLs containing authentication (e.g. `user:pass@`) will be rejected.
	 *
	 * @default false
	 */
	disallow_auth?: boolean | undefined;
	/**
	 * If `allow_fragments` is set to `true`, URLs may include fragments (e.g. `#section`).
	 *
	 * @default true
	 */
	allow_fragments?: boolean | undefined;
	/**
	 * If `allow_query_components` is set to `true`, URLs may contain query parameters (e.g. `?key=value`).
	 *
	 * @default true
	 */
	allow_query_components?: boolean | undefined;
	/**
	 * If `validate_length` is set to `true`, the validator will enforce a maximum length on the URL.
	 *
	 * @default true
	 */
	validate_length?: boolean | undefined;
	/**
	 * If `max_allowed_length` is set, it defines the maximum number of characters allowed in the URL.
	 * If set to `false`, no length check will be applied.
	 *
	 * @default 2084
	 */
	max_allowed_length?: number | false | undefined;
}

/**
 * This decorator can be used to validate and transform a field in a URL or an array of URLs.
 *
 * @param options Options to be passed to the decorator.
 * @param validationOptions Validation options (e.g. `each` for collections).
 * @returns A property decorator that validates and transforms the field to an URL or an array of URLs.
 * 
 * Your can load environment variables in the form of an URL.
 * 
 * @example
 * ``` TypeScript
 * import { UrlProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @UrlProperty()
 *     public readonly VALUE!: boolean;
 * }
 * ```
 * 
 * You also can load environment variables in the form of an array of URLs.
 * 
 * @example
 * ``` TypeScript
 * import { UrlProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @UrlProperty({}, { each: true })
 *     public readonly VALUES!: boolean[];
 * }
 * ```
 */
export function UrlProperty(
	options?: IsURLOptions,
	validationOptions?: ValidationOptions,
): PropertyDecorator {
	return function (target: object, propertyKey: string | symbol): void {
		if (validationOptions?.each) TransformToArray()(target, propertyKey);
		IsUrl(options || {}, validationOptions)(target, propertyKey);
		Expose()(target, propertyKey);
	};
}
