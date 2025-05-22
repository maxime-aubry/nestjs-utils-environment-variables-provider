"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const environment_variables_provider_js_1 = require("./environment-variables.provider.js");
const environment_variables_validation_js_1 = require("./environment-variables.validation.js");
/**
 * Environment configuration module.
 *
 * This module initializes the configuration via a custom validator and makes validated environment variables available throughout the application.
 */
let EnvironmentConfigModule = (() => {
    let _classDecorators = [(0, common_1.Module)({})];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var EnvironmentConfigModule = _classThis = class {
        /**
         * Initializes the module with a validation class for environment variables.
         *
         * @param envClass The class that describes and validates the expected environment variables.
         * @returns A dynamic module ready to be imported into the application.
         */
        static forRoot(envClass) {
            return {
                module: EnvironmentConfigModule,
                imports: [
                    config_1.ConfigModule.forRoot({
                        ignoreEnvFile: true,
                        isGlobal: true,
                        validate: (config) => (0, environment_variables_validation_js_1.validate)(envClass, config),
                    }),
                ],
                providers: [environment_variables_provider_js_1.EnvironmentVariablesProvider],
                exports: [environment_variables_provider_js_1.EnvironmentVariablesProvider],
            };
        }
    };
    __setFunctionName(_classThis, "EnvironmentConfigModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EnvironmentConfigModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EnvironmentConfigModule = _classThis;
})();
exports.EnvironmentConfigModule = EnvironmentConfigModule;
