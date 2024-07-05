/* eslint-disable prettier/prettier */
import { IsArray, IsDateString, IsOptional, IsString, } from "class-validator";

export class UpdateSongDto {
    @IsString()
    @IsOptional()
    readonly title;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
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