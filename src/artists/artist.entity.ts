/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, OneToOne } from 'typeorm';
import { Song } from '../songs/song.entity';
import { User } from 'src/users/user.entity';

@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToMany(() => Song, (song) => song.artists)
  songs: Song[];
}
