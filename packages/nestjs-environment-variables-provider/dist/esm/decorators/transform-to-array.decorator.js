import { Transform } from "class-transformer";
import { SEPARATOR } from "../utils/index.js";
export function TransformToArray() {
    return Transform(({ value }) => {
        if (typeof value !== 'string')
            return value;
        const values = value.split(SEPARATOR);
        return values;
    });
}
;
