import { EmailProperty, NumberProperty, StringProperty, UrlProperty, UUIDProperty } from '@nestjs-utils/environment-variables-provider/decorators';

export class EnvironmentVariables {
    @StringProperty()
    public readonly DATABASE_URL!: string;

    @EmailProperty()
    public readonly ADMIN_EMAIL!: string;

    @UUIDProperty("4")
    public readonly TENANT_ID!: string;

    @UUIDProperty("4")
    public readonly CLIENT_ID!: string;

    @UrlProperty()
    public readonly API_URL!: string;

    @NumberProperty()
    public readonly PORT!: number;
}
