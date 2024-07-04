/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // local db
    // local array

    private readonly songs = [];

    create(song) {
        // Save the song to db
        this.songs.push(song);
        return this.songs;
    }

    findAll() {
        // fetch songs from db
        return this.songs;
    }
}
