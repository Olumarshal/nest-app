/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlayListDto {
    @IsString()
    @IsNotEmpty()
    readonly name;

    @IsNotEmpty()
    @IsArray()
    @IsNumber({}, { each: true })
    readonly songs;

    @IsNumber()
    @IsNotEmpty()
    readonly user: number;
}