/* eslint-disable prettier/prettier */
import { Song } from '../songs/song.entity';
import { User } from '../users/users.entity';
import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('playlists')
export class Playlist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // Each playlist will have multiple songs
    @OneToMany(() => Song, (song) => song.playList)
    songs: Song[];

    // Many Playlist can belong to a single unique user
    @ManyToOne(() => User, (user) => user.playLists)
    user: User;

}