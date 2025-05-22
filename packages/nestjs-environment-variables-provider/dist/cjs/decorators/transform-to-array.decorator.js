"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformToArray = TransformToArray;
const class_transformer_1 = require("class-transformer");
const index_js_1 = require("../utils/index.js");
function TransformToArray() {
    return (0, class_transformer_1.Transform)(({ value }) => {
        if (typeof value !== 'string')
            return value;
        const values = value.split(index_js_1.SEPARATOR);
        return values;
    });
}
;
