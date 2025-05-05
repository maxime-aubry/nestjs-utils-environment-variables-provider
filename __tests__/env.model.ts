import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class EnvModel {
    @IsString()
    @Expose()
    public TEST!: string;
}
