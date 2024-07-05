/* eslint-disable prettier/prettier */
import { Playlist } from 'src/playlists/playlist.entity';
import { Artist } from '../artists/artist.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('songs')
export class Song {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('date')
    releaseDate: Date;

    @Column('time')
    duration: Date;

    @Column('text')
    lyrics: string;

    @ManyToMany(() => Artist, (artist) => artist.songs, { cascade: true })
    @JoinTable({ name: 'songs_artists'})
    artists: Artist[];

    @ManyToMany(() => Playlist, (playList) => playList.songs)
    playList: Playlist;
}