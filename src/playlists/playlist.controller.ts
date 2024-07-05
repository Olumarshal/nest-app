/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from "@nestjs/common";
import { Playlist } from "./playlist.entity";
import { CreatePlayListDto } from "./dto/create-playlist.dto";
import { PlayListService } from "./playlist.service";

@Controller('playlists')
export class PlayListController {
    constructor(private playListService: PlayListService) {}
    @Post()
    create(
        @Body()
        playlistDTO: CreatePlayListDto,
    ): Promise<Playlist> {
        return this.playListService.create(playlistDTO)
    }
}