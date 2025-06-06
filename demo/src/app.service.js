var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable } from '@nestjs/common';
import { EnvironmentVariablesProvider } from '@otakusan76/nestjs-environment-variables-provider';
import { EnvironmentVariables } from './environement-variables.js';
let AppService = class AppService {
    provider;
    constructor(provider) {
        this.provider = provider;
    }
    getHello() {
        const environementVariables = this.provider.getEnvironmentVariables(EnvironmentVariables);
        console.log('Environment Variables:', environementVariables);
        return 'Hello World!';
    }
};
AppService = __decorate([
    Injectable(),
    __param(0, Inject()),
    __metadata("design:paramtypes", [EnvironmentVariablesProvider])
], AppService);
export { AppService };
