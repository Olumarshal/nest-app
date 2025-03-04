/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Song } from './song.entity';
import { CreateSongDTO } from './dto/create-song-dto';
import { Artist } from '../artists/artists.entity';
import { UpdateSongDto } from './dto/update-song-dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
    @InjectRepository(Artist)
    private artistsRepository: Repository<Artist>,
  ) {}

  async create(songDTO: CreateSongDTO): Promise<Song> {
    const song = new Song();
    song.title = songDTO.title;
    song.artists = songDTO.artists;
    song.duration = songDTO.duration;
    song.lyrics = songDTO.lyrics;
    song.releaseDate = songDTO.releaseDate;

    // Fetch all the artists based on the ids
    const artists = await this.artistsRepository.findByIds(songDTO.artists);
    // set the relation b/w artist and song
    song.artists = artists;

    return await this.songsRepository.save(song);
  }

  findAll(): Promise<Song[]> {
    return this.songsRepository.find({ relations: ['artists'] });
  }

  async findOne(id: number): Promise<Song> {
    const song = await this.songsRepository.findOne({
      where: { id },
      relations: ['artists'],
    });
    if (!song) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }
    return song;
  }

  async update(
    id: number,
    recordToUpdate: UpdateSongDto,
  ): Promise<UpdateResult> {
    return await this.songsRepository.update(id, recordToUpdate);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.songsRepository.delete(id);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Song>> {
    const queryBuilder = this.songsRepository.createQueryBuilder('c');
    queryBuilder.orderBy('c.releaseDate', 'DESC');

    return paginate<Song>(queryBuilder, options);
  }
}
