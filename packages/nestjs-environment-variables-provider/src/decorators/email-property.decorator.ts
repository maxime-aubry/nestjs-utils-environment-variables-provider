import { Expose } from "class-transformer";
import { IsEmail } from "class-validator";
import { TransformToArray } from "./transform-to-array.decorator.js";
import type { ValidationOptions } from "./type.js";

/**
 * Options to be passed to EmailProperty decorator.
 */
export interface IsEmailOptions {
	/**
	 * If `allow_display_name` is set to `true`, the validator will also match `Display Name <email-address>`.
	 *
	 * @default false
	 */
	allow_display_name?: boolean | undefined;
	/**
	 * If `require_display_name` is set to `true`, the validator will reject strings without the format `Display Name <email-address>`.
	 *
	 * @default false
	 */
	require_display_name?: boolean | undefined;
	/**
	 * If `allow_utf8_local_part` is set to `false`, the validator will not allow any non-English UTF8 character in email address' local part.
	 *
	 * @default true
	 */
	allow_utf8_local_part?: boolean | undefined;
	/**
	 * If `require_tld` is set to `false`, e-mail addresses without having TLD in their domain will also be matched.
	 *
	 * @default true
	 */
	require_tld?: boolean | undefined;
	/**
	 * If `ignore_max_length` is set to `true`, the validator will not check for the standard max length of an email.
	 *
	 * @default false
	 */
	ignore_max_length?: boolean | undefined;
	/**
	 * If `allow_ip_domain` is set to `true`, the validator will allow IP addresses in the host part.
	 *
	 * @default false
	 */
	allow_ip_domain?: boolean | undefined;
	/**
	 * If `domain_specific_validation` is `true`, some additional validation will be enabled,
	 * e.g. disallowing certain syntactically valid email addresses that are rejected by GMail.
	 *
	 * @default false
	 */
	domain_specific_validation?: boolean | undefined;
	/**
	 * If `allow_underscores` is set to `true`, the validator will allow underscores in an email address.
	 *
	 * @default false
	 */
	allow_underscores?: boolean | undefined;
	/**
	 *  If host_blacklist is set to an array of strings
	 *  and the part of the email after the @ symbol matches one of the strings defined in it,
	 *  the validation fails.
	 */
	host_blacklist?: string[] | undefined;
	/**
	 * If host_whitelist is set to an array of strings
	 * and the part of the email after the @ symbol matches none of the strings defined in it,
	 * the validation fails.
	 */
	host_whitelist?: string[] | undefined;
	/**
	 *  If blacklisted_chars receives a string, then the validator will reject emails that include
	 *  any of the characters in the string, in the name part.
	 */
	blacklisted_chars?: string | undefined;
}

/**
 * This decorator can be used to validate and transform a field in a email or an array of emails.
 *
 * @param options Options to be passed to the decorator.
 * @param validationOptions Validation options (e.g. `each` for collections).
 * @returns A property decorator that validates and transforms the field to an email or an array of emails.
 * 
 * Your can load environment variables in the form of an email.
 * 
 * @example
 * ``` TypeScript
 * import { EmailProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @EmailProperty()
 *     public readonly VALUE!: boolean;
 * }
 * ```
 * 
 * You also can load environment variables in the form of an array of emails.
 * 
 * @example
 * ``` TypeScript
 * import { EmailProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
 * 
 * export class EnvironmentVariables {
 *     @EmailProperty({}, { each: true })
 *     public readonly VALUES!: boolean[];
 * }
 * ```
 */
export function EmailProperty(
	options?: IsEmailOptions,
	validationOptions?: ValidationOptions,
): PropertyDecorator {
	return function (target: object, propertyKey: string | symbol): void {
		if (validationOptions?.each) TransformToArray()(target, propertyKey);
		IsEmail(options || {}, validationOptions)(target, propertyKey);
		Expose()(target, propertyKey);
	};
}
