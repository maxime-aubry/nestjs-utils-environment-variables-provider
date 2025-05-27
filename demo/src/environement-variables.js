var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EmailProperty, NumberProperty, StringProperty, UrlProperty, UUIDProperty } from '@otakusan76/nestjs-environment-variables-provider/decorators';
export class EnvironmentVariables {
    DATABASE_URL;
    ADMIN_EMAIL;
    TENANT_ID;
    CLIENT_ID;
    API_URL;
    PORT;
}
__decorate([
    StringProperty(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "DATABASE_URL", void 0);
__decorate([
    EmailProperty(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "ADMIN_EMAIL", void 0);
__decorate([
    UUIDProperty("4"),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "TENANT_ID", void 0);
__decorate([
    UUIDProperty("4"),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "CLIENT_ID", void 0);
__decorate([
    UrlProperty(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "API_URL", void 0);
__decorate([
    NumberProperty(),
    __metadata("design:type", Number)
], EnvironmentVariables.prototype, "PORT", void 0);
