/* eslint-disable prettier/prettier */
import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSongDTO {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @IsNumber({}, { each: true })
    readonly artists;

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: string;

    @IsString()
    @IsNotEmpty()
    readonly lyrics: string;
}
