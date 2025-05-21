import { BooleanProperty } from "./boolean-property.decorator";
import { EmailProperty, IsEmailOptions } from "./email-property.decorator";
import { IsNumberOptions, NumberProperty } from "./number-property.decorator";
import { StringProperty } from "./string-property.decorator";
import { IsURLOptions, UrlProperty } from "./url-property.decorator";
import { UUIDProperty, UUIDVersion } from "./uuid-property.decorator";

export type {
    IsEmailOptions,
    IsNumberOptions,
    IsURLOptions,
    UUIDVersion
};

export {
    BooleanProperty,
    EmailProperty,
    NumberProperty,
    StringProperty,
    UrlProperty,
    UUIDProperty
};
