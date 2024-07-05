/* eslint-disable prettier/prettier */
import { IsArray, IsDateString, IsNumber, IsOptional, IsString, } from "class-validator";

export class UpdateSongDto {
    @IsString()
    @IsOptional()
    readonly title;

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    readonly artists;

    @IsDateString()
    @IsOptional()
    readonly releaseDate: Date;

    @IsString()
    @IsOptional()
    readonly duration: string;

    @IsString()
    @IsOptional()
    readonly lyrics: string;

}